import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
        * {
                ul, li, button, input, a{
                        all: unset;
                }
                margin: 0;
                padding: 0;
                border: 0;
                font-size: 100%;
                font-weight: normal;
                vertical-align: baseline;
                font-family: 'Lexend Deca', sans-serif;
                box-sizing: border-box;
                -ms-overflow-style: none;   
                scrollbar-width: none;      
                        ::-webkit-scrollbar {
                                display: none;      
                        }
        }
`

export { GlobalStyle };