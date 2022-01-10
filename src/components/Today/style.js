import styled from 'styled-components';

const Main = styled.div`
        width: 100vw;
        height: 100vh;
        padding: 70px 18px 102px 18px;
        background-color: #e5e5e5;       
`
const Container = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: space-between;
        margin-top: 22px;
        margin-bottom: 28px;
`

const Title = styled.h1`
        font-size: 23px;
        color: #126BA5;
`

const Text = styled.p`
        font-size: 18px;
        line-height: 22px;
        color: #BABABA; /*#8FC549*/
`

const HabitName = styled.h1`
        max-width: 100%;
        margin: 8px;
        font-size: 20px;
        line-height: 25px;
        color: #666666;
        display:flex;
        justify-content: flex-start;
        align-items: center;
`

const Habit = styled.div`
        width: 100%;
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        background: #FFFFFF;
        border-radius: 5px;
        padding: 15px;
        margin-bottom: 10px;
                div{
                        max-width: calc(100% - 100px);
                }
                div p{
                        font-size: 13px;
                        line-height: 16px;
                        color: #666666;
                }
                div p span{
                        color: ${props => (!props.done ? `#666666` : `#8FC549`)};
                }
`

const CheckBox = styled.div`
        width: 69px;
        height: 69px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 15px;
        background-color: ${props => (!props.done ? `#EBEBEB` : `#8FC549`)};
        border: 1px solid #E7E7E7;
        border-radius: 5px;     
                img{
                        width: 35px;
                        height: 28px;
                        margin: auto;
                }
                :hover{
                        cursor: pointer
                }
`

export { Main, Container, Title, Text, HabitName, Habit, CheckBox };