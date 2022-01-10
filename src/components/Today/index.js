import { useState, useEffect } from "react";
import Check from "../../assets/Check.png"
import { Main, Container, Title, Text, HabitName, Habit, CheckBox } from "./style"
import { useContext } from "react";
import UserContext from "../../Context/UserContext";
import dayjs from 'dayjs'
import locale_br from 'dayjs/locale/pt-br'
import axios from "axios";

function Today() {
        const today = dayjs();
        const { token } = useContext(UserContext);
        const [todayHabits, setTodayHabits] = useState(null);

        useEffect(() => {
                const promise = axios.get(
                        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today`,
                        { headers: { Authorization: `Bearer ${token}` } }
                );

                promise.then((answer) => {
                        setTodayHabits(answer.data);
                });
        }, []);

        function setDate(today) {
                return (`
                        ${locale_br.weekdays[today.getDay()]}, 
                        ${today.getDate() < 10 && `0`}${today.getDate()}/${today.getMonth() < 9 && `0`}${(today.getMonth()) + 1}`
                );
        }

        return (
                <Main>
                        <Container>
                                <Title>{setDate(today.$d)}</Title>
                                <Text>Nenhum hábito concluído ainda</Text>
                        </Container>
                        {todayHabits.length === 0 ? (
                                <Text>Você não tem nenhum hábito hoje</Text>
                        ) : todayHabits.map((habit) => (
                                <Habit key={habit.id} done={habit.done}>
                                        <div>
                                                <HabitName>{habit.name}</HabitName>
                                                <p>Sequência atual: <span>{habit.currentSequence} dias</span></p>
                                                <p>Seu recorde: <span>{habit.highestSequence} dias</span></p>
                                        </div>
                                        <CheckBox done={habit.done}><img src={Check} alt="Concluído" /></CheckBox>
                                </Habit>
                        ))}
                </Main>
        );
}

export default Today;