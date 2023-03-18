const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, './public', 'index.html'));
})

app.listen(3000, (err) => {
    if(err) {
        console.log("There was a problem", err);
        return;
    }
    console.log("Lisetning on port 3000");
})