import React, { useState } from 'react';
import './CreatePost.css'
import Layout from '../../Components/shared/Layout/Layout'
import { createPost } from '../../services/posts'



export default function CreatPost(props) {
  const [post, setPost] = useState({
    title: '',
    imgURL: '',
    content: '',
    author: '',
  })
  const [isCreated, setCreated] = useState(false)

  const handleChange = async (e) => {
    const { name, value } = e.target
    setPost({
      ...post,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const created = await createPost(post)
    setCreated({ created })
  }


  return (
    <Layout>
      <form className="create-form" onSubmit={handleSubmit}>
        <input
          className="input-title"
          placeholder="Title"
          value={post.title}
          name="title"
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className="input-image"
          placeholder="Image Link"
          value={post.imgURL}
          name="imgURL"
          required
          onChange={handleChange}
        />
        <input
          className="input-content"
          placeholder="Post Body"
          value={post.content}
          name="content"
          required
          onChange={handleChange}
        />
        <input
          className="input-author"
          placeholder="Author"
          value={post.author}
          name="author"
          required
          onChange={handleChange}
        />
        <button type="submit" >submit</button>
      </form>
    </Layout>
  )
}