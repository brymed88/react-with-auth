const Account = require('../model/account.model');

async function get(query, page, limit) {
    try {
        let users = await Account.find(query);
        return users;
    }
    catch (e) {
        //log error
        throw Error('Error while retreiving user')
    }
}

async function create(user) {
    return user;
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