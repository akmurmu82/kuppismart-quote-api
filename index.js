// index.js
const express = require('express');
const morgan = require('morgan');
const quoteRouter = require('./routes/quote');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

const app = express();
const PORT = process.env.PORT || 3000;

// Logger middleware
app.use(morgan('combined'));

// Swagger docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use('/api', quoteRouter);
// index.js
app.get('/', (req, res) => {
    res.send(`
        <h1>Welcome to the Quote API</h1>
        <p>Use <a href="/api-docs">Swagger Docs</a> to explore the API endpoints.</p>
        <p>Quote endpoint: <a href="/api/quote">/api/quote</a></p>
    `);
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Swagger docs at http://localhost:${PORT}/api-docs`);
});
