# kuppismart-quote-api

A RESTful API to return random inspirational quotes with IP-based rate limiting.

## Features
- GET `/api/quote` returns a random inspirational quote
- IP-based rate limiting: 5 requests per minute per IP
- Logging of requests (IP & timestamp)
- Swagger/OpenAPI documentation

## Setup

1. Clone the repository:
```bash
git clone <repo-url>
cd quote-api
