import type { NextPage } from "next";
import { FormEvent, useState } from "react";
import styled from "@emotion/styled";

import { Input } from "../components/input";
import { Button } from "../components/button";

import { api } from "../services/axios";
import { useAuth } from "../hook/useAuth";
import Image from "next/image";

type InitialValue = {
  email: string;
};

const Home: NextPage = () => {
  const { signin } = useAuth();
  const initialValue = {} as InitialValue;

  const [values, setValues] = useState<InitialValue>(initialValue);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    api.post("/register", values).then((res) => {
      signin(res.data);
    });
  }

  function handleChanger(event: FormEvent<HTMLInputElement>) {
    const fieldName = event.currentTarget.name;
    const value = event.currentTarget.value;
    if (fieldName !== null) {
      setValues({
        ...values,
        [fieldName]: value,
      });
    }
  }

  return (
    <Container>
      <form method="post" onSubmit={handleSubmit}>
        <Input
          name="email"
          label="Email"
          type="email"
          value={values.email}
          onChange={handleChanger}
        />
        <Button label="Entra" type="submit" />
      </form>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 100vh;
  width: 100vw;
  > form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border: solid 1px;

    background-color: #ffffff;
    padding: 1rem;
    max-width: 550px;
    width: 350px;
    height: 250px;

    border-radius: 1rem;
  }
`;
