/* GET homepage */
const index = (req, res) => {
    res.render('index', { title: 'expense tracker' });
    };
    module.exports = {
        index
        };