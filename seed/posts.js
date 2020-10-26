const db = require('../db/connection')
const Post = require('../models/post')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const posts = [
    {
      "title": "Blog Post 1",
      "imgURL": "https://unsplash.com/photos/npxXWgQ33ZQ",
      "content": "Here is some upworthy blog content :)",
      "author": "Eddie!"
    },
    {
      "title": "Blog Post 2",
      "imgURL": "https://unsplash.com/photos/npxXWgQ33ZQ",
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