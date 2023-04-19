import React from "react";
import { IconContainer, Input, Wrapper } from "./styled";

interface IStyledInput {
  value: string;
  onChange: any;
  label?: string;
  svg?: React.ReactNode;
  maxLength?: number;
  error?: boolean;
  placeholder?: string;
}

const StyledInput = ({
  label,
  svg,
  maxLength,
  value,
  error,
  onChange,
  placeholder,
}: IStyledInput) => {
  return (
    <Wrapper>
      <Input
        placeholder={placeholder ? placeholder : "0"}
        name={label}
        maxLength={maxLength}
        value={value}
        error={error}
        onChange={onChange}
      />
      <IconContainer>{svg}</IconContainer>
    </Wrapper>
  );
};

export default StyledInput;
