const Joi = require('joi');
const Post = require('../models/post.model');

const postSchema = Joi.object({
    title: Joi.string().required(),
    detail: Joi.string().required(),
    imageTitle: Joi.string().required(),
    uid: Joi.string().required()
})

module.exports = {
    insert,
    get,
    getAll,
    search,
    delhistory,
}


async function delhistory(_id){
    return await Post.deleteOne({_id:_id})
 }

async function insert(post) {

    post = await Joi.validate(post, postSchema, { abortEarly: false });
    return await new Post(post).save();
}

async function get(sid) {
    console.log("ssssssssss",sid);
    return await Post.find({title: title});
}
  
async function getAll() {
    return await Post.find();
}
  
async function search(key, value) {
    let query = {};
    query[key] = value;
    return await Post.find(query);
}