import mongoose from "mongoose";



const { Schema } = mongoose;

const PostSchema = new Schema({
    title: String,
    body: String,
    tags: [String],
    publishedDate: {
        type: Date,
        default: Date.now, //현재 날짜를 기본값으로 지정
    },
    user: {
        _id: mongoose.Types.ObjectId,
        username: String,
    },
    postCount: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        required: true
    },
})

// pre('save') 미들웨어를 사용하여 일련번호 생성
PostSchema.pre('save', function (next) {
    const post = this;
    if (post.isNew) {
        Post.countDocuments({}, function (err, count) {
            if (err) {
                return next(err);
            } else {
                post.postCount = count + 1;
                next();
            }
        });
    } else {
        next();
    }
});

// post('findOneAndDelete) 미들웨어를 사용하여 일련번호 감소
PostSchema.post('findOneAndDelete', function (doc) {
    if (doc) {
        Post.findOne({}, {}, { sort: { 'postCount': -1 } }, function (err, post) {
            if (err) {
                console.error(err);
            } else if (post) {
                const latestPostCount = post.postCount;
                const deletedPostCount = doc.postCount;
                if (latestPostCount > deletedPostCount) {
                    Post.updateMany({ postCount: { $gte: deletedPostCount + 1, $lte: latestPostCount } }, { $inc: { postCount: -1 } }, function (err) {
                        if (err) {
                            console.error(err);
                        } else {
                            console.log(`Successfully updated postCount. Latest postCount is now ${latestPostCount - 1}.`);
                        }
                    })
                }
            }
        });
    }
});

const Post = mongoose.model('Post', PostSchema);
export default Post;

