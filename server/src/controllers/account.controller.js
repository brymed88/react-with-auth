import accountService from '../services/account.service.js';

const accountController = {};

accountController.login = async (req, res) => {
  try {
    res.json(await accountService.login(req.body));
  } catch (err) {
    console.log(`User login failed - user: ${req.body.email}`, err.message);
    return res.status(400).json({ status: 'User login failed' });
  }
};

accountController.create = async (req, res) => {
  try {
    res.json(await accountService.create(req.body));
  } catch (err) {
    console.log(
      `Account creation failed - user: ${req.body.email}`,
      err.message
    );
    return res.status(400).json({ status: 'Account creation failed' });
  }
};

accountController.generateCode = async (req, res) => {
  try {
    return res.json(await accountService.generateCode(req.body));
  } catch (err) {
    console.log('Error while generating one-time code', err.message);
    return res.status(400).json({ status: 'invalid' });
  }
};

accountController.verifyCode = async (req, res) => {
  try {
    return res.json(await accountService.verifyCode(req.body));
  } catch (err) {
    console.log(`Error verifying code - user: ${req.body.email}`, err.message);
    return res.status(400).json({ status: 'invalid' });
  }
};

accountController.verifyToken = (req, res) => {
  try {
    if (req.body.token) {
      return res.status(200).json({ status: 'Valid Token' });
    }
    return res.status(400).json({ status: 'invalid' });
  } catch (err) {
    console.log(`Error verifying token - user: ${req.body.email}`, err.message);
    return res.status(400).json({ status: 'invalid' });
  }
};

accountController.passReset = async (req, res) => {
  try {
    return res.status(200).json(await accountService.passReset(req.body));
  } catch (err) {
    console.log(
      `Error while resetting password - user: ${req.body.email}`,
      err.message
    );
    return res.status(400).json({ status: 'invalid' });
  }
};

export default accountController;
