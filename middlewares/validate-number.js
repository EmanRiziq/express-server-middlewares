'use strict'
module.exports = () => {
    return (req, res, next) => {
        console.log(req.query.num)
        const regex = /^\d*$/
        if (regex.test(req.query.num)) {
            // if (!isNaN(parseInt(req.query.num))) {
            // req.squarenum = Math.pow(parseInt(arg),2)
            req.squarenum = (Math.pow(parseInt(req.query.num), 2)).toString();
            next();
        } else {
            next(`${req.query.num} is not a number`);
        }
    }
}