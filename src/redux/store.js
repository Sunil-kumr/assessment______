import { configureStore, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWeather = createAsyncThunk("weather/fetchWeather", async () => {
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=YOUR_API_KEY&units=metric`);
  return response.data.main.temp;
});

const taskSlice = createSlice({
  name: "tasks",
  initialState: { tasks: JSON.parse(localStorage.getItem("tasks")) || [], weather: null },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      state.weather = action.payload;
    });
  },
});

const authSlice = createSlice({
  name: "auth",
  initialState: { isAuthenticated: JSON.parse(localStorage.getItem("auth")) || false },
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
      localStorage.setItem("auth", true);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      localStorage.setItem("auth", false);
    },
  },
});

export const { addTask, removeTask } = taskSlice.actions;
export const { login, logout } = authSlice.actions;

export const store = configureStore({
  reducer: {
    tasks: taskSlice.reducer,
    auth: authSlice.reducer
  }
});
