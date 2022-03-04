require('dotenv').config();
const crypto = require('crypto');

const DoHash = async (txt, secret) => {
    const hashPass = new Promise((resolve, reject) => {

        const hash = crypto.createHmac('sha256', secret)
            .update(txt)
            .digest('hex');

        if (hash) { resolve({ pass: hash }); }
        else { reject(false); }
    });
    let res = await hashPass;
    return res;
}

 const RandomChar = async (length) => {
    const rando = new Promise((resolve, reject) => {
        let rand = crypto.randomBytes(length).toString('hex');
        if (rand) {
            resolve(rand)
        }
        else {
            reject(false);
        }
    });
    let res = await rando;
    return res;
}

module.exports.DoHash = DoHash
module.exports.RandomChar = RandomChar