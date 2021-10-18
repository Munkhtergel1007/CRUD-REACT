import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { Link } from "react-router-dom";

const User = () => {
    const { search } = useLocation();
    const { id } = queryString.parse(search);
    const [username, setUsername] = useState('');
    const [userId, setuserId] = useState('')
    console.log(id);

    const getUserData = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/` + id);
        const data = await res.json();
        setUsername(data.username)
        setuserId(id)
    };
    useEffect(() => {
        getUserData();
    }, [])
    return (
        <div className="w-full h-screen bg-red-400 text-white flex flex-col justify-center items-center">
            <h1 className="text-5xl">{username}</h1>
         <Link to={`/posts/?id=${userId}`}>
            <p>posts</p>
        </Link>
        
        <Link to={`/albums/?id=${userId}`}>
            <p>albums</p>
        </Link>

        <Link to={`/todos/?id=${userId}`}>
            <p>todos</p>
        </Link>
        </div>
    );
};

export default User;
