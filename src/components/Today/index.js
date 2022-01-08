import React from 'react';
import Check from "../../assets/Check.png"
import { Main, Container, Title, Text, HabitName, Habit, CheckBox } from "./style"

function Today() {
        const myHabits = [
                { name: `Ler um livro inteiro em 2 horas`, days: [0, 2, 3, 5] },
                { name: `Escrever um livro inteiro em 2 horas`, days: [1, 4, 6] },
                { name: `Correr uma maratona`, days: [0, 3, 6] }
        ];

        return (
                <Main>
                        <Container>
                                <Title>Segunda, 10/01</Title>
                                <Text>Nenhum hábito concluído ainda</Text>
                        </Container>
                        {myHabits.length === 0 ? (
                                <Text>Você não tem nenhum hábito hoje</Text>
                        ) : myHabits.map((habit) => (
                                <Habit key={habit.name}>
                                        <div>
                                                <HabitName>{habit.name}</HabitName>
                                                <p>Sequência atual: <span>3 dias</span></p>
                                                <p>Seu recorde: <span>3 dias</span></p>
                                        </div>
                                        <CheckBox><img src={Check} alt="Concluído" /></CheckBox>
                                </Habit>
                        ))}
                </Main>
        );
}

export default Today;