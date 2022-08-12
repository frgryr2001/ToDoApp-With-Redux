import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { useDispatch, useSelector } from "react-redux";
import { addTodoAction } from "../../redux/actions";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { todosRemaining } from "../../redux/selectors";

export default function TodoList() {
  const [todoName, setTodoName] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [enteredValueTouched, setEnteredValueTouched] = useState(false);
  const valueIsValid = todoName.trim() !== "";

  const todoNameIsValid = !valueIsValid && enteredValueTouched;

  const dispatch = useDispatch();
  const todoList = useSelector(todosRemaining);
  // const search = useSelector(searchTextSelector);

  const inputBlurHandler = () => {
    setEnteredValueTouched(true);
  };
  const handlerAddTodo = () => {
    if (todoName.trim() === "") {
      setEnteredValueTouched(true);
      return;
    }
    dispatch(
      addTodoAction({
        id: uuidv4(),
        name: todoName,
        completed: false,
        priority: priority,
      })
    );
    setTodoName("");
    setPriority("Medium");
    setEnteredValueTouched(false);
  };
  const changedTodoNameHandler = (e) => {
    setTodoName(e.target.value);
  };
  const changedPriorityHandler = (value) => {
    setPriority(value);
  };
  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((todo) => {
          return (
            <Todo key={todo.id} name={todo.name} prioriry={todo.priority} />
          );
        })}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input
            value={todoName}
            onChange={changedTodoNameHandler}
            onBlur={inputBlurHandler}
          />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={changedPriorityHandler}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handlerAddTodo}>
            Add
          </Button>
        </Input.Group>
      </Col>
      {todoNameIsValid && (
        <div style={{ color: "red" }}>Todo name is required</div>
      )}
    </Row>
  );
}
