import styled from 'styled-components';

const Logo = styled.img`
        width: 180px;
        display: flex;
        margin: 68px auto 55px auto;
`

const Container = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 6px;
        margin-bottom: 24px;
`

const Input = styled.input`
        width: 303px;
        height: 45px;
        box-sizing: border-box;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        padding: 0 11px;
        font-size: 20px;
        color: #666666;
        ::placeholder{
                color: #DBDBDB; 
        }
`

const Button = styled.button`
        width: 303px;
        height: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #52B6FF;
        border-radius: 4.63636px;
        font-size: 21px;
        color: #FFFFFF;
        :hover{
                cursor: pointer;
        }
`

const Link = styled.p`
        font-size: 14px;
        text-align: center;
        text-decoration-line: underline;
        color: #52B6FF;
        :hover{
                cursor: pointer;
        }
`

export { Logo, Container, Input, Button, Link };