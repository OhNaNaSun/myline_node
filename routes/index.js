var router = require('express').Router();
router.get('/', function(req, res) {
	res.render("index", {"title": "line首页"})
});
module.exports = router;