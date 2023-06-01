import { Fragment, useContext  } from "react";
import './/TodoSearch.css';
import { TodoContext } from "../TodoContext";

export const TodoSearch = () => {
  const {
    searchValue,
    setSearchValue
  } = useContext(TodoContext);

  const filterSearchValue = (e) => {
    setSearchValue(e.target.value);
  }

  return (
    <Fragment>
      <div className="inp">
        <input
            placeholder="Search your to-dos"
            autoComplete="of"
            value={searchValue}
            onChange={filterSearchValue}
          />
      </div>
    </Fragment>
  );
};
