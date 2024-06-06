const model = require('./model');

module.exports.startScreen = (req, res) => {
    res.send('Database only receives data but not showing it');
}

module.exports.sendMessage = async (req, res) => {
    const message = req.body;
    model.create(message)
    .then(data => res.send(data))
}