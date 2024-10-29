import React from "react";
import { IListProps } from "./List.Props";
import "./List.css";
const List = ({ key, data, onTaskCompleted, onDelete }: IListProps) => {
    return (
        <div className="list" key={key}>
            <div className="left">
                <input type="checkbox" checked={data?.completed} onChange={onTaskCompleted} />
                <p style={{ textDecoration: data?.completed ? "line-through" : "none" }}>{data?.text}</p>
            </div>
            <div className="right">
                <i className="fas fa-times" onClick={onDelete}></i>
            </div>
        </div>
    );
};

export default List;
