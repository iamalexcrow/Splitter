import { ErrorMessage, Flex, Label } from "Common/regularComponents";
import React from "react";
import { Wrapper } from "./styled";

interface ILabelErrorWrapper {
  label?: string;
  error?: boolean;
  children: JSX.Element;
  maxLengthReached?: boolean;
}

const LabelErrorWrapper = ({
  label,
  error,
  children,
  maxLengthReached,
}: ILabelErrorWrapper) => {
  return (
    <Wrapper>
      {label && (
        <Flex jc="space-between">
          <Label name={label}>{label}</Label>
          {error && <ErrorMessage>Can't be zero</ErrorMessage>}
          {maxLengthReached && <ErrorMessage>Max length reached</ErrorMessage>}
        </Flex>
      )}
      {children}
    </Wrapper>
  );
};

export default LabelErrorWrapper;
