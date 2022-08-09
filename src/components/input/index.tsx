import styled from "@emotion/styled";

type InputProps = {
  type: "text" | undefined;
  label: string;
  valeu: string;
  onCharge: () => void;
};

export function Input({ valeu, onCharge, label, type }: InputProps) {
  if (type === undefined) {
    type = "text";
  }

  return (
    <Label className="form__group field">
      <input
        type={type}
        className="form__field"
        placeholder={label}
        name={label}
        id={label}
        value={valeu}
        onChange={onCharge}
      />
      <label htmlFor={label} className="form__label">
        {label}
      </label>
    </Label>
  );
}

const Label = styled.fieldset`
  border: none;
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 100%;

  .form__field {
    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 2px solid #9b9b9b;
    outline: 0;
    font-size: 1.3rem;
    color: #fff;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;

    &::placeholder {
      color: transparent;
    }

    &:placeholder-shown ~ .form__label {
      font-size: 1.3rem;
      cursor: text;
      top: 20px;
    }
  }

  .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: #9b9b9b;
  }

  .form__field:focus {
    ~ .form__label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: #11998e;
      font-weight: 700;
    }
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, #11998e, #38ef7d);
    border-image-slice: 1;
  }
  /* reset input */
  .form__field {
    &:required,
    &:invalid {
      box-shadow: none;
    }
  }
  /* demo */
  body {
    font-family: "Poppins", sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    font-size: 1.5rem;
    background-color: #222222;
  }
`;
