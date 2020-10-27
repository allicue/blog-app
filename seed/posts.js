const db = require('../db/connection')
const Post = require('../models/post')
const User = require('../models/user')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

  const user1 = new User({ username: "allicue", email: "allicue@gmail.com", posts: [] })
  await user1.save()

  const user2 = new User({ username: "nathan11", email: "nathan@gmail.com", posts: [] })
  await user2.save()

  const posts = [
    {
      "title": "Blog Post 1",
      "imgURL": "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80",
      "content": "Here is some upworthy blog content :)",
      "userId": user1
    },
    {
      "title": "Blog Post 2",
      "imgURL": "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80",
      "content": "An improvement on the first blog",
      "userId": user2
    }
  ]
  await Post.insertMany(posts)
  console.log("created posts")

  user1.posts = await Post.find({ userId: user1 })
  await user1.save()

  user2.posts = await Post.find({ userId: user2 })
  await user2.save()
}

const run = async () => {
  await main()
  db.close()
}

run()