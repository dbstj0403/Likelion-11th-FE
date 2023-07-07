import "./BtnStyle.css";
import { GithubLoginButton } from "react-social-login-buttons";
export default function GithubBtn() {
  const CLIENT_ID = process.env.REACT_APP_GITHUB_CLIENT_ID;
  const REDIRECT_URI = `http://localhost:3000/githubCallback`;
  const GITHUB_AUTH_URL = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=user:email`;

  const handleLogin = () => {
    window.location.href = GITHUB_AUTH_URL;
  };

  return (
    <div className="btns">
      <GithubLoginButton
        onClick={handleLogin}
        className="Github"
        style={{
          width: "400px",
          height: "50px",
          margin: "15px",
          borderRadius: "10px",
          fontSize: "15px",
          paddingLeft: "105px",
          align: "center",
        }}
      >
        Log in with GitHub
      </GithubLoginButton>
    </div>
  );
}
