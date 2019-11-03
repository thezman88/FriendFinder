
// DEPENDENCIES


const express = require('express');

var path = require("path");


// EXPRESS CONFIGURATION

// Tells node that we are creating an "express" server
const app = express();

const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./app/public/home.html"));
  });
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "./app/public/survey.html"));
  });
// ============================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond
// when users visit or request data from various URLs.
// Notice how the entire 'require' is actually a function?
// Whose argument is app?
// ============================================================================

// require('./server/routes/apiRoutes')(app);
// require('./server/routes/htmlRoutes')(app);

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, () => {
  console.log(`App started & listening at: http://localhost:${PORT}`);
});
