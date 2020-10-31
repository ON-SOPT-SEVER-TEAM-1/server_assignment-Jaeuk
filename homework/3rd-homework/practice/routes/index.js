var express = require('express');
var router = express.Router();

router.use('/users', require('./users'))
router.use('/ranking', require('./ranking'))
router.use('/society', require('./society'))
router.use('/members', require('./members'))

router.use('/', (req, res)=>{
  res.status(200).send('서버파트 짱짱맨');
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
