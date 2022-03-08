const AccountModel = require('../models/account.model');
bcrypt = require("bcryptjs");

async function get(query, page, limit) {

    let users = await AccountModel.findOne({ email: query.email });

    if (users) {
        //do some logic to verify the password and JWT token match then return token...
        return { status: success }
    }
    else {
        return { status: null }
    }
}

async function create(query) {
    //TODO add validation and additional logic before blindly inserting new user
    try {

        let users = new AccountModel({
            first_name: '',
            last_name: '',
            email: query.email,
            password: bcrypt.hashSync(query.password, 8),
            token: ''
        });

        users.save((err, data) => {
            if (err) {
                console.log(err)
                return err
            }
            else {
                return 'success';
            }

        });
    }
    catch (e) {
        return 'failed to insert user';
    }
}

async function update(user) {
    return user;
}

async function remove(user) {
    return user
}

module.exports = {
    get,
    create,
    update,
    remove
}