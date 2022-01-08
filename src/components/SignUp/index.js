import React from 'react';
import { Container, Input, Button, Link } from "../Login/style"

function SignUp() {
        return (
                <>
                        <Container>
                                <Input type="email" placeholder="email" ></Input>
                                <Input type="password" placeholder="senha" ></Input>
                                <Input type="text" placeholder="nome" ></Input>
                                <Input type="URL" placeholder="foto" ></Input>
                                <Button>Cadastrar</Button>
                        </Container>
                        <Link>Já tem uma conta? Faça login!</Link>
                </>
        );
}

export default SignUp;