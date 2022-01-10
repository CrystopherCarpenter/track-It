import styled from 'styled-components';

const FooterNavBar = styled.div`
        position: relative;
        position: fixed;
        bottom: 0px;
        width: 100vw;
        height: 70px;
        background-color: #FFFFFF;
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        padding: 0 33px;
`

const FooterLink = styled.span`
        font-size: 18px;
        text-align: center;
        color: #52B6FF;
        :hover{
                cursor: pointer;
        }
`

const Progressbar = styled.div`
        width: 91px;
        height: 91px;
        position: absolute;
        top: -31px;
        left: calc((100vw - 91px)/2);
        :hover{
                cursor: pointer;
        }
`

export { FooterNavBar, FooterLink, Progressbar }