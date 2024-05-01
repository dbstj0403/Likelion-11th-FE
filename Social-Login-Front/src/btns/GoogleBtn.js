import './BtnStyle.css';
import { GoogleLoginButton } from 'react-social-login-buttons';

export default function GoogleBtn () {

    const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
    const REDIRECT_URI = `http://localhost:3000/googleCallback`;
    const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?scope=profile%20email%20openid&include_granted_scopes=true&state=state_parameter_passthrough_value&redirect_uri=${REDIRECT_URI}&response_type=code&client_id=${CLIENT_ID}&access_type=offline&prompt=consent`;
    const handleLogin = () => {
        window.location.href = GOOGLE_AUTH_URL;
    }

    return (
        <div className='btns'>
            <GoogleLoginButton onClick={handleLogin} className='Google' style={{width: "400px",
            height: "50px",
            margin: "15px",
            borderRadius: "10px",
            fontSize: "15px",
            paddingLeft: "105px"}}>Log in with Google</GoogleLoginButton>
        </div>
    );
}