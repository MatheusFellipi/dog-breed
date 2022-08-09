import styled from "@emotion/styled";
import { CardImg } from "./CardIImg";

export function ImagePresentation({}) {
  return (
    <Section>
      <div>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/64626/j-1.jpg" />
      </div>
      <div>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/64626/j-2.jpg" />
      </div>
      <div>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/64626/j-3.jpg" />
      </div>
      <div>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/64626/j-4.jpg" />
      </div>
      <div>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/64626/j-5.jpg" />
      </div>
      <div>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/64626/j-6.jpg" />
      </div>
      <div>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/64626/j-1.jpg" />
      </div>
      <div>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/64626/j-2.jpg" />
      </div>
      <div>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/64626/j-3.jpg" />
      </div>
      <div>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/64626/j-4.jpg" />
      </div>
      <div>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/64626/j-5.jpg" />
      </div>
      <div>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/64626/j-6.jpg" />
      </div>
    </Section>
  );
}
const Section = styled.section`
  max-width: 1780px;
  margin: 0 auto;
  column-count: 6;
  padding: 0.5rem;

  @media (max-width: 500px) {
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
