const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "kuppismart-quote-api",
      version: "1.0.0",
      description: "A simple RESTful API to return random inspirational quotes with IP-based rate limiting"
    }
  },
  apis: ["./routes/*.js"]
};

const swaggerSpec = swaggerJsdoc(options);
module.exports = swaggerSpec;
