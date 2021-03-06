const bcrypt = require('bcrypt');


module.exports.hashPassword = async (password) => {
    const saltRounds = 10;
    const hashedPassword = await new Promise((resolve, reject) => {
        bcrypt.hash(password, saltRounds, function (err, hash) {
            if (err) reject(err)
            resolve(hash)
        });
    })

    return hashedPassword
}

module.exports.comparePassword = async (password, passwordFromDb) => {
    const match = await new Promise((resolve, reject) => {
        bcrypt.compare(password, passwordFromDb, function (err, result) {
            if (err) reject(err)
            resolve(result)
        });
    })

    return match


}