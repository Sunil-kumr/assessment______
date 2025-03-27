import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../redux/store";
import { Button } from "@mui/material";

const Auth = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <div style={{ textAlign: "center", marginBottom: "1rem" }}>
      {isAuthenticated ? (
        <Button variant="contained" color="secondary" onClick={() => dispatch(logout())}>Logout</Button>
      ) : (
        <Button variant="contained" color="primary" onClick={() => dispatch(login())}>Login</Button>
      )}
    </div>
  );
};

export default Auth;
