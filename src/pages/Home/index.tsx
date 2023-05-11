import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from "./styles";
import { Play } from "phosphor-react";
import { useForm } from "react-hook-form";

export const Home = () => {
  const { register, handleSubmit, watch } = useForm();

  const handleNewCycle = (data: any) => {
    console.log(data);
  };

  const task = watch("minutesAmount");
  const isSubmitDisabled = !task;

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleNewCycle)}>
        <FormContainer>
          <label htmlFor="taskInput">Vou trabalhar em</label>
          <TaskInput
            type="text"
            id="taskInput"
            placeholder="De um nome para o seu projeto"
            list="task-suggestions"
            {...register("task")}
          />

          <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
          </datalist>

          <label htmlFor="minutesAmountInput">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmountInput"
            step={5}
            min={0}
            max={60}
            {...register("minutesAmount", { valueAsNumber: true })}
          />
          <span>minutos</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton disabled={isSubmitDisabled} type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
};
