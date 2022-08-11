import type { NextPage } from "next";
import { FormEvent, useState } from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import Lottie from "lottie-react";
import { Input } from "../components/input";
import { Button } from "../components/button";
import { api } from "../services/axios";
import { useAuth } from "../hook/useAuth";
import dogAnimation from "../../my-dog-and-me.json";

type InitialValue = {
  email: string;
};

const Home: NextPage = () => {
  const { signin } = useAuth();
  const initialValue = {} as InitialValue;

  const [animationState, setAnimationState] = useState({
    isStopped: false,
    isPaused: false,
  });

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
      <section>
        <div className="hero_container">
          <Lottie className="hero" animationData={dogAnimation} />
        </div>

        <form method="post" onSubmit={handleSubmit}>
          <div className="form_container">
            <fieldset>
              <span>Entra com o email</span>
              <Input
                name="email"
                label="Email"
                type="email"
                value={values.email}
                onChange={handleChanger}
              />
            </fieldset>
            <Button label="Entra" type="submit" />
            <span>nao possui conta? cadastre</span>
          </div>

          <footer>
            <a
              href="https://github.com/MatheusFellipi"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
                alt=""
                width={"95.5px"}
                height={"28px"}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/matheusfellipiribeiro/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                width={"111px"}
                height={"28px"}
                src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"
                alt=""
              />
            </a>
          </footer>
        </form>
      </section>
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

  section {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-radius: 1rem;
    width: 60%;
    height: 70%;
    box-shadow: 0px -1px 20px 1px rgba(0, 0, 0, 0.486);

    .hero_container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 90%;
      .hero {
        border-radius: 1rem;
        width: 70%;
      }
      @media (max-width: 1080px) {
        display: none;
        width: 0%;
      }
    }

    > form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      position: relative;
      background-color: #eeeeee;
      padding: 1rem;
      width: 50%;
      height: 100%;
      border-radius: 0 1rem 1rem 0;
      .form_container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
        height: 60%;
        span {
          margin: 0.5rem 0;
          width: 100%;
          font-size: 12px;
          text-align: start;
        }
        fieldset {
          margin-bottom: 5rem;
          border: none;
          width: 100%;
        }
      }
      footer {
        position: absolute;
        bottom: 5px;
        left: 0;
        right: 0;
        display: flex;
        justify-content: space-around;
      }

      @media (max-width: 1080px) {
        width: 100%;
      }
    }
  }
`;
