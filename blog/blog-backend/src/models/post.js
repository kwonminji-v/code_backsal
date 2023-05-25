import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment'


const { Schema } = mongoose;

const connection = mongoose.createConnection('mongodb://127.0.0.1:27017/blog');
autoIncrement.initialize(connection);

const PostSchema = new Schema({
    title: String,
    body: String,
    tags: [String],
    publishedDate : {
        type : Date,
        default: Date.now, //현재 날짜를 기본값으로 지정
    },
    user: {
        _id: mongoose.Types.ObjectId,
        username: String,
    },
    postCount: { 
        type : Number,
        default: 0},
    category: {
        type: String,
        required: true
    },       
})


PostSchema.plugin(autoIncrement.plugin, {
    model: "Post",
    field: "postCount",
    startAt: 1, // postCount 시작 값
    incrementBy: 1, // postCount 증가 값
});
// const Counter = mongoose.model("Counter", PostSchema);
// module.exports = { Counter };
const Post = mongoose.model('Post', PostSchema);
export default Post;

