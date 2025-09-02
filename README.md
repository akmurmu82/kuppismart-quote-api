# kuppismart-quote-api

# 🚀 Quote API

A simple **RESTful API** built with **Node.js + Express** that returns random inspirational quotes.  
Includes **IP-based rate limiting** (5 requests/minute per IP) and **Swagger documentation**.  

---

## 📌 Features
- `GET /api/quote` → Returns a random quote in JSON format  
- Rate limiting (5 requests/minute per IP)  
- Logs each request (IP + status code)  
- Swagger documentation at `/api-docs`  
- Home route (`/`) with quick links  

---

## ⚙️ Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/quote-api.git
   cd quote-api
   ```

2. Install dependencies:
```
npm install
```

3. Run the server:
```
npm start
```

4. API will run at:
```
http://localhost:3000
```

---

📖 API Endpoints

1. Home Route

```
GET /
```

Returns a welcome message with links to Swagger docs and the Quote API.

---

2. Get Random Quote
```
GET /api/quote
```

Response Example (200):

```
{
  "quote": "The only way to do great work is to love what you do. - Steve Jobs"
}

Response Example (429 – Rate Limit Exceeded):

{
  "error": "Rate limit exceeded. Try again in 30 seconds."
}
```

---

3. Swagger Documentation
```
GET /api-docs
```

Interactive API documentation (Swagger UI).

---

🛠️ Testing with Curl/Postman

Get a random quote:

```
curl http://localhost:3000/api/quote
```

Check Swagger docs in browser:

```
http://localhost:3000/api-docs
```

---

📂 Project Structure

```
.
├── routes/
│   └── quote.js      # Quote route with Swagger docs
├── index.js          # Main server entry point
├── swagger.js        # Swagger configuration
├── package.json
└── README.md
```

---

✨ Bonus Features

- Swagger/OpenAPI documentation ✅

- Rate limiting with in-memory store ✅

- Customizable quotes list ✅

---

👨‍💻 Author

Developed by Amit Kumar Murmu for the Full-Stack Developer Intern Assignment at Kuppismart Solutions Pvt. Ltd.
