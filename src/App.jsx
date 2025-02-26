import { useEffect, useState } from 'react'


function App() {
  const [posts, setPosts] = useState([])

  function fetchPosts() {
    fetch("http://localhost:3000/api/posts")
      .then((res) => res.json())
      .then(setPosts)
  }

  useEffect(fetchPosts, [])

  return (
    <>
      <div>
        <h1>
          Elenco dei post:
        </h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}
            <br />
            <br />
            {post.content}</li>
          ))

          }
        </ul>

      </div>
    </>
  )
}

export default App
