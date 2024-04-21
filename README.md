## Icarus Joining Process

This repository contains code for the Icarus Joining Process, which involves a web application for user sign-up and sign-in. The goal is to implement this process correctly, introduce intentional bugs, and demonstrate the use of automated tests to validate the code changes.

### Project Structure

- **`index.html`**: This file defines the front-end structure of the web application. It contains HTML markup for sign-in, sign-up forms, and a dashboard view. Styling is done using embedded CSS.

- **`server.js`**: The server-side code written in Node.js using Express framework. It handles HTTP requests for serving the web application (`index.html`) and processing user sign-up (`/join` endpoint).

- **`test.js`**: A test script using Chai and Chai HTTP for automated testing of the `server.js` file. It includes test cases to validate the behavior of the `/join` endpoint under different scenarios.

### Tasks Completed

1. **SQA Applicant Implementation**
   - Implemented the `index.html` file to create a user interface for signing up, signing in, and viewing a dashboard.
   - Developed the server-side logic in `server.js` to handle POST requests to `/join` for user registration.

2. **Introducing Bugs**
   - Introduced intentional bugs into the codebase to simulate issues that would fail the automated tests.
   - Bugs included scenarios such as missing required fields (`username` or `email`) when submitting the sign-up form.

3. **Developer Commit and Test Failure**
   - Attempted a commit after introducing bugs.
   - The automated tests (`test.js`) failed due to the introduced bugs, preventing the developer from committing the code.

4. **Fixing Code and Passing Tests**
   - Fixed the bugs in the codebase to ensure that the `/join` endpoint handles user registration correctly.
   - Re-ran the automated tests (`test.js`), which passed successfully after the code fixes.
   - The developer was then able to commit the fixed code successfully.

### Instructions

1. **Setting Up**
   - Clone this repository to your local machine.
   - Ensure you have Node.js and npm installed.

2. **Running the Application**
   - Navigate to the project directory in your terminal.
   - Install dependencies using `npm install`.
   - Start the server by running `node server.js`.
   - Open a web browser and go to `http://localhost:3000` to access the Icarus Joining Process application.

3. **Running Tests**
   - Ensure the server is running locally (`node server.js`).
   - Run automated tests using `npm test`.
   - Observe the test results to validate the correctness of the `/join` endpoint functionality.

4. **Contributing**
   - If you encounter any issues or would like to contribute improvements, feel free to fork this repository and submit pull requests.

By following these instructions, you can understand, test, and contribute to the Icarus Joining Process application effectively. The use of automated tests ensures that changes to the codebase maintain its expected functionality and quality standards.
