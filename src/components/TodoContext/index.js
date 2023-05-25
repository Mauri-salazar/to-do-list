import React, { createContext } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { useState } from "react";

const TodoContext = createContext();

function TodoProvider({children}) {
  const {
    item: todo,
    saveItem: saveTodo,
    loading,
    error
  } = useLocalStorage('TODO_V1', []);
  const [searchValue, setSearchValue] = useState('');
  const [openModal, setOpenModal] = useState(false);


  const completedTodo = todo.filter(
    todo => !!todo.completed).length;
  const totalTodo = todo.length;

  const searchedTodo = todo.filter(
    todo => todo.text.toLowerCase().includes(searchValue.toLocaleLowerCase()));

  const completeTodo = (text) => {
    const newTodo = [...todo];
    const todoIndex = newTodo.findIndex(
      todo => todo.text === text
    );
    newTodo[todoIndex].completed = true;
    saveTodo(newTodo);
  };

  const deleteTodo = (text) => {
    const newTodo = [...todo];
    const result = newTodo.filter(todo => todo.text !== text);
    saveTodo(result);
  };

  const saveNewTodo = (text) => {
    text.preventDefault();
    saveTodo(text);
  }

  const addTodo = (text) => {
    const newTodo = [...todo];
    newTodo.push({
      text: text,
      completeTodo: false,
    });
    saveTodo(newTodo);
  }

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        searchValue,
        setSearchValue,
        totalTodo,
        completedTodo,
        searchedTodo,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        saveNewTodo,
        addTodo,
      }}
    >
    {
      children
    }
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };