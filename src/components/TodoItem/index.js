import './TodoItem.css';
import { BsTrash3, BsCheck2Circle } from 'react-icons/bs';

export const TodoItem = ({text, completed, onComplete,  onDelete}) => {

  return (
    <li className="TodoItem">
    <span
      className={`Icon Icon-check ${completed
      && "Icon-check--active"}`}
      onClick={onComplete}
    >
      <BsCheck2Circle />
    </span>
      <p
        className={`TodoItem-p  ${completed
         && "TodoItem-p--complete" }`}
      >
        {text}
      </p>
      <span
        className="Icon Icon-delete"
        onClick={onDelete}
      >
          <BsTrash3 />
      </span>
    </li>
  );
}
