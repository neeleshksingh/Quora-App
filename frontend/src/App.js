import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./components/Authorization/signin";
import Signup from "./components/Authorization/signup";
import Terms from "./components/Terms/terms";
import Navigation from "./components/nav/nav";
import Main from "./components/Dashboard/main";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/terms" element={<><Navigation/><Terms/></>} />
          <Route path="/main" element={<Main/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
