import { Fragment, useContext } from "react";
import './TodoCounter.css';
import { TodoContext } from "../TodoContext";

export const TodoCounter = () => {
  const {
    totalTodo,
    completedTodo
  } = useContext(TodoContext);

  return (
    <Fragment>
        <h1 className="title" >
          {
            totalTodo === completedTodo ? 'You completed all the taks'
            : `You completed ${completedTodo} of ${totalTodo} taks`
          }
        </h1>
    </Fragment>
  );
};
