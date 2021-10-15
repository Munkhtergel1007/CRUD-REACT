import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { Link } from "react-router-dom";
import NavItem from "./Components/NavItem";
import ListItem from "./Components/ListItem";

const Posts = () => {
    const [posts, setPost] = useState([]);
    const { search } = useLocation();
    const { id } = queryString.parse(search);
    const getUserPost = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/?userId=' + id)
        const result = await res.json();
        console.log(result)
        setPost(result)
    }
    useEffect(() => {
        getUserPost();
    }, [])

    return <div>

        {
            posts.map(post => (
                <div>
                    <h1 className="text-2xl">{post.title}</h1>
                    <div>
                        <p className="text-xl">{posts.body}</p>
                    </div>
                </div>
            ))
        }
    </div>


}

export default Posts