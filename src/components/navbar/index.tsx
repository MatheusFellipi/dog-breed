import { ActiveLink } from "./ActiveLink";
import styled from "@emotion/styled";
import Image from "next/image";

export function Navbar() {
  return (
    <Header>
      <div className={"headerContext"}>
        <div className="logo">
          <Image src={"/dog-logo.jpg"} width={70} height={70} alt={"logo"} />
        </div>
        
        <nav>
          <ActiveLink activeClassName={"active"} href="/dashboard">
            <a>Home</a>
          </ActiveLink>
        </nav>

        <div>
          perfil 
          abrir um menu
          <ul>
            <li>Favoritos</li>
            <li>Config</li>
            <li>Sair</li>
          </ul>
        </div>
      </div>
    </Header>
  );
}

const Header = styled.header`
  height: 5rem;

  .logo {
    z-index: 50000;
    margin-right: 10%;
  }

  .headerContext {
    max-width: 1220px;
    height: 5rem;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    align-items: center;

    &::after {
      top: 59px;
      content: " ";
      height: 2px;
      border-radius: 3px 3px 0 0;
      width: 100%;
      position: absolute;
      bottom: 1px;
      left: 0;
      background-color: #603435;

      @media (min-width: 1440px) {
        top: 61px;
      }
      @media (max-width: 768px) {
        top: 61px;
      }
      @media (max-width: 560px) {
        top: 57px;
      }
    }

    nav {
      margin-left: 4rem;
      height: 5rem;
      a {
        display: inline-block;
        position: relative;
        padding: 0 0.5rem;
        height: 5rem;
        line-height: 5rem;
        color: #707070;
        transition: color 0.2s;
        & + a {
          margin-left: 2rem;
        }
        &:hover {
          color: #3a3a3a;
          font-weight: bold;
        }
        /* &.active::after {
          content: " ";
          z-index: 50000;
          top: 56px;
          height: 2px;
          border-radius: 3px 3px 0 0;
          width: 100%;
          position: absolute;
          bottom: 1px;
          left: 0;
          background-color: #00caee;
        } */
      }
    }
    button {
      margin-left: auto;
    }
  }
`;
