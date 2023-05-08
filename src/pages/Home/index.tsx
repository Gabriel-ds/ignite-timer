import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountdownButton, TaskInput } from "./styles";
import { Play } from "phosphor-react";

export const Home = () => {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="taskInput">Vou trabalhar em</label>
          <TaskInput type="text" id="taskInput" placeholder="De um nome para o seu projeto" />

          <label htmlFor="minutesAmountInput">durante</label>
          <MinutesAmountInput type="number" id="minutesAmountInput" />
          <span>minutos</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton disabled type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
};
