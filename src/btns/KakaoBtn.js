import './BtnStyle.css';
import { AmazonLoginButton } from 'react-social-login-buttons';
import { RiKakaoTalkFill } from "react-icons/ri";
export default function KakaoBtn () {
    const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY; 
    const REDIRECT_URI = `http://localhost:3000/kakaoCallback`;
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    const handleLogin = () => {
        window.location.href = KAKAO_AUTH_URL;
    }

    return (
        <div className='btns'>
            <AmazonLoginButton onClick={handleLogin} className='Kakao' icon={RiKakaoTalkFill} activeStyle={{background: "#FFD232"}} style={{width: "400px",
            height: "50px",
            margin: "15px",
            borderRadius: "10px",
            fontSize: "15px",
            paddingLeft: "105px",
            background: "#FEE500",
            color: "black"}}>Log in with Kakao</AmazonLoginButton>
        </div>
    );
}