import { Fragment, useContext } from "react";
import './/TodoCounter.css';
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
            totalTodo === completedTodo ?
            `🎉YOU COMPLETED ALL THE TO-DOS!!🥳`
            : `😜YOU COMPLETED ${completedTodo} OF ${totalTodo} TO-DOS`
          }
        </h1>
    </Fragment>
  );
};
