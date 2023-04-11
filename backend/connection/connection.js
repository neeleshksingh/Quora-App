const mongoose = require('mongoose')
mongoose.set(`strictQuery`, true)
async function getConnection() {
    await mongoose.connect(`mongodb://localhost:27017/quora`).then(() => {
        console.log('connected to database successfully');
    }).catch((e) => {
        console.error(e);
    })
}

module.exports = getConnection