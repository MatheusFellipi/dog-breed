import type { NextPage } from "next";
import { Navbar } from "../components/navbar";
import { useFecth } from "../hook/useFetch";
import { parseCookies } from "nookies";
import styled from "@emotion/styled";
import { ImagePresentation } from "../components/ImagePresentation";
import { Input } from "../components/input";
import { useState } from "react";

const Dashboard: NextPage = () => {
  const { ["dogbreed:token"]: token } = parseCookies();
  const [fill, setFill] = useState("chihuahua");

  const { data } = useFecth("/list", {
    headers: {
      Authorization: token,
    },
  });

  return (
    <div>
      <Navbar></Navbar>

      <Filtros>
        <div>
          <Input label="Pesquisar" />
        </div>

        <ul>
          <li onClick={() => setFill("chihuahua")}>
            <p className={fill === "chihuahua" ? "active" : ""}>chihuahua</p>
          </li>
          <li onClick={() => setFill("husky")}>
            <p className={fill === "husky" ? "active" : ""}>husky</p>
          </li>
          <li onClick={() => setFill("labrador")}>
            <p className={fill === "labrador" ? "active" : ""}>labrador</p>
          </li>
          <li onClick={() => setFill("pug")}>
            <p className={fill === "pug" ? "active" : ""}>pug</p>
          </li>
        </ul>
      </Filtros>

      <ImagePresentation />
    </div>
  );
};

export default Dashboard;

const Filtros = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: 520px) {
    flex-direction: column;
  }

  /* @media (max-width: 760px) {
  } */

  > div {
    width: 30%;
    margin-bottom: 1.2rem;

    @media (max-width: 520px) {
      padding: 0 1rem;
      width: 100%;
    }
  }

  ul {
    @media (max-width: 520px) {
      width: 100%;
    }
    margin-bottom: 1.2rem;

    width: 30%;
    height: 3rem;

    display: flex;
    list-style: none;
    justify-content: center;
    align-items: center;
    li {
      display: flex;
      justify-content: center;
      text-align: center;
      color: #949494;
      width: 8rem;

      cursor: pointer;
      :hover {
        color: #222222;
      }
    }
    .active {
      color: #222222;
      padding-top: 0.4rem;
      background-color: #d4d4d4;
      border-radius: 1rem;
      width: 6rem;
      height: 2rem;
    }
  }
`;
