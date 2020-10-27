import React, { Component } from 'react';
import './PostCards.css';
import PostCard from '../PostCard/PostCard'
import { getPosts } from '../../services/posts'

class PostCards extends Component {
  constructor() {
    super()
    this.state = {
      posts: []
    }
  }

  async componentDidMount() {
    const posts = await getPosts()
    this.setState({ posts })
  }

  render() {

    const CARDS = this.state.posts.map((post, index) =>
      <PostCard _id={post._id} title={post.title} imgURL={post.imgURL} key={index} />
    )

    return (
      <div className="post-cards">
        <div className="cards">
          {CARDS}
        </div>
      </div>
    )
  }
}

export default PostCards