import { useState, useEffect } from "react";
import Check from "../../assets/Check.png"
import { Main, Container, Title, Text, HabitName, Habit, CheckBox, Current, Highest, TextProgress } from "./style"
import { useContext } from "react";
import UserContext from "../../Context/UserContext";
import dayjs from 'dayjs'
import locale_br from 'dayjs/locale/pt-br'
import axios from "axios";

function Today() {
        const today = dayjs();
        const { token } = useContext(UserContext);
        const { progress, setProgress } = useContext(UserContext);
        let localProgress = 0;
        let progressCounter = 0;
        const [todayHabits, setTodayHabits] = useState([]);

        useEffect(() => {
                loadHabits();
        }, []);

        useEffect(() => {
                setProgress(localProgress)
        }, [todayHabits]);

        function loadHabits() {
                const promise = axios.get(
                        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today`,
                        { headers: { Authorization: `Bearer ${token}` } }
                );

                promise.then((answer) => {
                        setTodayHabits(answer.data);
                });
        }

        function calcProgress() {
                localProgress = Math.round((progressCounter / todayHabits.length) * 100)
        }

        function setDate(today) {
                const weekday = locale_br.weekdays[today.getDay()].split(`-`)
                return (`
                        ${weekday[0]}, 
                        ${today.getDate() < 10 ? `0` : ``}${today.getDate()}/${today.getMonth() < 9 ? `0` : ``}${(today.getMonth()) + 1}`
                );
        }

        return (
                <Main>
                        <Container>
                                <Title>{setDate(today.$d)}</Title>
                                <TextProgress progress={progress !== 0}>{progress === 0 ? `Nenhum hábito concluído ainda` :
                                        `${progress}% dos hábitos concluídos`}
                                </TextProgress>
                        </Container>
                        {todayHabits.length === 0 ? (
                                <Text>Você não tem nenhum hábito hoje</Text>
                        ) : todayHabits.map((habit) => {
                                habit.done && (progressCounter++)
                                calcProgress();
                                return (
                                        <Habit key={habit.id}>
                                                <div>
                                                        <HabitName>{habit.name}</HabitName>
                                                        <p>Sequência atual: <Current done={habit.done}>{habit.currentSequence} dias</Current></p>
                                                        <p>Seu recorde: <Highest currentIsHighest={habit.currentSequence === habit.highestSequence && habit.highestSequence !== 0}>{habit.highestSequence} dias</Highest></p>
                                                </div>
                                                <CheckBox done={habit.done} onClick={() => {
                                                        const promisse = axios.post(
                                                                `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/${habit.done ? `uncheck` : `check`}`, null,
                                                                { headers: { Authorization: `Bearer ${token}` } });

                                                        promisse.then(() => loadHabits());
                                                }}><img src={Check} alt="Concluído" /></CheckBox>
                                        </Habit>
                                );
                        })}
                </Main>
        );
}

export default Today;

