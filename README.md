# Basic Task manager application (CRUD)

## Endpoints
The application provides the following endpoints:

GET /: Fetch all tasks.

GET /:id: Fetch a specific task by id.

POST /: Add a new task.

DELETE /: Delete a task by id.

PUT /:id: Update a task by id.

## Request Body
Requests to POST / and PUT /:id should include a JSON body with the following:

- task: The task description.

For POST /, an id is automatically generated and assigned to the new task.

## Query Parameters
Requests to DELETE / should include the id query parameter to specify the task to delete.

## Built with
- Express.js
