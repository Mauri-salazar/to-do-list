import { Fragment, useContext, useState  } from "react";
import './CreateTodo.css';
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";

export const CreateTodo = () => {
  const {
    addTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = useState('');

  const onChange = (e) => {
    setNewTodoValue(e.target.value);
  };

  const closeModal = (e) => {
    e.preventDefault();
    setOpenModal(state => !state);
  };

  const onSubmitTodo = (e) => {
    e.preventDefault();
    addTodo(newTodoValue);
    setNewTodoValue('')
    setOpenModal(false);
  };

  return (
    <Fragment>
      <button
        className="btn"
        onClick={closeModal}
      >
        +
      </button>
      {
        openModal && (
          <Modal>
            <form onSubmit={onSubmitTodo}>
              <label>Create a new to-do😁</label>
              <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Write a new to-do"
                required
              />
              <div className="form-container-btn">
                <button
                type="button"
                  onClick={closeModal}
                  className="form-btn form-btn--cancel"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="form-btn form-btn--add"
                >
                  Add
                </button>
              </div>
            </form>
          </Modal>
        )
      }
    </Fragment>
  );
};
