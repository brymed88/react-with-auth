const Account = require('../models/account.model');
bcrypt = require("bcryptjs");

async function get(query, page, limit) {
    return query;
    /*try {
        let users = await Account.findOne(query);
        return users;
    }
    catch (e) {
        //log error
        throw Error('Error while retreiving user')
    }*/
}

async function create(query) {
    return query;
    /*try {
        let users = await Account.create({
            first_name: '',
            last_name: '',
            email: query.email,
            password: query.password,
            token:bcrypt.hashSync(query.password, 8)
        }
        )
    }
    catch (e) {

    }*/
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