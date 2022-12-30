import { useContext } from "react";
import { Routes,Route,Navigate } from "react-router-dom";
import AuthContext from "./context/auth-context";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import TextEditorPage from "./components/main/TextEditorPage";
function App() {
  const authContext = useContext(AuthContext);
  const isLoggedIn = authContext.isLoggedIn;
  return (
    <div className="App">
     <Header/>
     <TextEditorPage/>
     <Routes>
            <Route path="/" element={isLoggedIn ? <Home/> : <Navigate replace to={"/signin"}/>} />
            
            <Route
              path="/signin"
              element={!isLoggedIn ? <Signin /> : <Navigate replace to={"/"} />}
            />
            <Route path="/signup" element={<Signup/>}/>
          </Routes>
    </div>
  );
}

export default App;
