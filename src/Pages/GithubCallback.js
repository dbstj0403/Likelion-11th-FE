import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function GithubCallback() {
  const CODE = new URL(window.location.href).searchParams.get("code");
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
      console.log("User information:", userInfor);
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
      <h1>깃허브 로그인!</h1>
    </div>
  );
}
