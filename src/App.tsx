import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "./screens/Lottery";
import Profile from "./screens/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Game />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
