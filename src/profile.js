import Button from "./Components/Button"
import { useEffect, useState } from "react";
import Card from "./Components/Card";
import Form from "./Components/Form";
import Label from "./Components/Label";
import Input from "./Components/Input";
import swal from 'sweetalert';
import { MdEdit, MdUpdate, MdUpdateDisabled } from 'react-icons/md';
import { RiDeleteBin5Line } from 'react-icons/ri';
import ListItem from "./Components/ListItem";
import Map from "./Components/map";

const Profile = ({ history }) => {
    const [username, setUsername] = useState('')
    const [post, setPost] = useState('')
    const [userId, setUserId] = useState('')
    const [allow, setAllow] = useState(false)
    const [posts, setPosts] = useState([])
    const [editMode, setEditMode] = useState(false)
    const [editId, setEditId] = useState('')
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
    const deleteHandler = (id) => {
        fetch('http://localhost:3001/deletePost', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: id })
        })
            .then(res => res.json())
            .then(result => {
                swal(result.message)
            })
        setAllow(true)
        setTimeout(() => {
            setAllow(false)
        }, 100)
    }
    const editHandler = (id) => {
        const updatePost = posts.find(post => post._id === id);
        setPost(updatePost.text);
        setEditMode(true)
        setEditId(id)
    }
    const updateHandler = (id) => {
        const updatedPost = {
            text: post,
            _id: id
        }
        fetch('http://localhost:3001/updatePost', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedPost)
        })
            .then(res => res.json())
            .then(result => swal(result.message))
        resetForm()
        setAllow(true)
        setTimeout(() => {
            setAllow(false)
        }, 100)
        setEditMode(false)
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
                <Button val='Post oruulah' type='normal' bg="green" click={editMode ? (e) => {
                    e.preventDefault();
                    updateHandler(editId)
                } : submitHandler}></Button>
            </Form>
        </Card>
        {
            posts.map(post => {
                if (post.ownerId === JSON.parse(localStorage.loggedUser)._id) {
                    return <div className="w-full px-4 py-2 flex justify-between items-center">
                        <p>{post.text}</p>
                        <div className="flex">
                            <Button val={<MdEdit />} bg='gray' click={() => editHandler(post._id)} />
                            <Button val={<RiDeleteBin5Line />} bg='red' click={() => deleteHandler(post._id)} />
                        </div>

                    </div>
                }
            })
        }
        {/* <Map items={posts} deleteHandler={deleteHandler} /> */}
    </div >
}

export default Profile