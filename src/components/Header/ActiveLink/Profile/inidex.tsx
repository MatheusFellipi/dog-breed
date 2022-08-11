import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useAuth } from "../../../../hook/useAuth";
import { useStorage } from "../../../../hook/useStorage";

export function Profile() {
  const { signout } = useAuth();
  const { getItem } = useStorage();
  const [user] = useState(() => {
    const sessionStorage = getItem("dogbreed:user", "session");
    let str;

    if (sessionStorage) {
      str = JSON.parse(sessionStorage);
    }
    return str;
  });

  return (
    <Dropdown className="dropdown">
      <button className="dropbtn">
        <img src="https://i.pinimg.com/564x/be/b9/ac/beb9aca758ed0e6e292b22ce1c21d3cf.jpg" />
        <p>{user?.user?.email}</p>
      </button>
      <div className="dropdown-content">
        <a href="#">Favoritos</a>
        <a href="#">Configuração</a>
        <a href="#" onClick={signout}>
          Sair
        </a>
      </div>
    </Dropdown>
  );
}
const Dropdown = styled.div`
  position: relative;
  display: inline-block;

  :hover .dropdown-content {
    display: block;
  }

  .dropbtn {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: transparent;
    border: none;
    width: 190px;

    p {
      margin-top: -1rem;
    }
    img {
      width: 40px;
      height: 40px;
      border-radius: 50px;
    }
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    :hover {
      background-color: #ddd;
    }
  }
`;
