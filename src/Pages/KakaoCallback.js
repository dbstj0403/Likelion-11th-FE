import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';

export default function KakaoCallback () {

    const CODE = new URL(window.location.href).searchParams.get("code");
    console.log('Code:', CODE);

    const [userInfor, setUserInfor] = useState([]);

    const sendToken = async () => {
      try {
          const response = await axios.post('/accounts/github/token/', 
          {code: CODE});
          console.log(response);
          localStorage.setItem('access_token', response.data.access);
          localStorage.setItem('refresh_token', response.data.refresh);
      }
      catch(error){
          console.log('Code sending error!');
      }
  }

  useEffect(() => {sendToken();}, []); 

  const kakaoGetInfo = async () => {
      try{
          const response = await axios.get('/accounts', {headers: {Authorization: `Bearer ${localStorage.getItem('access_token')}`}});
          console.log(response);
          setUserInfor(response.data); 
          console.log('User information:', userInfor);
      }
      catch(error)
      {
          console.log('Login error!');
      }
  }

  useEffect(() => {kakaoGetInfo();}, []);

    return (
        <div>
            <h1>카카오 로그인!</h1>
        </div>
    );
}