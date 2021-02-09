const express = require('express');

const app = express();

//To test the initial server:
app.get('/', (req, res) => res.send('API Running'));

// Look for an environtment (once deployed) or locally at port 5000
const PORT = process.env.PORT ||  5000; //

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));