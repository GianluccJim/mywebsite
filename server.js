const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware

const app = express();
const port = 3000; // You can change this port if needed

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Enable CORS for all routes
app.use(cors());

// Endpoint to handle location data sent by the client
app.post('/save_location', (req, res) => {
    const { latitude, longitude } = req.body;
    console.log('Received location data:', { latitude, longitude });
    // Here you can process the received data as needed, e.g., save it to a database
    res.sendStatus(200); // Respond with HTTP status code 200 (OK)
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});