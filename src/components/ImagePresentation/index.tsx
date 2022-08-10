import styled from "@emotion/styled";
import Image from "next/future/image";

import { useState } from "react";
import LoadingSpinner from "../Loading";

type ImagePresentationProps = {
  data: any;
  isFetching: boolean;
};

export function ImagePresentation({
  data,
  isFetching,
}: ImagePresentationProps) {
  const [selectImg, setSelectImg] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);

  function handleClockImg(link: string) {
    setSelectImg(link);
    setIsOpenModal(!isOpenModal);
    if (isOpenModal === true) {
      document.body.style.overflow = "visible";
    } else {
      document.body.style.overflow = "hidden";
    }
  }

  return (
    <>
      {isFetching ? (
        <LoadingSpinner />
      ) : (
        <Section>
          {data?.list.map((item: string, index: number) => (
            <div key={index} onClick={() => handleClockImg(item)}>
              <img src={item} alt={item} />
            </div>
          ))}
        </Section>
      )}

      <Modal isOpen={isOpenModal} onClick={() => handleClockImg("")}>
        <button onClick={() => setIsOpenModal(false)}>X</button>
        <div className="modal_content">
          <img src={selectImg} />
        </div>
      </Modal>
    </>
  );
}

interface ModalProps {
  isOpen: boolean;
}

const Modal = styled.div<ModalProps>`
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

const Section = styled.section`
  max-width: 1780px;
  margin: 0 auto;
  column-count: 6;
  padding: 0.5rem;

  @media (max-width: 320px) {
    column-count: 2;
  }
  @media (max-width: 760px) {
    column-count: 3;
  }

  div img {
    display: block;
    max-width: 100%;
  }

  div {
    background: white;
    margin-bottom: 20px;
    border-radius: 4px;
    box-shadow: 0 2px 6px rgba(50, 50, 90, 0.1);
    break-inside: avoid-column;
    overflow: hidden;
  }

  div p {
    padding: 10px;
    font-family: sans-serif;
    color: #6b7c93;
    font-size: 0.875em;
    line-height: 1.4em;
  }
`;
