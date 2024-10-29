import React, { useState } from "react";
import List from "../ListComponent/List";
import "./TodoList.css";

const TodoList = () => {
    const [task, setTask] = useState<string>("");
    const [toDos, setToDos] = useState<{ text: string; completed: boolean }[]>([]);

    const addTask = () => {
        if (task.trim()) {
            setToDos([...toDos, { text: task, completed: false }]);
            setTask("");
        }
    };

    const toggleComplete = (index: number) => {
        setToDos(toDos.map((todo, i) => (i === index ? { ...todo, completed: !todo.completed } : todo)));
    };

    const deleteTask = (index: number) => {
        setToDos(toDos.filter((_, i) => i !== index));
    };

    return (
        <div className="app">
            <div className="mainHeading">
                <h1>ToDo List</h1>
            </div>
            <div className="subHeading">
                <br />
                <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
            </div>
            <div className="input">
                <input type="text" placeholder="🖊️ Add item..." value={task} onChange={(e) => setTask(e.target.value)} />
                <i className="fas fa-plus" onClick={addTask}></i>
            </div>
            <div className="todos">
                {toDos.map((todo, index) => (
                    <List
                        key={index}
                        data={todo}
                        onDelete={() => deleteTask(index)}
                        onTaskCompleted={() => toggleComplete(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default TodoList;
