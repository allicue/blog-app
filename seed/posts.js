const db = require('../db/connection')
const Post = require('../models/post')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const posts = [
    {
      "title": "Blog Post 1",
      "imgURL": "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80",
      "content": "Here is some upworthy blog content :)",
      "author": "Eddie!"
    },
    {
      "title": "Blog Post 2",
      "imgURL": "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80",
      "content": "An improvement on the first blog",
      "author": "Allison"
    }
  ]
  await Post.insertMany(posts)
  console.log("created posts")
}

const run = async () => {
  await main()
  db.close()
}

run()