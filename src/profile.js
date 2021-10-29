import Button from "./Components/Button"
import { useEffect, useState } from "react";
import Card from "./Components/Card";
import Form from "./Components/Form";
import Label from "./Components/Label";
import Input from "./Components/Input";
import swal from 'sweetalert';

const Profile = ({ history }) => {
    const [username, setUsername] = useState('')
    const [post, setPost] = useState('')
    const [userId, setUserId] = useState('')
    const [allow, setAllow] = useState(false)
    const [posts, setPosts] = useState([])
    useEffect(() => {
        if (!localStorage.loggedUser) history.push('/login')
        else {
            const loggedUser = JSON.parse(localStorage.loggedUser)
            setUsername(loggedUser.username)
            setUserId(loggedUser._id)
        }
    })
    const exitHandler = () => {
        localStorage.clear();
        history.push('/')
    }
    const submitHandler = (e) => {
        e.preventDefault()
        if (post.trim() !== '') {
            fetch('http://localhost:3001/post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    post: post,
                    userId: userId
                })
            })
            .then(res => res.json())
            .then(result => {
                swal(
                    result.message
                )
            })
            resetForm();
            setAllow(true)
            setTimeout(() => {
                setAllow(false)
              }, 100)
        }

    }
    const resetForm = () => {
        setPost('')
    }
    useEffect(() => {
        fetch('http://localhost:3001/allPost')
          .then(res => res.json())
          .then(result => {
            setPosts(JSON.parse(result))
          })    
      }, [allow]);
    return <div>
        <div className="flex justify-between p-4">
            <p className="py-2 font-bold px-4">Username : {username}</p>
            <button className="border rounded-md py-2 px-4 bg-red-500 border-red-400 font-bold  text-white hover:bg-white hover:text-black hover:border-white duration-300 cursor-pointer" onClick={exitHandler}>Гарах</button>
        </div>
        <Card>
            <Form>

                <Label lab="post" htmlFor="post" />
                <Input
                    onChange={e => setPost(e.target.value)}
                    placeholder="post"
                    id="post"
                    value={post}
                />
                <Button val='Post oruulah' type='normal' bg="green" click={submitHandler}></Button>
            </Form>
        </Card>
        {
           posts.map(post => {
               if(post.ownerId === JSON.parse(localStorage.loggedUser)._id) {
                return <div className="w-full px-4 py-2 flex justify-between items-center">
                   <p>{post.post}</p>
                   <p>{JSON.parse(localStorage.loggedUser).username}</p>
               </div>      
               }
           })
        }
    </div>
}

export default Profile