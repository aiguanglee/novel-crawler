const { mongoose } = require('../utils/MongoDBUtil.js');

let collection = 'book_chapter_content';

let ContentSchema = new mongoose.Schema({
    chapter_obj_id: { type: String }, //对应mongo中的书本章节的ObjectId
    chapter_name:{type:String},            //章节名称 
    content: { type: String },               //对应章节内容获
    update_time: { type: Number }        //更新时间时间戳     
}, { collection: collection, versionKey: false });


module.exports = mongoose.model(collection, ContentSchema);
