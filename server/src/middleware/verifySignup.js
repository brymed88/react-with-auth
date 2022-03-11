import AccountModel from '../models/account.model.js';

async function CheckCurrentUser(user) {
    const user = await AccountModel.findOne({ email: email });
}

module.exports = {
    CheckCurrentUser,
}