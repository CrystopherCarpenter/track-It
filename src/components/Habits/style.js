import styled from 'styled-components';

const Main = styled.div`
        width: 100vw;
        height: 100vh;
        padding: 70px 18px 102px 18px;
        background-color: #e5e5e5;       
`
const Container = styled.div`
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        margin-top: 22px;
        margin-bottom: 28px;
`

const Title = styled.h1`
        font-size: 23px;
        color: #126BA5;
`

const AddButton = styled.button`
        width: 40px;
        height: 35px;
        background: #52B6FF;
        border-radius: 4.63636px;
        font-size: 27px;
        color: #FFFFFF;
        text-align: center;
        padding-bottom: 4px;
        :hover{
                cursor: pointer;
        }
`

const Text = styled.p`
        font-size: 18px;
        line-height: 22px;
        color: #666666;
`

const NewHabit = styled.div`
        width: 100%;
        height: 180px;
        background: #FFFFFF;
        border-radius: 5px;
        padding: 18px;
        margin: 28px auto;
`
const HabitInput = styled.input`
        width: 100%;
        height: 45px;
        box-sizing: border-box;
        ${props => (props.disabled ? `#F2F2F2` : `#FFFFFF`)};
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-bottom: 8px;
        padding: 0 11px;
        font-size: 20px;
        color: ${props => (props.disabled ? `#AFAFAF` : `#666666`)};
        ::placeholder{
                color: #DBDBDB; 
        }
`

const Weekdays = styled.div`
        width: 100%;
        display:flex;
        flex-wrap: nowrap;
        column-gap: 4px;
`

const Day = styled.button`
        width: 30px;
        height: 30px;
        background: ${props => (props.selected ? `#CFCFCF` : `#FFFFFF`)};
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-size: 20px;
        text-align: center;
        color: ${props => (props.selected ? `#FFFFFF` : `#DBDBDB`)}; 
        :hover{
                cursor: pointer;
        }
`

const Buttons = styled.div`
        display:flex;
        justify-content: flex-end;
        margin-top: 29px;
`

const Button = styled.button`
        width: 84px;
        height: 35px;
        background: ${props => (props.type === "save" ? `#52B6FF` : `#FFFFFF`)};
        border-radius: 4.63636px;
        font-size: 16px;
        color: ${props => (props.type === "save" ? `#FFFFFF` : `#52B6FF`)};
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 25px;
        ${props => (props.disabled && `opacity: 0.7;`)}
        :hover{
                cursor: pointer;
        }
`

const Delete = styled.img`
        width: 13px;
        object-fit: cover;
        position: absolute;
        top: 11px;
        right: 11px;
        :hover{
                cursor: pointer;
        }
`

const HabitName = styled.h1`
        margin-bottom: 8px;
        font-size: 20px;
        line-height: 25px;
        color: #666666;
        display:flex;
        justify-content: flex-start;
        align-items: center;
        padding-right: 35px;
`

const Habit = styled.div`
        width: 100%;
        background: #FFFFFF;
        border-radius: 5px;
        padding: 15px;
        margin-bottom: 10px;
        position: relative;
`

export { Main, Container, Title, AddButton, Text, NewHabit, HabitInput, Weekdays, Day, Button, Buttons, Delete, HabitName, Habit };