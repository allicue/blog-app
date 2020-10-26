import Layout from '../../Components/shared/Layout/Layout';
import React from 'react';
import PostCards from '../../Components/PostCards/PostCards'

function Home() {
  return (
    <Layout>
  <div className="home">
        <h1>Home Page</h1>
        <PostCards/>
      </div>
    </Layout>
  )
}

export default Home
