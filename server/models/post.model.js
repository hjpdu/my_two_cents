var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  cover: {
    type: String,
    required: false
  },
  body: {
    type: String,
    required: true
  },
  author:{
    type: String, //this type will change to user oject
    required: true
  },
  postDate:{
    type: Date,
    required: true
  },
  summary:{
    type: String,
    required: true
  }
});

postSchema.pre('findOneAndUpdate', function(){
  this.update({}, { $set: {postDate: new Date()}}); //uses direct update since there's no query
});

postSchema.post('findOneAndUpdate', function(post){
  post.summary = post.body.slice(0,100) + '...';
  post.save();
});

var Post = mongoose.model('Post', postSchema);
module.exports = Post;
