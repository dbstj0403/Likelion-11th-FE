import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import AddInfo from "../Component/AddInfo";
import ShowInfo from "../Component/ShowInfo";

export default function GithubCallback() {
  const CODE = new URL(window.location.href).searchParams.get("code");
  const [registerState, setRegisterState] = useState(false);

  console.log("Code:", CODE);

  const [userInfor, setUserInfor] = useState([]);

  const sendToken = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/auth/github/token",
        { code: CODE }
      );
      console.log(response);
      localStorage.setItem("access_token", response.data.access);
      localStorage.setItem("refresh_token", response.data.refresh);
      setRegisterState(response.data.register_state);

    } catch (error) {
      console.log("Code sending error!");
    }
  };

  const githubGetInfo = async () => {
    try {
      const response = await axios.get("http://localhost:8000/accounts", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      console.log(response);
      setUserInfor(response.data);
    } catch (error) {
      console.log("Login error!");
    }
  };

  useEffect(() => {
    const githubLogin = async () => {
      await sendToken();
      await githubGetInfo();
    };
    githubLogin();
  }, []);

  return (
    <div>
         {registerState === true ? <ShowInfo name={userInfor.name} univ={userInfor.univ} 
         track={userInfor.track}/> : <AddInfo setRegisterState={setRegisterState}/>}
    </div>
  );
}
