import AccountModel from '../models/account.model.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import contactService from './contact.service.js';
import GenerateRandNum from '../utils/GenerateRandNum.helper.js';

const accountService = {};

accountService.login = async ({ email, password }) => {
  // Validate user input
  if (!(email && password)) {
    return { status: 'null' };
  }

  let user = await AccountModel.findOne({ email: email });

  //Verify user exists and that incoming password matches stored user password
  if (
    user &&
    (await bcrypt.compareSync(password, user.password)) === true &&
    user.active === true
  ) {
    //Create signed jwt token
    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: '12h',
      }
    );

    //Set user token to signed jwt token
    user.token = token;

    //Save user information
    user.save();

    return { accessToken: user.token };
  }

  return { status: 'Invalid Credentials' };
};

accountService.create = async ({ email, password }) => {
  if (!(email && password)) {
    return { status: 'Invalid input' };
  }

  //Check if user already exists
  if (await AccountModel.findOne({ email: email })) {
    return { status: 'Existing user' };
  }

  const user = await AccountModel.create({
    //Set user email to email lowercase
    email: email.toLowerCase(),

    //Set password to password input - encrypted
    password: bcrypt.hashSync(password, 10),

    //Set account active to false
    active: false,
  });

  if (user) {
    //Create 6 digit random code and assign to user.authcode in db
    user.authcode = GenerateRandNum(6);

    //Save user information
    user.save();

    //Call contactService.sendcode to send email to user
    contactService.sendcode({ email: email, code: user.authcode });

    return { status: 'success' };
  }

  return { status: 'failed' };
};

accountService.passReset = async ({ email, password }) => {
  //If email input does not exist return invalid
  if (!email) {
    return { status: 'invalid user' };
  }

  let user = await AccountModel.findOne({ email: email });

  if (user) {
    //Set user password to new password - encrypted
    user.password = bcrypt.hashSync(password, 10);

    //Set account status back to active since workflow is now finished
    user.active = true;

    //Save new user data
    user.save();

    //Call contactService.resetPassword to notify user of pass reset (maybe fraudulent?)
    contactService.resetPassword({ email: email });

    return { status: 'success' };
  }

  return { status: 'invalid user' };
};

accountService.generateCode = async ({ email }) => {
  //If email input does not exist return invalid
  if (!email) {
    return { status: 'invalid user' };
  }

  let user = await AccountModel.findOne({ email: email });

  if (user) {
    //Set account inactive if pass reset workflow -- login will not work if inactive.
    user.active = false;

    //Generate 6 digit auth code
    user.authcode = GenerateRandNum(6);

    //Save user data
    user.save();

    //Call contactService.sendcode to send email to user
    contactService.resetCode({ email: email, code: user.authcode });

    return { status: 'success' };
  }

  return { status: 'invalid user' };
};

accountService.verifyCode = async ({ email, code }) => {
  code.toString();

  // Validate user input
  if (!(email && code)) {
    return { status: 'invalid user' };
  }

  let user = await AccountModel.findOne({ email: email });

  //Check for valid user, if so set user.code and change status to true
  if (user) {
    if (user.authcode === code) {
      //Set user active to true
      user.active = true;

      //Default user authcode to empty
      user.authcode = '';

      //Save user data
      user.save();

      return { status: 'success' };
    }

    return { status: 'invalid user' };
  }

  return { status: 'invalid user' };
};

export default accountService;
