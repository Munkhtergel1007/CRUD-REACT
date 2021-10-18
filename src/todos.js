import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import Card from './Components/Card';
import Button from "./Components/Button";

const Todos = () => {
    const [todos, setTodos] = useState([]);
    const { search } = useLocation();
    const { id }= queryString.parse(search);
    const getUserTodos = async () => {
        console.log(id);
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/?userId=' + id)
        const result = await res.json();
        console.log(result)
        setTodos(result)
    }
    useEffect(() => {
        getUserTodos();
    }, [])

    return <div>

        {
            // todos.map(post => (
            //     <div className="w-full p-4">
            //         <h1 className="text-2xl font-bold" >{post.title}</h1>
            //     </div>
            // ))
            <Card>
            <Button />
          </Card>
        }
        
    </div>


}

export default Todos