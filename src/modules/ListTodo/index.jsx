import { TbTrashXFilled } from "react-icons/tb";
import { RiPencilFill } from "react-icons/ri";
import Checkbox from "../../component/Checkbox";
import { useSelector, useDispatch } from "react-redux";
import { compledeTodo, deleteTodo } from "../../store/todosSlice";
import FilterTodo from "../FilterTodo";
import { PropTypes } from "prop-types";

const ListTodo = ({ getTodo }) => {
const todos = useSelector((state) => state.todos.todos);
const filterBy = useSelector((state) => state.todos.filterBy);
const dispatch = useDispatch();
const handleCheckbox = (id) =>
dispatch(
compledeTodo({
id: id,
})
);

const handleDelete = (id) =>
dispatch(
deleteTodo({
id: id,
})
);

const handleGetData = (id, todo) => getTodo(id, todo);

const filteredTodo = () => {
if (filterBy === "COMPLETED") {
return todos.filter((todo) => todo.completed);
}
if (filterBy === "ACTIVE") {
return todos.filter((todo) => !todo.completed);
}

return todos;
};

return (
<div className="container-todo ">
  <FilterTodo />
  <div className="container-list-todo">
    {filteredTodo().map((el, i) => (
    <div key={i} className="list-todo">
      <div className="am">
        <Checkbox handleChange={()=> handleCheckbox(el.id)}
          value={el.todo}
          isChecked={el.completed}
          />
          <h1 className={` ${ el.completed && `completed` } `}>
            {el.todo}
          </h1>
     
      </div>
      <div className="simbol">
        {!el.completed && (
        <RiPencilFill onClick={()=> handleGetData(el.id, el.todo)}
          className="edit"
          />
          )}
          <TbTrashXFilled onClick={()=> handleDelete(el.id)}
            className="delete"
            />
      </div>
    </div>
    ))}
  </div>
</div>
);
};

ListTodo.propTypes = {
getTodo: PropTypes.func,
};

export default ListTodo;