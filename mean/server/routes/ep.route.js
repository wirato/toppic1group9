const express = require('express');
const asyncHandler = require('express-async-handler');
const epCtrl = require('../controllers/ep.controller');

const router = express.Router();
module.exports = router;

router.route('/create').post(asyncHandler(insert));
router.route('/get/:id(\d+)').get(asyncHandler(get));
router.route('/all').get(asyncHandler(getAll));
router.route('/search').get(asyncHandler(search));


async function insert(req, res) {
  let post = await epCtrl.insert(req.body);
  res.json(post);
}

async function get(req, res) {
  console.log(req.params.id);
  let all_posts = await epCtrl.get(req.params['titleep']);
  res.json(all_posts);
}

async function getAll(req, res) {
  let all_posts = await epCtrl.getAll();
  res.json(all_posts);
}

async function search(req, res) {
  let result = await epCtrl.search(req.params['key'], req.params['value']);
  res.json(result);
}


router.route('/:_id').get(asyncHandler(delep));
async function delep(req,res){
  let all_students = await epCtrl.delep(req.params['_id']);
  res.json(all_students);
}

router.route('/:_id').post(asyncHandler(update));
async function update(req,res){
  let all_students = await epCtrl.update(req.params['_id']);
  res.json(all_students);
}