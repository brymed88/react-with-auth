import AccountModel from '../models/account.model.js';

/*
 * Middleware to check if the user exists prior to routing through controllers for user creation in the DB
 */

const userExists = async (req, res, next) => {
  const email = req.body.email || req.query.email;

  const curUser = await AccountModel.findOne({ email });

  if (curUser) {
    return res.status(200).json({ status: 'User already exists' });
  }

  return next();
};

export default userExists;
