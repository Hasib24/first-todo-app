import React, { useState } from "react";
import "./form.module.css";
export default function NewTodoForm(props) {
  const [todo, setTodo] = useState({ title: "", desc: "" });
  const { title, desc } = todo;

  const changeHandler = (e) => {
    // selected field name
    const name = e.target.name;
    setTodo((oldtodo) => {
      return { ...oldtodo, [name]: e.target.value };
    });
  };

  const handleonSubmit = (e) => {
    e.preventDefault();

    props.onCarrerfn(todo);
    setTodo({ title: "", desc: "" });
  };

  return (
    <form onSubmit={handleonSubmit}>
      <div>
        <label htmlFor="title">Title : </label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={changeHandler}
        />
      </div>
      <div>
        <label htmlFor="desc">Desc : </label>
        <textarea
          name="desc"
          id="desc"
          cols="18"
          rows="2"
          value={desc}
          onChange={changeHandler}
        ></textarea>
      </div>

      <button type="submit">Add Todo</button>
    </form>
  );
}
