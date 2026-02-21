# Simple Task Manager API

**Description:**

This project provides a simple RESTful API for managing tasks. It allows users to create, read, update, and delete tasks. The frontend provides a basic interface for interacting with the API.

**Why it's useful:**

A task manager is a fundamental tool for productivity. This API provides a foundation for building more complex task management applications or integrating task management functionality into existing systems.

**Installation:**

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/simple-task-manager.git
    cd simple-task-manager
    ```

2.  **Set up the backend:**
    ```bash
    python -m venv venv
    source venv/bin/activate  # Linux/macOS
    # venv\Scripts\activate  # Windows
    pip install -r requirements.txt
    ```

3.  **Set up the frontend:**
    ```bash
    npm install
    npm start
    ```

4.  **Set up environment variables:**
    Create a `.env` file in the root directory and populate it with the following:
    ```
    DATABASE_URL=sqlite:///tasks.db
    ```

**API Endpoints:**

*   `GET /tasks`: Retrieves all tasks.
*   `GET /tasks/{id}`: Retrieves a specific task by ID.
*   `POST /tasks`: Creates a new task.  Request body should be a JSON object with `title` and `description` fields.
*   `PUT /tasks/{id}`: Updates an existing task. Request body should be a JSON object with `title` and/or `description` fields.
*   `DELETE /tasks/{id}`: Deletes a task by ID.

**Examples:**

*   **Create a task:**
    `POST /tasks`
    Request Body:
    ```json
    {
      "title": "Grocery Shopping",
      "description": "Buy milk, eggs, and bread"
    }
    ```
    Response:
    ```json
    {
      "id": 1,
      "title": "Grocery Shopping",
      "description": "Buy milk, eggs, and bread",
      "completed": false
    }
    ```

*   **Get all tasks:**
    `GET /tasks`
    Response:
    ```json
    [
      {
        "id": 1,
        "title": "Grocery Shopping",
        "description": "Buy milk, eggs, and bread",
        "completed": false
      },
      {
        "id": 2,
        "title": "Pay Bills",
        "description": "Pay electricity and internet bills",
        "completed": true
      }
    ]
    ```

**New Features:**

*   **Task Completion:** Clicking a "Complete" button marks a task as done, visually striking it through. Clicking "Undo" reverts the task to its original state.
*   **Task Deletion:**  A "Delete" button is added to each task item, allowing users to remove tasks directly from the list.
*   **Error Handling:**  The frontend now displays error messages if there are issues fetching or creating tasks.
*   **Health Check Endpoint:** Added a `/health` endpoint for monitoring the API's availability.

**Testing (Conceptual - Requires actual test implementation):**

*   **Unit Tests:**  Write unit tests for the Flask routes to ensure they handle requests and responses correctly.
*   **Integration Tests:**  Test the interaction between the frontend and backend to verify that tasks are created, updated, and deleted as expected.

**Documentation Improvements:**

*   Expanded the README to include details about the new features.
*   Added a section on testing.

**Refactoring:**

*   Improved the frontend's task rendering logic for better readability and maintainability.
*   Used `async/await` for asynchronous API calls to improve responsiveness.

**License:**

MIT License