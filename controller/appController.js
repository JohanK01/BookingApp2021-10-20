exports.app = (req, res) => {

    res.sendfile('public/html/app.html');

};

exports.login = (req, res) => {

    res.sendfile('public/html/login.html');

};
exports.myBookings = (req, res) => {

    res.sendfile('public/html/myBookings.html');

};

