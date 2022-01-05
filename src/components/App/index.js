import { BrowserRouter, Routes, Route, useInRouterContext } from "react-router-dom";
import Habits from "../Habits/index";
import History from "../History/index";
import Login from "../Login/index";
import SignUp from "../SignUp/index";
import Today from "../Today/index";
import Logo from "../../assets/TrackIt.png"
import { GlobalStyle } from "./style"

function App() {
        return (
                <>
                        <GlobalStyle />
                        <img src={Logo} alt="" />
                        <BrowserRouter>
                                <Routes>
                                        <Route path="/" element={<Login />}></Route>
                                        <Route path="/cadastro" element={<SignUp />}></Route>
                                        <Route path="/habitos" element={<Habits />}></Route>
                                        <Route path="/hoje" element={<Today />}></Route>
                                        <Route path="/historico" element={<History />}></Route>
                                </Routes>
                        </BrowserRouter>
                </>
        );
}

export default App;
