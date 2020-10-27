import Layout from '../../Components/shared/Layout/Layout';
import React from 'react';
import PostCards from '../../Components/PostCards/PostCards'

function Home() {
  return (
    <Layout>

  <div className="home">
        <PostCards/>
     </div>
      
    </Layout>
  )
}

export default Home
