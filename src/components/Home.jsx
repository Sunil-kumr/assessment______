import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../redux/store";
import { Typography } from "@mui/material";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

const Home = () => {
  const dispatch = useDispatch();
  const weather = useSelector(state => state.tasks.weather);

  useEffect(() => {
    dispatch(fetchWeather());
  }, [dispatch]);

  return (
    <div>
      {weather && <Typography>Current Temperature: {weather}°C</Typography>}
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default Home;
