'use strict'

const mongoose = require('mongoose');
const User = require('./User')


const postSchema = mongoose.Schema({
    author: {
        type: 'ObjectId',
        ref: 'User',
        required: true,
        index: true
      },
    message: { type: String, require: true, min: 1, max: 140 },
    image: { type: String },
    kudos: [
        {
          type: 'ObjectId',
          ref: 'User',
        }
      ]

}, { timestamps: true });


postSchema.statics.getPosts = function() {
  const query = Post.find({})
  query.author = User.findById(User._id)
  query.kudos = User.findById(User._id)
  query.populate('author','username')
  query.populate('kudos', 'username')

  return query.exec()
}


const Post = mongoose.model('Post', postSchema);

module.exports = Post;

