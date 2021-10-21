exports.app = (req, res) => {

    res.sendfile('public/html/app.html');

};

exports.login = (req, res) => {

    res.sendfile('public/html/login.html');

};
exports.myBookings = (req, res) => {

    res.sendfile('public/html/myBookings.html');

};

exports.appUpdate = (req, res) => {
    const fs = require('fs');

    const time = req.body.timeName;
    const tempText = {time};
    const newJsonText = JSON.stringify(tempText);

    fs.writeFile('./public/data/user.json', newJsonText, function(err) {
        if (err) throw err;
        console.log('bra jobbat');
    });
    res.sendfile('./public/html/app.html')
};

