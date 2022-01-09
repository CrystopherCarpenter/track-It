import { useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from "react-loader-spinner"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Container, Input, Button, PageLink } from "../Login/style"

function SignUp() {
        const [loading, setLoading] = useState(false)
        return (
                <>
                        <Container>
                                <Input type="email" placeholder="email" disabled={loading}></Input>
                                <Input type="password" placeholder="senha" disabled={loading}></Input>
                                <Input type="text" placeholder="nome" disabled={loading}></Input>
                                <Input type="URL" placeholder="foto" disabled={loading}></Input>
                                <Button disabled={loading} onClick={() => {
                                        setLoading(true);
                                }
                                }>
                                        {loading ? <Loader type="ThreeDots" color="#FFFFFF" height={60} width={60} /> : `Cadastrar`}
                                </Button>
                        </Container>
                        <Link to={"/"} disabled={loading}><PageLink>Já tem uma conta? Faça login!</PageLink></Link>
                </>
        );
}

export default SignUp;