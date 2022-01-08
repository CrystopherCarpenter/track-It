import React from 'react';
import { Container, Input, Button, Link } from "./style"

function Login() {
        return (
                <>
                        <Container>
                                <Input type="email" placeholder="email" ></Input>
                                <Input type="password" placeholder="senha" ></Input>
                                <Button>Enter</Button>
                        </Container>
                        <Link>Não tem uma conta? Cadastre-se!</Link>
                </>
        );
}

export default Login;