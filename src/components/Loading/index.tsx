import styled from "@emotion/styled";
import React from "react";

export default function LoadingSpinner() {
  return (
    <Container className="spinner-container">
      <div className="loading-spinner"></div>
    </Container>
  );
}

const Container = styled.div`

  display: grid;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.89);
  z-index: 50000;

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .loading-spinner {
    width: 50px;
    height: 50px;
    border: 10px solid #f3f3f3; /* Light grey */
    border-top: 10px solid #383636; /* Blue */
    border-radius: 50%;
    animation: spinner 1.5s linear infinite;
  }
`;
