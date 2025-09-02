// routes/quote.js
const express = require('express');
const router = express.Router();
const { getRandomQuote } = require('../services/quoteService');
const rateLimiter = require('../middleware/rateLimiter');

/**
 * @swagger
 * /api/quote:
 *   get:
 *     summary: Get a random inspirational quote
 *     responses:
 *       200:
 *         description: Returns a random quote
 *         content:
 *           application/json:
 *             example:
 *               quote: "Believe you can and you're halfway there. - Theodore Roosevelt"
 *       429:
 *         description: Rate limit exceeded
 *         content:
 *           application/json:
 *             example:
 *               error: "Rate limit exceeded. Try again later."
 */

router.get('/quote', rateLimiter, (req, res) => {
    console.log(`Request from IP: ${req.ip}`);
    const quote = getRandomQuote();
    res.json(quote);
});

module.exports = router;
