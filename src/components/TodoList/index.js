import { Fragment } from "react";
import './/TodoList.css';

export const TodoList = (props) => {
  return (
    <Fragment>
      <div className="list">
        <ul>
          {props.children}
        </ul>
      </div>
    </Fragment>
  );
};



