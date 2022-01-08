import { BrowserRouter, Routes, Route } from "react-router-dom";
import Habits from "../Habits/index";
import History from "../History/index";
import Login from "../Login/index";
import SignUp from "../SignUp/index";
import Today from "../Today/index";
import Header from "../Header/index";
import Footer from "../Footer/index";

import { GlobalStyle } from "./style"

function App() {
        return (
                <>
                        <GlobalStyle />
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
                </>
        );
}

export default App;
