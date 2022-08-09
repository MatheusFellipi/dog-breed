import styled from "@emotion/styled";

type InputProps = {
  type: "button" | "submit" | "reset" | undefined;
  label: string;
  onClick?: () => void;
};

export function Button({ onClick, label, type }: InputProps) {
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
    padding: 15px;
    min-height: 30px;
    min-width: 150px;
    transition: 0.7s;
    :hover {
      background-color: #11998e;
    }
  }
`;
