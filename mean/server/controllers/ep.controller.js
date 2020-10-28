const Joi = require('joi');
const Ep = require('../models/ep.model');

const epSchema = Joi.object({
    ep: Joi.number().required(),
    titleep: Joi.string().required(),
    detail: Joi.string().required(),
    titleid: Joi.string().required(),
})

module.exports = {
    insert,
    get,
    getAll,
    search,
    delep,
    update,
}

async function delep(_id){
    return await Ep.deleteOne({_id:_id})
 }

 async function update(_id){
    return await Ep.updateeOne({_id:_id})
 }

async function insert(post) {
    post = await Joi.validate(post, epSchema, { abortEarly: false });
    return await new Ep(post).save();
}

async function update(ep) {
    ep = await Joi.validate(ep, epSchema, { abortEarly: false });
    epn =  await Ep.find({ep: ep.ep})
    titleep =  await Ep.find({titleep: ep.titleep})
    detail =  await Ep.find({detail: ep.detail})
    titleid =  await Ep.find({titleid: ep.titleid})

    await Ep.update({_id: ep._id}, epn, titleep, detail, titleid );
}


async function get(sid) {
    return await Ep.find({titleep: titleep});
}
  
async function getAll() {
    return await Ep.find();
}
  
async function search(key, value) {
    let query = {};
    query[key] = value;
    return await Ep.find(query);
}