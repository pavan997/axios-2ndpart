import axios from "axios";
import { useEffect, useState } from "react";
import Todolist from "./Todolist";

export default function Todo()
{
    const [text, setText] = useState("");
    const [todolist, setTodolist] = useState([]);
    const [loading, setLoading] = useState(true);

    console.log(todolist);

    useEffect(() => {
        getTodos()
    }, []);

    function getTodos()
    {
        fetch('http://localhost:3004/todo')
            .then((data) => data.json())
            .then((data) => {
                setTodolist(data);
                setLoading(false);
        })
    }

    

    function deleteTodo(id)
    {
        axios.delete(`http://localhost:3004/todo/${id}`)
        .then(() => {
                    getTodos();
                    setText("");
                }).catch((err) => {
                    console.log("err", err)
                        });
                }

    return loading ? (
        "Loading... "
    ) : (
        <>
            <input type="text" value={text} placeholder="Add todo" onChange={(e) => {
                setText(e.target.value);
            }} />
            <button onClick={() => {
                const data = { name: text, status: false }; 
               
                axios.post("http://localhost:3004/todo", data)
                    .then(() => {
                    getTodos();
                    setText("");
                }).catch((err) => {
                    console.log("err", err)
                        });
                }}

                >Add todo</button>
               
                <Todolist deleteTodo={deleteTodo}  list={todolist} />
                  
        </>
    )
}