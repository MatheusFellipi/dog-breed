import styled from "@emotion/styled";

import { useState } from "react";
import LoadingSpinner from "../Loading";
import { Modal } from "../Modal";

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

  function handleOpenModal(link: string) {
    setSelectImg(link);
    setIsOpenModal(true);
  }

  function handleCloseModal() {
    setIsOpenModal(false);
    setSelectImg("");
  }

  return (
    <>
      {isFetching ? (
        <LoadingSpinner />
      ) : (
        <Section>
          {data?.list.map((item: string, index: number) => (
            <div key={index} onClick={() => handleOpenModal(item)}>
              <img src={item} alt={item} />
            </div>
          ))}
        </Section>
      )}

      <Modal
        selectImg={selectImg}
        isOpen={isOpenModal}
        inCloseModal={handleCloseModal}
      ></Modal>
    </>
  );
}

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
