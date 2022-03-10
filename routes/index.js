var express = require("express");
const res = require("express/lib/response");
var router = express.Router();
var app = express();
var port = 3000;

module.exports = router;

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

app.listen(port, () => {
  console.log(`Test app listening on port ${port} at /test context`);
});

app.post('/test', (req, res) => {
  res.send('POST method received')
});

// setup the listener for ticket note activity
router.get('/note', (req, res) => {
  console.log('got a message from zendesk');
  res.send('zendesk target triggered!')
});
