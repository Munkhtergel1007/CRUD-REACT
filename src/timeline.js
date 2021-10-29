import { useEffect, useState } from "react";
import swal from 'sweetalert';

const Timeline = ({ history }) => {
  const [allPost, setPosts] = useState('');
  useEffect(() => {
    fetch('http://localhost:3001/allPost')
    .then(res => res.json())
    .then(result => {
      setPosts(JSON.parse(result))
    })  
  }, [])

  return <div>
    {
      allPost.map(post => {
        <p>{post.post}</p>
      })
    }
  </div>
  
}

export default Timeline