import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function ShowInfo ({name, univ, track}) {

    const movePage = useNavigate();
    const logout = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        movePage('/');
    }

    return (
        <div className="my">
            <h2>{univ} {track} {name}님 안녕하세요! ☺️</h2>
            <button className="login" onClick={logout}>로그아웃</button>
        </div>
    );
}