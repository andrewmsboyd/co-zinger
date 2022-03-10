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

app.get('/note', (req, res) => {
  res.send('zendesk target triggered!')
});
