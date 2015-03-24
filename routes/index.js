var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'MusicEdu',
    submit: 'ChaXun',
    register: 'ZhuCe',
    signIn: 'Denglu',
    home: 'Zhuye'
  });
});

module.exports = router;
