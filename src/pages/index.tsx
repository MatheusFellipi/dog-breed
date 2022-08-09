import type { NextPage } from "next";
import { FormEvent } from "react";
import styled from "@emotion/styled";

import { Input } from "../components/input";
import { Button } from "../components/button";

const Home: NextPage = () => {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <Container>
      <form method="post" onSubmit={handleSubmit}>
        <Input label="Email" type="email" valeu="" onCharge={() => {}} />
        <Button label="Entra" type="submit"  />
      </form>
    </Container>
  );

};

export default Home;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100vw;
  > form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;


    background-color: #191d21;
    padding: 1rem;
    max-width: 550px;
    width: 450px;
    height: 250px;

    border-radius: 1rem;
  
  }
`;
