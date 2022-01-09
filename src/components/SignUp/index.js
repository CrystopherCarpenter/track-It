import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import Loader from "react-loader-spinner"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Container, Input, Button, PageLink } from "../Login/style"
import axios from "axios";

function SignUp() {
        const [loading, setLoading] = useState(false);
        const [email, setEmail] = useState(``);
        const [password, setPassword] = useState(``);
        const [name, setName] = useState(``);
        const [photo, setPhoto] = useState(``);
        const navigate = useNavigate()

        return (
                <>
                        <Container>
                                <Input type="email" placeholder="email" disabled={loading}
                                        onChange={e => setEmail(e.target.value)} value={email}></Input>
                                <Input type="password" placeholder="senha" disabled={loading}
                                        onChange={e => setPassword(e.target.value)} value={password}></Input>
                                <Input type="text" placeholder="nome" disabled={loading}
                                        onChange={e => setName(e.target.value)} value={name}></Input>
                                <Input type="URL" placeholder="foto" disabled={loading}
                                        onChange={e => setPhoto(e.target.value)} value={photo}></Input>
                                <Button disabled={loading} onClick={() => {
                                        setLoading(true);
                                        const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up`, {
                                                email: `${email}`,
                                                name: `${name}`,
                                                image: `${photo}`,
                                                password: `${password}`
                                        });
                                        promise.then(() => {
                                                navigate(`/`);
                                        });
                                        promise.catch(() => {
                                                alert(`Verifique os dados e tente novamente`)
                                                setLoading(false);
                                        });
                                }}>
                                        {loading ? <Loader type="ThreeDots" color="#FFFFFF" height={60} width={60} /> : `Cadastrar`}
                                </Button>
                        </Container>
                        <Link to={"/"} disabled={loading}><PageLink>Já tem uma conta? Faça login!</PageLink></Link>
                </>
        );
}

export default SignUp;