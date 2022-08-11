import { ActiveLink } from "./ActiveLink";
import styled from "@emotion/styled";
import Image from "next/image";
import { Profile } from "./ActiveLink/Profile/inidex";
import { Input } from "../input";

export function Header() {
  return (
    <HeaderContainer>
      <div className={"headerContext"}>
        <div className="logo">
          <Image src="/dog_logo.png" width={70} height={70} alt={"logo"} />
        </div>

        {/* <nav>
          <ActiveLink activeClassName={"active"} href="/dashboard">
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName={"active"} href="#">
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName={"active"} href="#">
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName={"active"} href="#">
            <a>Home</a>
          </ActiveLink>
        </nav> */}

        <div className="profile">
          <Input label="Pesquisar" />
          <Profile />
        </div>
      </div>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  .profile {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .logo {
    z-index: 50000;
    margin-right: 10%;
    @media (max-width: 520px) {
      display: none;
    }
  }

  .headerContext {
    max-width: 1520px;
    height: 5rem;
    margin: 0 auto;
    padding: 0 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

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
  }
`;
