const express = require('express');
const userRoutes = require('./user.route');
const authRoutes = require('./auth.route');
const postnovelRoutes = require('./post.route');
const postepRoutes = require('./ep.route');

const multer = require('multer');
const bodyParser = require('body-parser');
const cors = require('cors');
var path = require('path');

const router = express.Router(); // eslint-disable-line new-cap

router.use(cors({ origin: "*" }));
router.use(bodyParser.json());

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

router.use('/auth', authRoutes);
router.use('/user', userRoutes);
router.use('/postnovel', postnovelRoutes);
router.use('/postep', postepRoutes);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null,'./src/assets/images');
    // cb(null,path.join(__dirname+'/uploads'));
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
})

const upload = multer({ storage });

router.post('/file', upload.single('file'), (req, res, next) => {
  // console.log("ddddddddddd")
  const file = req.file;
  console.log(file.filename);
  if (!file) {
    const error = new Error('No File')
    error.httpStatusCode = 400
    return next(error)
  }
  res.send(file);
})

router.use('/image/:name', function (req, res) {
  res.sendFile(path.resolve(__dirname, `./uploads/${req.params.name}`));
})

module.exports = router;
