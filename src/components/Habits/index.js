import { useState, useEffect } from "react";
import TrashCan from "../../assets/TrashCan.png"
import { Main, Container, Title, AddButton, Text, NewHabit, HabitInput, Weekdays, Day, Button, Buttons, Habit, HabitName, Delete } from "./style"
import { useContext } from "react";
import UserContext from "../../Context/UserContext";
import Loader from "react-loader-spinner"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import axios from "axios";

function Habits() {
        const days = [{ name: `D`, id: 0 }, { name: `S`, id: 1 }, { name: `T`, id: 2 }, { name: `Q`, id: 3 }, { name: `Q`, id: 4 }, { name: `S`, id: 5 }, { name: `S`, id: 6 }];
        const [add, setAdd] = useState(false);
        const [selectedDays, setSelectedDays] = useState();
        const [habits, setHabits] = useState();
        const [loading, setLoading] = useState(false);
        const [habitName, setHabitName] = useState(``);
        const { token } = useContext(UserContext);

        useEffect(() => {
                loadHabits();
        }, []);

        function loadHabits() {
                const promise = axios.get(
                        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`,
                        { headers: { Authorization: `Bearer ${token}` } }
                );

                promise.then((answer) => {
                        setHabits(answer.data);
                });
        }

        function selectDay(id) {
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
                                <HabitInput type="text" placeholder='nome do hábito' disabled={loading}
                                        onChange={e => {
                                                setHabitName(e.target.value)
                                        }}
                                        value={habitName}></HabitInput>
                                <Weekdays>
                                        {days.map((day) => (
                                                <Day key={day.id} selected={selectedDays.includes(day.id) ? true : false} disabled={loading} onClick={() => {
                                                        selectDay(day.id)
                                                }}>{day.name}</Day>
                                        ))}
                                </Weekdays>
                                <Buttons>
                                        <Button type="cancel" onClick={() => {
                                                setAdd(false)

                                        }
                                        }>Cancelar</Button>
                                        <Button type="save" disabled={loading} onClick={() => {
                                                setLoading(true);
                                                const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`,
                                                        {
                                                                name: `${habitName}`,
                                                                days: selectedDays
                                                        },
                                                        { headers: { Authorization: `Bearer ${token}` } });
                                                promise.then((answer) => {
                                                        setHabitName(``);
                                                        setSelectedDays([]);
                                                        setLoading(false);
                                                        loadHabits();
                                                        setAdd(false);
                                                });
                                                promise.catch(() => {
                                                        alert(`Verifique os dados e tente novamente`)
                                                        setLoading(false);
                                                });
                                        }}>
                                                {loading ? <Loader type="ThreeDots" color="#FFFFFF" height={60} width={60} /> : `Salvar`}</Button>
                                </Buttons>
                        </NewHabit>)}
                        {habits.length === 0 ? (
                                <Text>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Text>
                        ) : habits.map((habit) => (
                                <Habit key={habit.id}>
                                        <HabitName>{habit.name}</HabitName>
                                        <Weekdays>
                                                {days.map((day) => (
                                                        <Day key={day.id} selected={habit.days.includes(day.id) ? true : false}>{day.name}</Day>
                                                ))}
                                        </Weekdays>
                                        <Delete src={TrashCan} alt="Deletar" onClick={() => {
                                                const promisse = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}`,
                                                        { headers: { Authorization: `Bearer ${token}` } })
                                                promisse.then(() => loadHabits());
                                        }}></Delete>
                                </Habit>
                        ))}
                </Main>
        );
}

export default Habits;