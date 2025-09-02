// services/quoteService.js
const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Do what you can, with what you have, where you are. - Theodore Roosevelt",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill"
];

function getRandomQuote() {
    const index = Math.floor(Math.random() * quotes.length);
    return { quote: quotes[index] };
}

module.exports = { getRandomQuote };
