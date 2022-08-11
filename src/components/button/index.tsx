import styled from "@emotion/styled";
import { InputHTMLAttributes } from "react";

interface ButtonsProps extends InputHTMLAttributes<HTMLButtonElement> {
  type: "button" | "submit" | "reset" | undefined;
  label: string;
}

export function Button({ onClick, label, type }: ButtonsProps) {
  return (
    <Container>
      <button type={type} onClick={onClick}>
        {label}
      </button>
    </Container>
  );
}
const Container = styled.div`
  button {
    font-size: 1.5rem;
    background-color: #a7a7a7;
    color: #fff;
    border: none;
    border-radius: 10px;
    transition: 0.7s;
    width: 6rem;
    height: 3rem;
    :hover {
      background-color: #11998e;
    }
  }
`;
