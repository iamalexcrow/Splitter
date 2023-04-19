import { ErrorMessage, Flex, Label } from "Common/regularComponents";
import React from "react";
import { Wrapper } from "./styled";

interface ILabelErrorWrapper {
  label?: string;
  error?: boolean;
  children: JSX.Element;
}

const LabelErrorWrapper = ({ label, error, children }: ILabelErrorWrapper) => {
  return (
    <Wrapper>
      {label && (
        <Flex jc="space-between">
          <Label name={label}>{label}</Label>
          {error && <ErrorMessage>Can't be zero</ErrorMessage>}
        </Flex>
      )}
      {children}
    </Wrapper>
  );
};

export default LabelErrorWrapper;
