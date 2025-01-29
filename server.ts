// Import the 'express' module
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';


const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());



// Start the server and listen on the specified port
app.listen(port, () => {
  // Log a message when the server is successfully running
  console.log(`Server is running on http://localhost:${port}`);
});

