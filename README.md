# Node.js Login Page

A simple login page built with Express.js for learning and testing purposes.

## Tech Stack

| Package            | Purpose                        |
|--------------------|--------------------------------|
| express            | Web framework                  |
| express-session    | Session management             |
| bcryptjs           | Password hashing               |
| express-validator  | Input validation               |
| jest               | Test runner                    |
| supertest          | HTTP integration testing       |
| nodemon            | Auto-restart in dev mode       |

## Getting Started

```bash
# Install dependencies
npm install

# Start the server
npm start

# Dev mode (auto-restart)
npm run dev

# Run tests
npm test
```

## Default Credentials (for testing)

- Username: `admin`
- Password: `admin123`

## Project Structure

```
nodejs-login/
├── server.js           # Express app + routes
├── views/
│   └── login.html      # Login UI
├── tests/
│   └── login.test.js   # Jest + Supertest tests
└── package.json
```
