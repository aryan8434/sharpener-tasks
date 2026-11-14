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

---

## 📦 Project Structure

```
task_11/
├── index1_task.js       # Main server file: configures Express app, mounts routers, listens on port 4000
├── routes/
│   ├── student.js       # Router module for /students endpoints and parameter parsing
│   └── courses.js       # Router module for /courses endpoints and query parameter parsing
└── README.md            # Comprehensive project documentation
```

### Module Responsibilities:
- **`index1_task.js`**: Initializes Express instance, binds root path `/`, imports and mounts `./routes/student` at `/students` and `./routes/courses` at `/courses`, declares fallback 404 middleware, and starts HTTP server on port 4000.
- **`routes/student.js`**: Exports an `express.Router()` handling student list retrieval and individual student lookups by dynamic ID.
- **`routes/courses.js`**: Exports an `express.Router()` handling course catalog retrieval and individual course queries with description details.

---

## ⚙️ Prerequisites & Installation

### Requirements:
- **Node.js**: v14.x, v16.x, v18.x, v20.x, or later installed.
- **npm**: Node Package Manager (comes bundled with Node.js).

### Step-by-Step Installation:
1. Navigate to the task directory:
   ```bash
   cd task_11
   ```
2. Initialize npm (if starting fresh):
   ```bash
   npm init -y
   ```
3. Install the Express package dependency:
   ```bash
   npm install express
   ```
4. Verify installation:
   ```bash
   node -v
   npm list express
   ```

---

## ▶️ Running the Server

Start the application with Node:
```bash
node index1_task.js
```

Or run with `nodemon` for automatic live-reloading during development:
```bash
npx nodemon index1_task.js
```

### Expected Terminal Output:
```text
Server is running on http://localhost:4000
```

Once running, the server listens for HTTP requests on `http://localhost:4000`. You can test endpoints using a web browser, Postman, or terminal `curl`.

---

## 🧑‍🎓 Student API Endpoints (`routes/student.js`)

The student router is mounted at prefix `/students` in `index1_task.js`:
```javascript
const studentRoutes = require("./routes/student");
app.use("/students", studentRoutes);
```

### 1. List All Students with Query Filter
- **Method**: `GET`
- **Path**: `/students/`
- **Query Parameter**: `name` (optional)
- **Code Implementation**:
  ```javascript
  router.get("/", (req, res) => {
    const name = req.query;
    res.send(`List all students: ${name}`);
  });
  ```
- **Example Request**:
  ```bash
  curl "http://localhost:4000/students?name=Aryan"
  ```

### 2. Get Student by ID with Name Query
- **Method**: `GET`
- **Path**: `/students/:id`
- **Route Parameter (`req.params`)**: `id` (e.g. `101`)
- **Query Parameter (`req.query`)**: `name` (e.g. `Aryan`)
- **Code Implementation**:
  ```javascript
  router.get("/:id", (req, res) => {
    const studentId = req.params.id;
    const name = req.query.name;
    res.send(`Student ID: ${studentId}, Name: ${name}`);
  });
  ```
- **Example Request**:
  ```bash
  curl "http://localhost:4000/students/101?name=Aryan"
  ```
- **Expected Output**:
  ```text
  Student ID: 101, Name: Aryan
  ```

---

## 📚 Courses API Endpoints (`routes/courses.js`)

The courses router is mounted at prefix `/courses` in `index1_task.js`:
```javascript
const courseRoutes = require("./routes/courses");
app.use("/courses", courseRoutes);
```

### 1. List All Courses with Query
- **Method**: `GET`
- **Path**: `/courses/`
- **Query Parameter**: `name` (optional filter)
- **Code Implementation**:
  ```javascript
  router.get("/", (req, res) => {
    const name = req.query;
    res.send(`List all courses: ${name}`);
  });
  ```
- **Example Request**:
  ```bash
  curl "http://localhost:4000/courses?name=Backend"
  ```

### 2. Get Course Details by ID, Name, and Description
- **Method**: `GET`
- **Path**: `/courses/:id`
- **Route Parameter (`req.params`)**: `id` (dynamic course identifier)
- **Query Parameters (`req.query`)**: `name`, `description`
- **Code Implementation**:
  ```javascript
  router.get("/:id", (req, res) => {
    const id = req.params.id;
    const name = req.query.name;
    const description = req.query.description;
    res.send(`Course ID: ${id}, Name: ${name}, Description: ${description}`);
  });
  ```
- **Example Request**:
  ```bash
  curl "http://localhost:4000/courses/502?name=ExpressMastery&description=LearnRoutingInExpress"
  ```
- **Expected Output**:
  ```text
  Course ID: 502, Name: ExpressMastery, Description: LearnRoutingInExpress
  ```
