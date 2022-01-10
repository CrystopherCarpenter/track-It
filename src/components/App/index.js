import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Habits from "../Habits/index";
import History from "../History/index";
import Login from "../Login/index";
import SignUp from "../SignUp/index";
import Today from "../Today/index";
import Header from "../Header/index";
import Footer from "../Footer/index";
import { GlobalStyle } from "./style"
import UserContext from "../../Context/UserContext";

function App() {
        const [token, setToken] = useState(null);
        const [user, setUser] = useState(null);
        const [progress, setProgress] = useState(0);

        return (
                <>
                        <GlobalStyle />
                        <UserContext.Provider value={{ token, setToken, user, setUser, progress, setProgress }}>
                                <BrowserRouter>
                                        <Header />
                                        <Routes>
                                                <Route path="/" element={<Login />}></Route>
                                                <Route path="/cadastro" element={<SignUp />}></Route>
                                                <Route path="/habitos" element={<Habits />}></Route>
                                                <Route path="/hoje" element={<Today />}></Route>
                                                <Route path="/historico" element={<History />}></Route>
                                        </Routes>
                                        <Footer />
                                </BrowserRouter>
                        </UserContext.Provider>
                </>
        );
}

export default App;
