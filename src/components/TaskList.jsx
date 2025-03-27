import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTask } from "../redux/store";
import { List, ListItem, ListItemText, IconButton } from "@mui/material";
//import DeleteIcon from "@mui/icons-material/Delete";

const TaskList = () => {
  const tasks = useSelector(state => state.tasks.tasks);
  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((t) => (
        <ListItem key={t.id} secondaryAction={
          <IconButton edge="end" onClick={() => dispatch(removeTask(t.id))}>
            <DeleteIcon />
          </IconButton>
        }>
          <ListItemText primary={`${t.text} - ${t.priority}`} />
        </ListItem>
      ))}
    </List>
  );
};

export default TaskList;
