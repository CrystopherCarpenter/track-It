import { useState } from 'react';
import TrashCan from "../../assets/TrashCan.png"
import { Main, Container, Title, AddButton, Text, NewHabit, HabitInput, Weekdays, Day, Button, Buttons, Habit, HabitName, Delete } from "./style"

function Habits() {
        const days = [{ name: `D`, id: 0 }, { name: `S`, id: 1 }, { name: `T`, id: 2 }, { name: `Q`, id: 3 }, { name: `Q`, id: 4 }, { name: `S`, id: 5 }, { name: `S`, id: 6 }];
        const [add, setAdd] = useState(false);
        const myHabits = [
                { name: `Ler um livro inteiro em 2 horas`, days: [0, 2, 3, 5] },
                { name: `Escrever um livro inteiro em 2 horas`, days: [1, 4, 6] },
                { name: `Correr uma maratona`, days: [0, 3, 6] }
        ];
        const [selectedDays, setSelectedDays] = useState([]);

        function setDay(id) {
                if (selectedDays.includes(id)) {
                        setSelectedDays(selectedDays.filter(day => day !== id));
                } else {
                        setSelectedDays(selectedDays.concat(id));
                }
        }

        return (
                <Main>
                        <Container>
                                <Title>Meus hábitos</Title> <AddButton onClick={() => setAdd(true)}>+</AddButton>
                        </Container>
                        {add && (<NewHabit>
                                <HabitInput type="text" placeholder='nome do hábito'></HabitInput>
                                <Weekdays>
                                        {days.map((day) => (
                                                <Day key={day.id} selected={selectedDays.includes(day.id) ? true : false} onClick={() => {
                                                        setDay(day.id)
                                                }}>{day.name}</Day>
                                        ))}
                                </Weekdays>
                                <Buttons>
                                        <Button type="cancel" onClick={() => {
                                                setAdd(false)
                                                setSelectedDays([])
                                        }
                                        }>Cancelar</Button>
                                        <Button type="save">Salvar</Button>
                                </Buttons>
                        </NewHabit>)}
                        {myHabits.length === 0 ? (
                                <Text>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Text>
                        ) : myHabits.map((habit) => (
                                <Habit key={habit.name}>
                                        <HabitName>{habit.name}</HabitName>
                                        <Weekdays>
                                                {days.map((day) => (
                                                        <Day key={day.id} selected={habit.days.includes(day.id) ? true : false}>{day.name}</Day>
                                                ))}
                                        </Weekdays>
                                        <Delete src={TrashCan} alt="Deletar"></Delete>
                                </Habit>
                        ))}
                </Main>
        );
}

export default Habits;