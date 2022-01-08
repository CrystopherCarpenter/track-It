import styled from 'styled-components';

const FooterNavBar = styled.div`
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

const FooterButton = styled.span`
        font-size: 18px;
        text-align: center;
        color: #52B6FF;
        :hover{
                cursor: pointer;
        }
`

export { FooterNavBar, FooterButton }