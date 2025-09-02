const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 60 * 1000,
    max: 5,
    message: (req, res) => ({ error: 'Rate limit exceeded. Try again later.' })
});

module.exports = limiter;
