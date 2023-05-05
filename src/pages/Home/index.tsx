import { CountdownContainer, FormContainer, HomeContainer, Separator } from "./styles";

export const Home = () => {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <input type="text" id="task" />

          <label htmlFor="timer">durante</label>
          <input type="text" id="timer" />
          <span>minutos</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <button>Começar</button>
      </form>
    </HomeContainer>
  );
};
