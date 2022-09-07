'use strict'
module.exports = (arg) => {
    return (req, res, next) => {
        if (!isNaN(arg)) {
            // req.squarenum = Math.pow(parseInt(arg),2)
            req.squarenum =  (Math.pow(parseInt(arg),2)).toString();
            next();
        } else {
            next(`${arg} is not a number`);
        }
    }
}