# Express.js - Task 11: Modular Routing, Route Parameters, and Query Strings

A modular Express.js web server demonstrating clean route separation, dynamic route parameters (`req.params`), and URL query strings (`req.query`) using Express Router (`express.Router()`).

---

## 📖 Overview

In modern web development with Express.js, placing all endpoints in a single file becomes unmaintainable as an application grows. Task 11 demonstrates:
1. **Modular Routing**: Splitting endpoint logic across dedicated route modules (`student.js` and `courses.js`).
2. **Mounting Sub-routers**: Using `app.use('/prefix', router)` to attach sub-paths cleanly.
3. **Dynamic Route Parameters**: Capturing path variables from URLs using `:param` syntax (`req.params`).
4. **Query String Handling**: Extracting optional URL query parameters using `req.query`.
5. **Catch-All 404 Handler**: Gracefully handling unmatched routes with custom 404 responses.

---

## 🚀 Key Features & Learning Objectives

- **`express.Router()`**: Creating mini-applications that isolate student and course business logic.
- **Root-level Route**: Exposing `/` with basic greeting confirmation.
- **Parameterized Routes**: Extracting route params such as `/students/:id` and `/courses/:id`.
- **Query Parameter Extraction**: Reading key-value pairs appended after `?` (e.g., `?name=John&description=NodeJS`).
- **Middleware Chaining**: Enforcing strict top-to-bottom route evaluation order.
- **Fallback 404 Middleware**: Returning HTTP status `404` with a readable error message for undefined routes.
