import React from "react";
import { useNavigate } from "react-router-dom";
export default function NavBar({ children }) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-row justify-center">
        <div className="flex flex-row justify-between bg-[#58C0CA] h-20 p-5 shadow-xl mt-[0.5%] w-[99%] rounded-xl">
          <div className="logo-container self-center w-[18rem]">
            <h1>LOGO</h1>
          </div>
          <div className="pages-container self-center w-[50rem]">
            <ul className="flex flex-row justify-evenly">
              <button type="button" onClick={() => navigate("/")}>
                Home
              </button>
              About
            </ul>
          </div>
          <div className="user-container self-center flex flex-row justify-between w-[25rem]">
            <button
              type="button"
              onClick={() => navigate("/register")}
              className="rounded-xl bg-[#f3e9d1] p-2 border-1 w-[12rem]"
            >
              Register
            </button>
            <button
              type="button"
              className="rounded-xl bg-[#f3e9d1] p-2 border-1 w-[12rem]"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </div>
        </div>
      </div>
      <div className="mt-10 p-2">{children}</div>
    </div>
  );
}
