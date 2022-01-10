import { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router';
import { useContext } from "react";
import UserContext from "../../Context/UserContext";
import { Container, Input, Button, PageLink } from "./style"
import Loader from "react-loader-spinner"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import axios from "axios";

function Login() {
        const { setUser } = useContext(UserContext);
        const { setToken } = useContext(UserContext);
        const [loading, setLoading] = useState(false);
        const [email, setEmail] = useState(``);
        const [password, setPassword] = useState(``);
        const navigate = useNavigate()

        return (
                <>
                        <Container>
                                <Input type="email" placeholder="email" disabled={loading}
                                        onChange={e => setEmail(e.target.value)} value={email}></Input>
                                <Input type="password" placeholder="senha" disabled={loading}
                                        onChange={e => setPassword(e.target.value)} value={password}></Input>
                                <Button disabled={loading} onClick={() => {
                                        setLoading(true);
                                        const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login`, {
                                                email: `${email}`,
                                                password: `${password}`
                                        });
                                        promise.then((answer) => {
                                                setUser(answer.data);
                                                setToken(answer.data.token);
                                                navigate(`/hoje`);
                                        });
                                        promise.catch(() => {
                                                alert(`Email ou senha inválidos`)
                                                setLoading(false);
                                        });
                                }}>
                                        {loading ? <Loader type="ThreeDots" color="#FFFFFF" height={60} width={60} /> : `Entrar`}
                                </Button>
                        </Container>
                        <Link to={"/cadastro"} disabled={loading}><PageLink >Não tem uma conta? Cadastre-se!</PageLink></Link>
                </>
        );
}

export default Login;