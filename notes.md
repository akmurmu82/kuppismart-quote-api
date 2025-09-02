Project Structure

quote-api/
├─ index.js              # Entry point
├─ routes/
│   └─ quote.js          # Quote endpoint
├─ services/
│   └─ quoteService.js   # Random quote logic
├─ middleware/
│   └─ rateLimiter.js    # IP-based rate limiter
├─ swagger.js            # Swagger configuration
├─ package.json
└─ README.md


1. What is Swagger?

Swagger is a toolset for documenting, designing, and testing RESTful APIs.

It uses the OpenAPI specification (JSON/YAML) to describe your API.

Provides interactive API documentation so anyone can understand and test your endpoints without writing code.

2. Why use Swagger?

Acts as a self-explanatory manual for your API.

Helps frontend and backend teams collaborate efficiently.

Allows you to test API endpoints directly from the browser.

Generates documentation in a standard format (OpenAPI), which many tools support.

3. Key Components

Swagger UI

A web interface to explore and test your API endpoints interactively.

Swagger JSdoc

Converts JSDoc comments in your code to Swagger/OpenAPI specification.

OpenAPI Specification

JSON or YAML file describing your endpoints, request parameters, and responses.

4. How Swagger Works in Node.js

Install dependencies:

npm install swagger-jsdoc swagger-ui-express


Create a swagger.js file:

const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Quote API",
      version: "1.0.0",
      description: "A simple RESTful API to return random quotes"
    }
  },
  apis: ["./routes/*.js"] // Path to files with Swagger comments
};

const swaggerSpec = swaggerJsdoc(options);
module.exports = swaggerSpec;


Serve Swagger UI in index.js:

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


Add JSDoc comments in your route file (routes/quote.js):

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

5. Accessing Swagger

Start your server:

npm start


Open in browser:

http://localhost:3000/api-docs


You’ll see all endpoints, descriptions, and can try them out interactively.

6. Key Notes for Submission

Swagger docs are optional bonus points, but nice for showing professionalism.

Always include:

Endpoint summary

Response codes and examples

Rate-limiting responses (like 429)

Use apis: ["./routes/*.js"] so it automatically picks up your JSDoc comments.

7. Tips for Using Swagger Effectively

Document Every Endpoint

Include summary, parameters, request body, and response codes.

Include Examples

Always provide example responses; makes testing easier.

Keep it Updated

Swagger should reflect the latest API changes; avoid stale docs.

Use Tags for Grouping

Tag related endpoints (e.g., Quotes, Users) for better readability.

Rate Limits & Errors

Document errors like 429 (rate limiting) or 404 (not found) so clients know what to expect.

Interactive Testing

Use Swagger UI to test endpoints before submission or release.

Environment Awareness

For dev/staging/production, adjust server URLs in Swagger if needed.

Optional Bonus Features

Add authentication headers, query parameters, and request examples for full clarity.