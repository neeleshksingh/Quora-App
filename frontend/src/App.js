import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./components/Authorization/signin";
import Signup from "./components/Authorization/signup";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
