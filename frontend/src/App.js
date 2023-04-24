import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./components/Authorization/signin";
import Signup from "./components/Authorization/signup";
import Terms from "./components/Terms/terms";
import Navigation from "./components/nav/nav";
import Main from "./components/Dashboard/main";
import DashNav from "./components/nav/dashNav";
import Post from "./components/Forms/post";
import Ask from "./components/Forms/ask";
import Answer from "./components/Forms/answer";
import Users from "./components/Dashboard/allUsers";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/terms" element={<><Navigation/><Terms/></>} />
          <Route path="/main" element={<><DashNav/><Main/></>} />
          <Route path="/post" element={<><DashNav/><Post/></>} />
          <Route path="/ask" element={<Ask/>} />
          <Route path="/answer" element={<Answer/>} />
          <Route path="/users" element={<><DashNav/><Users/></>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
