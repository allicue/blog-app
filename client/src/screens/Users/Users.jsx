import React, { useState, useEffect } from 'react';
import Layout from '../../Components/shared/Layout/Layout';
// import { getUsers } from '../../services/users';

export default function Users() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const users = await getUsers()
    setUsers({ users })
  })

  return (
    <Layout>
      <div>

      </div>
    </Layout>
  )
}