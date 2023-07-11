import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

export default function GoogleCallback() {
  const CODE = new URL(window.location.href).searchParams.get("code");
  console.log("Code:", CODE);

  const [userInfor, setUserInfor] = useState([]);

  const sendToken = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/auth/google/token",
        {
          code: CODE,
        }
      );
      console.log(response);
      localStorage.setItem("access_token", response.data.access);
      localStorage.setItem("refresh_token", response.data.refresh);
    } catch (error) {
      console.log("Code sending error!");
    }
  };

  const googleGetInfo = async () => {
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
    const googleLogin = async () => {
      await sendToken();
      await googleGetInfo();
    };
    googleLogin();
  }, []);

  return (
    <div>
      <h1>구글 로그인!</h1>
    </div>
  );
}
