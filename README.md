# Simpler Card List

## Prerequisites

Before running this application, make sure your computer meets the following requirements:

- **Node.js** (v14 or higher) and **npm** are installed. If not, download and install Node.js from [nodejs.org](https://nodejs.org/).

## Installation and Setup

Follow these steps to set up the application on a computer with no dependencies installed.

### Step 1: Clone the Repository

Clone this repository to your local machine `https://github.com/kenny-lfx/swe-interview-test.git` 


```bash
git clone https://github.com/kenny-lfx/swe-interview-test.git Startercode
cd Startercode
```

### Step 2: Install Dependencies for Both Frontend and Backend

Both the frontend and backend have their own `package.json` files. This means you need to install dependencies in each directory. (using a terminal for each of the end is recommended)

1. **Backend Dependencies**:

    ```bash
    cd backend
    npm install
    ```

2. **Frontend Dependencies**:

    Open a new terminal window, navigate to the `frontend` directory, and install dependencies :

    ```bash
    cd frontend
    npm install
    ```

### Step 3: Running the Backend Server

The backend is a Node.js application running on Express.js.

1. In the terminal, navigate to the `backend` directory (if not already there):

   ```bash
   cd backend
   ```

2. Start the server:

   ```bash
   node index.js
   ```

   By default, this server runs on **http://localhost:5001**. You should see a message indicating that the server is running:

   ```
   Server is running on port 5001
   ```

> **Note**: If port 5001 is occupied, you can change the port in the `backend/server.js` file by modifying the `PORT` variable. Also under `frontend/package.json`, change the proxy from 5001 to port you set before.

### Step 4: Running the Frontend Application

The frontend is a React application that communicates with the backend.

1. Open a new terminal window and navigate to the `frontend` directory:

   ```bash
   cd frontend
   ```

2. In the `frontend/package.json`, make sure there is a `proxy` field that directs requests to the backend server. If you changed it in back end, please change it here too. It should look like this:

   ```json
   "proxy": "http://localhost:5001"
   ```

   This proxy setting ensures that requests from the frontend are correctly forwarded to the backend server on port 5001.

3. Start the frontend development server:

   ```bash
   npm start
   ```

   This will open the React application in your default web browser at **http://localhost:3000**.

### Step 5: Verify the Application

- **Frontend**: Visit **http://localhost:3000** in your browser to view the Product List application.
- **Backend**: The backend is available at **http://localhost:5001**. You can check the endpoints directly by navigating to:
  - **http://localhost:5001/api/products** - Returns the list of products.
  - **http://localhost:5001/api/products/:id** - Deletes a product with the specified ID.

### Additional Notes

- Restart the Backend Server if you need to repopulate products. If all products are deleted, restarting the server will reset the product list.
- The frontend proxy in `package.json` helps avoid CORS issues by forwarding API calls to the backend. Ensure the `proxy` is correctly set to the backend’s URL and port.

## Scripts Summary

For convenience, here’s a summary of the scripts to run the frontend and backend:

```bash
# Backend
cd backend
npm install
node index.js

# Frontend
cd frontend
npm install
npm start
```
