import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

const Albums = () => {
    const [albums, setAlbums] = useState([]);
    const { search } = useLocation();
    const { id }= queryString.parse(search);
    const getUserAlbum = async () => {
        console.log(id);
        const res = await fetch('https://jsonplaceholder.typicode.com/albums/?userId=' + id)
        const result = await res.json();
        console.log(result)
        setAlbums(result)
    }
    useEffect(() => {
        getUserAlbum();
    }, [])

    return <div>

        {
            albums.map(post => (
                <div className="w-full p-4">
                    <h1 className="text-2xl font-bold" >{post.title}</h1>
                </div>
            ))
        }
    </div>


}

export default Albums