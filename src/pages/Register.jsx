import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import axios from "axios";

export default function Register() {
  const [data, setData] = useState({ username: "", email: "", password: "" });

  let formData = {
    username: data.username,
    email: data.email,
    password: data.password,
  };

  const addUser = (event) => {
    event.preventDefault();

    const userData = JSON.stringify({
      username: formData.username,
      email: formData.email,
      password: formData.password,
    });
    const config = {
      method: "post",
      url: "http://localhost:5430/users/addUser",
      headers: {
        "Content-Type": "application/json",
      },
      data: userData,
    };
    axios(config)
      .then(function (response) {
        window.alert("user created successfully");
      })
      .catch(function (error) {
        window.alert("user not created", error);
      });
  };

  console.log(formData);
  return (
    <div className="flex flex-row justify-center">
      <div className="bg-[#58C0CA] w-[50%] flex flex-row justify-center rounded-xl">
        <form action="" className="w-[90%]">
          <div className="space-y-5 p-2 flex flex-col justify-center">
            <h1 className="self-center">Resigtration form</h1>
            <div className="input-container self-center">
              <TextField
                id="outlined-basic"
                label="Username"
                variant="outlined"
                onChange={(event) => {
                  setData((prevData) => ({
                    ...prevData,
                    username: event.target.value,
                  }));
                }}
              />
            </div>
            <div className="input-container self-center">
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                onChange={(event) => {
                  setData((prevData) => ({
                    ...prevData,
                    email: event.target.value,
                  }));
                }}
              />
            </div>
            <div className="input-container self-center">
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                onChange={(event) => {
                  setData((prevData) => ({
                    ...prevData,
                    password: event.target.value,
                  }));
                }}
              />
            </div>
            <div className="button-container self-center">
              <Button
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                type="submit"
                onClick={addUser}
              >
                Register
              </Button>
            </div>
          </div>
        </form>
      </div>
      <div></div>
    </div>
  );
}
