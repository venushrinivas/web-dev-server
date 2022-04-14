import mongoose from 'mongoose';
const schema = mongoose.Schema({
    tuit: String,
    avatar: String,
    verified: Boolean,
    time: String,
    handle_name: String,
    user_name: String,
    stats: {
        comment_count: Number,
        retweet_count: Number,
        like_count: Number,
        unlike_count: Number,
        liked: Boolean
    }
}, {collection: 'tuits'});
export default schema;