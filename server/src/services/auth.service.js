
async function get(user) {
    return user;
    //grab user from database and return user information
}

async function create(user) {
    return user;
    //insert new user in database
}

async function update(user) {
    return user;
    //update user in database
}

async function remove(user) {
    return user
    //remove user from database
}

module.exports = {
    get,
    create,
    update,
    remove
}