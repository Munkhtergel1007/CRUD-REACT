import { useEffect, useState } from "react";

const Timeline = ({ history }) => {
  const [allPost, setPosts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/allPost')
      .then(res => res.json())
      .then(result => {
        setPosts(JSON.parse(result))
        console.log(allPost)
      })
  })

  return <div>
    {
      allPost.map(post => {
        return <div>
          <p>{post.post}</p>
        </div>
      })
    }
  </div>

}

export default Timeline
