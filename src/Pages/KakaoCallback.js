import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function KakaoCallback() {
  const CODE = new URL(window.location.href).searchParams.get("code");
  console.log("Code:", CODE);

  const [userInfor, setUserInfor] = useState([]);

    const sendToken = async () => {
      try {
          const response = await axios.post('/accounts/kakao/token/', 
          {code: CODE});
          console.log(response);
          localStorage.setItem('access_token', response.data.access);
          localStorage.setItem('refresh_token', response.data.refresh);
      }
      catch(error){
          console.log('Code sending error!');
      }
  }

  const kakaoGetInfo = async () => {
      try{
          const response = await axios.get('/accounts/', {headers: {Authorization: `Bearer ${localStorage.getItem('access_token')}`}});
          console.log(response);
          setUserInfor(response.data); 
          console.log('User information:', userInfor);
      }
      catch(error)
      {
          console.log('Login error!');
      }
  }

  useEffect(() => {
    const kakaoLogin = async () => {
      await sendToken();
      await kakaoGetInfo();
    };
    kakaoLogin();
  }, []);

  return (
    <div>
      <h1>카카오 로그인!</h1>
    </div>
  );
}
