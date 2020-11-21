var express = require('express');
var router = express.Router();

const multer = require('multer');
// const upload = multer({
//   dest: 'uploads/'
// });
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads/');
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  }
});
const upload = multer({ storage: storage })

router.post('/upload', upload.single('imagefile'), (req, res) => {
  res.send("upload success");
  console.log(req.file);
})
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/upload', function(req, res) {
  res.render('upload');
});

module.exports = router;
