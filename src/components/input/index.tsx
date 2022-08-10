import styled from "@emotion/styled";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Input({
  value,
  onChange,
  label,
  type,
  name,
  ...rest
}: InputProps) {
  if (type === undefined) {
    type = "text";
  }

  return (
    <Label className="form-group">
      <input
        type={type}
        className="form-control rounded-left"
        placeholder={label}
        value={value}
        name={name}
        onChange={onChange}
        {...rest}
      />
    </Label>
  );
}

const Label = styled.div`
  .form-control {
    height: 48px;
    background: rgba(0, 0, 0, 0.05);
    font-size: 16px;
    box-shadow: none;
    border: 1px solid transparent;
    padding-left: 20px;
    padding-right: 20px;
    width: 100%;
    &::-webkit-input-placeholder {
      color: rgba(0, 0, 0, 0.2);
    }
    &::-moz-placeholder {
      color: rgba(0, 0, 0, 0.2);
    }
    &:-ms-input-placeholder {
      color: rgba(0, 0, 0, 0.2);
    }
    &:-moz-placeholder {
      color: rgba(0, 0, 0, 0.2);
    }
    &:focus,
    &:active {
      outline: none;
      box-shadow: none;
      background: rgba(0, 0, 0, 0.07);
      border-color: transparent;
    }
  }

  .rounded-left {
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }

  .form-group {
    position: relative;
    .submit {
      position: absolute;
      top: 20px;
      left: 0;
      right: 0;
      margin: 0 auto;
      @include media-breakpoint-down(sm) {
        top: 0;
      }
    }
  }
`;
