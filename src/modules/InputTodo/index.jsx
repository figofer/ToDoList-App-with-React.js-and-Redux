import TextField from "../../component/TextField";
import Button from "../../component/Button";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../../store/todosSlice";
import { PropTypes } from "prop-types";
const InputTodo = ({ id, todoUpdate, isUpdate, done }) => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = () =>
    value != "" &&
    (dispatch(
      addTodo({
        todo: value,
      })
    ),
    setValue(""));

  const handleUpdate = () =>
    value != "" &&
    (dispatch(
      updateTodo({
        id: id,
        todo: value,
      })
    ),
    setValue(""),
    done());

  useEffect(() => {
    setValue(todoUpdate);
  }, [todoUpdate]);

  return (
    <div className="container-input">
      <TextField
        name="inputTodo"
        text="What to do"
        value={value}
        handleChange={(e) => setValue(e.target.value)}
      />
      <Button 
    
        text={`${isUpdate ? "Update" : "Add"}`}
        handleClick={isUpdate ? handleUpdate : handleSubmit}
      />
    </div>
  );
};

InputTodo.propTypes = {
  id: PropTypes.number,
  todoUpdate: PropTypes.string,
  isUpdate: PropTypes.bool,
  done: PropTypes.func,
};

export default InputTodo;
