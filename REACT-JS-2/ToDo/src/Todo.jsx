import React from "react";

function Todo({ todo, updateStatus, editTodo, deleteTodo }) {
  return (
      <div
        className="card"
        key={todo.id}
        style={{ border: "1px solid black"}}>
            <div className="m-3">
        <p>
          <b id="name">Name : </b>
         <b> {todo.taskName}</b>
        </p>
        <p>
          <b id="description">Description : </b>
          <b>{todo.description}</b>
        </p>
        <div className="mb-2">
          <label htmlFor="status" className="me-1">
            <b id="status">Status:</b>
          </label>
          <select
            className={
              todo.status === "Completed"? "bg-success": "bg-danger"}
            value={todo.status}
            name="status"
            onChange={(e) => updateStatus(todo.id, e.target.value)}>
            <option
              value="Completed"
              className={
                todo.status === "Completed" ? "bg-success" : ""}>
              Completed
            </option>
            <option
              value="Not Completed"
              className={
                todo.status !== "Completed" ? "bg-danger text-white" : ""}>
              Not Completed
            </option>
          </select>
          </div>
        </div><br/><br/>
        <div className="text-center m-3 p-2">
          <button
            className="btn btn-info"
            onClick={() => editTodo(todo.id)}
            type="button"
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => deleteTodo(todo.id)}
            type="button">
            Delete
          </button>
        </div>
      </div>
  );
}

export default Todo;