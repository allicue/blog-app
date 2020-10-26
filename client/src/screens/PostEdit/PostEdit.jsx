import React from "React"
import {useParams, Redirect} from 'react-router-dom'
import './PostEdit.css'
import { useEffect, useState } from 'react'
import {getPost, updatePost} from '../../services/posts'


const PostEdit = (props) => {


  const [post, setPost] = useState({
    title: '',
    imgURL: '',
    content: '',
    author: ''
  }) 
  
  const [isUpdated, setUpdated] = useState(false)
  let {id} = useParams()

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id)
      setPost(post)
    }
    fetchPost()
  }, [id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setPost({
      ...post,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let { id } = props.match.params
    const updated = await updatePost(id, post)
    setUpdated(updated)
  }

  if (isUpdated) {
    return <Redirect to={`/posts/${props.match.params.id}`}/>
  }

  return (
    <Layout>
      <div>
        <div>
          <img />
          <form onSubmit={handleSubmit}>
            <input
              className="edit-image-link"
              placeholder="Copy Image Link Here"
              value={post.imgURL}
              name='imgURL'
              required
              onChange={handleChange}
            />
          </form>
        </div>
        <form className="edit-form" onSubmit={handleSubmit}>
            <input
              className="input-name"
              placeholder="Title"
              value={post.title}
              name='title'
              required
              onChange={handleChange}
            />
            <input
              className="input-author"
              placeholder="Author"
              value={post.author}
              name='author'
              required
              onChange={handleChange}
            />
            <textarea
              className="textarea-content"
              rows={10}
              cols={78}
              placeholder="Text Content Here"
              value={post.content}
              name='content'
              required
              onChange={handleChange}
          />
          <button type="submit" className="save-button">Save</button>
          </form>
        </div>
    </Layout>
  )
}

export default PostEdit