import { Col, Row, Input, Typography, Radio, Select, Tag } from "antd";
import { useState } from "react";
import {
  searchTodoAction,
  statusFilterChange,
  priorityFilterChange,
} from "../../redux/actions";
import { useDispatch } from "react-redux";
const { Search } = Input;

export default function Filters() {
  const [searchText, setSearchText] = useState();
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterPriority, setFilterPriority] = useState([]);
  console.log(filterPriority);
  const dispatch = useDispatch();
  const searchChangedHandler = (e) => {
    setSearchText(e.target.value);
    dispatch(searchTodoAction(e.target.value));
  };
  const handlerStatusChange = (e) => {
    setFilterStatus(e.target.value);
    dispatch(statusFilterChange(e.target.value));
  };
  const handlerPriorityChange = (value) => {
    console.log(value);
    setFilterPriority(value);
    dispatch(priorityFilterChange(value));
  };
  return (
    <Row justify="center">
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search
          placeholder="input search text"
          value={searchText}
          onChange={searchChangedHandler}
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={filterStatus} onChange={handlerStatusChange}>
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode="multiple"
          allowClear
          placeholder="Please select"
          style={{ width: "100%" }}
          onChange={handlerPriorityChange}
          value={filterPriority}
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
      </Col>
    </Row>
  );
}
