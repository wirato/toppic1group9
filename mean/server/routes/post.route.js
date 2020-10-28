const express = require('express');
const asyncHandler = require('express-async-handler');
const postCtrl = require('../controllers/post.controller');

const router = express.Router();
module.exports = router;
// const checkAuth = require("../middleware/check-auth");
router.route('/create').post(asyncHandler(insert));
router.route('/get/:id(\d+)').get(asyncHandler(get));
router.route('/all').get(asyncHandler(getAll));
router.route('/search').get(asyncHandler(search));


async function insert(req, res) {
  let post = await postCtrl.insert(req.body);
  res.json(post);
}

async function get(req, res) {
  console.log(req.params.id);
  let all_posts = await postCtrl.get(req.params['title']);
  res.json(all_posts);
}

async function getAll(req, res) {
  let all_posts = await postCtrl.getAll();
  res.json(all_posts);
}

async function search(req, res) {
  let result = await postCtrl.search(req.params['key'], req.params['value']);
  res.json(result);
}


router.route('/:_id').get(asyncHandler(delhistory));
async function delhistory(req,res){
  let all_students = await postCtrl.delhistory(req.params['_id']);
  res.json(all_students);
}
