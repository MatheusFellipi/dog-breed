import styled from "@emotion/styled";
import Image from "next/future/image";

import { useEffect, useState } from "react";
import LoadingSpinner from "../Loading";

interface ModalProps {
  selectImg?: string;
  inCloseModal?: any;
  isOpen: boolean;
}
export function Modal({ isOpen, selectImg, inCloseModal }: ModalProps) {
  function handleClickImg() {
    inCloseModal();

    if (isOpen === true) {
      document.body.style.overflow = "visible";
    } else {
      document.body.style.overflow = "hidden";
    }
  }

  return (
    <ModalContainer isOpen={isOpen} onClick={handleClickImg}>
      <button onClick={() => inCloseModal}>X</button>
      <div className="modal_content">
        <img src={selectImg} />
      </div>
    </ModalContainer>
  );
}

const ModalContainer = styled.div<ModalProps>`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 50000;
  background-color: rgba(0, 0, 0, 0.8);
  button {
    background: transparent;
    border: none;
    color: #fff;
    font-size: 1.6rem;
    position: absolute;
    top: 2rem;
    right: 2rem;
  }
  .modal_content {
    width: 40%;
    img {
      width: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
`;
