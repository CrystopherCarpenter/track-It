import styled from 'styled-components';

const Logo = styled.img`
        width: 180px;
        display: flex;
        margin: 68px auto 55px auto;
`

const TopBar = styled.div`
        position: fixed;
        top: 0;
        z-index: 10;
        width: 100vw;
        height: 70px;
        display: flex;
        flex-wrap: nowrap;
        background-color: #126BA5;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        align-items: center;
        justify-content: space-between;
        padding: 0 18px;
`

const P = styled.p`
        font-family: Playball;
        font-size: 39px;
        color: #FFFFFF;
`

const Photo = styled.img`
        width: 51px;
        height: 51px;
        object-fit: cover;
        border-radius: 98.5px;
`
export { Logo, TopBar, P, Photo };