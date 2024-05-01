import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import AddInfo from "../Component/AddInfo";
import ShowInfo from "../Component/ShowInfo";
import Loading from "../Component/Loading";

export default function GoogleCallback() {
  const CODE = new URL(window.location.href).searchParams.get("code");
  const [registerState, setRegisterState] = useState(null);
  const [userInfor, setUserInfor] = useState({});
  const [loading, setLoading] = useState();

  console.log("Code:", CODE);

  const sendToken = async () => {
    if (registerState === true) {
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:8000/auth/google/token",
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

  const googleGetInfo = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:8000/accounts", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      console.log("서버에서 받아온 데이터: ", response);
      console.log("response data: ", response.data);
      if (registerState === true) {
        setUserInfor(response.data);
      }
      console.log("유저 정보 저장: ", userInfor);
    } catch (error) {
      console.log("Login error!");
    }
    setLoading(false);
  };

  useEffect(() => {
    const googleLogin = async () => {
      await sendToken();
      await googleGetInfo();
    };
    googleLogin();
  }, [registerState]);

  return (
    <div>
      {registerState === null ? <Loading /> : null}
      {registerState === true && loading === false ? (
        <ShowInfo
          name={userInfor.name}
          univ={userInfor.univ}
          track={userInfor.track}
        />
      ) : null}
      {registerState === false ? (
        <AddInfo
          setRegisterState={setRegisterState}
          setUserInfor={setUserInfor}
        />
      ) : null}
    </div>
  );
}
