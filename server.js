//Install express server
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 8080;

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/interview-angular'));

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname,'/dist/interview-angular/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(PORT);
