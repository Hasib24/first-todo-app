import React from "react";
import "./Todo.css";
import { BsTrash } from "react-icons/bs";

export default function Todo(props) {
  const {id, title, desc } = props.todo;
  return (
    <div>
      <div className="todo">
        <h3>
        {title}
        </h3>
        <p>{desc}</p>
        <button type="submit">
          <BsTrash />
        </button>
      </div>
    </div>
  );
}
