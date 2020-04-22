let express = require("express");
let app = express();
const port = 5000 || process.env.port;

app.use(express.static("./static"));

app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});
