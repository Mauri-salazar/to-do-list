import React, { Fragment, useContext } from "react";
import { CreateTodo } from "../components/CreateTodo";
import { TodoSearch } from "../components/TodoSearch";
import { TodoCounter } from "../components/TodoCounter";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { TodoLoading } from "../components/TodoLoading";
import { TodoError } from "../components/TodoError";
import { EmpyTodo } from "../components/EmpyTodo";
import { TodoContext } from "../components/TodoContext";


export const AppIU = () => {
  const {
    loading,
    error,
    searchedTodo,
    completeTodo,
    deleteTodo,
  } = useContext(TodoContext);


  return (
    <Fragment>
      <CreateTodo />
      <TodoSearch/>
      {loading ? <TodoLoading loading={loading} /> : <TodoCounter />}
      <TodoList>
        {error && <TodoError />}
        {(!loading && searchedTodo.length === 0) && <EmpyTodo />}
        {
          searchedTodo.map(todo =>
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />)
        }
      </TodoList>
    </Fragment>
  );
};

