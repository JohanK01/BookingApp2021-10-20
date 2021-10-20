exports.app = (req, res) => {

    res.sendfile('public/html/app.html');

};
exports.bok = (req, res) => {
    res.sendfile('public/html/bookings.html');
};
