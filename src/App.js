import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import KakaoCallback from "./Pages/KakaoCallback";
import GoogleCallback from "./Pages/GoogleCallback";
import GithubCallback from "./Pages/GithubCallback";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/kakaoCallback" element={<KakaoCallback />} />
          <Route path="/googleCallback" element={<GoogleCallback />} />
          <Route path="/githubCallback" element={<GithubCallback />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
