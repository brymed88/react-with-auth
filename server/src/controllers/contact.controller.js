const contactService = require('../services/contact.service');

async function get(req, res, next) {
    try {
        res.json(await contactService.get(req.query));
    }
    catch (err) {
        console.error('Error while getting user information', err.message);
        next(err);
    }
}

async function create(req, res, next) {
    try {
        res.json(await contactService.get(req.query));
    }
    catch (err) {
        console.error('Error while getting user information', err.message);
        next(err);
    }
}

async function update(req, res, next) {
    try {
        res.json(await contactService.get(req.query));
    }
    catch (err) {
        console.error('Error while getting user information', err.message);
        next(err);
    }
}

async function remove(req, res, next) {
    try {
        res.json(await contactService.get(req.query));
    }
    catch (err) {
        console.error('Error while getting user information', err.message);
        next(err);
    }
}
module.exports = {
    get,
    create,
    update,
    remove
}
