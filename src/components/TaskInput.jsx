import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/store";
import { TextField, Button, Select, MenuItem } from "@mui/material";

const TaskInput = () => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask({ id: Date.now(), text: task, priority }));
      setTask("");
    }
  };

  return (
    <div>
      <TextField fullWidth label="Add Task" value={task} onChange={(e) => setTask(e.target.value)} />
      <Select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <MenuItem value="High">High</MenuItem>
        <MenuItem value="Medium">Medium</MenuItem>
        <MenuItem value="Low">Low</MenuItem>
      </Select>
      <Button variant="contained" color="primary" onClick={handleAddTask}>Add</Button>
    </div>
  );
};

export default TaskInput;
