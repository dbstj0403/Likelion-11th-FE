import React from 'react';
import KakaoBtn from '../btns/KakaoBtn';
import GithubBtn from '../btns/GithuBtn';
import GoogleBtn from '../btns/GoogleBtn';

export default function Homepage () {

    return (
        <div className='my'>
            <h2>윤영 팀 서비스에 오신 걸 환영합니다! 🤗</h2>
            <h3>로그인 후 자유롭게 이용해 보세요.</h3>
            <div><input placeholder='아이디를 입력하세요.'></input></div>
            <div><input placeholder='비밀번호를 입력하세요.'></input></div>
            <div><button className='login'>로그인</button></div>
            <div><button className='signup'>회원 가입</button></div>
            <h3 className='another'>🦁 다른 방법으로 로그인하기! 🦁</h3>
            <hr></hr>
            <KakaoBtn/>
            <GoogleBtn/>
            <GithubBtn/>
        </div>
    );
}