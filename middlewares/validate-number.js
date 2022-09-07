'use strict'
module.exports = () => {
    return (req, res, next) => {
        console.log(req.query.query)
        if (!isNaN(parseInt(req.query.query))) {
            // req.squarenum = Math.pow(parseInt(arg),2)
            req.squarenum =  (Math.pow(parseInt(req.query.query),2)).toString();
            next();
        } else {
            next(`${req.query.query} is not a number`);
        }
    }
}