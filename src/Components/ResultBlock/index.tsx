import React from "react";
import { Wrapper } from "./styled";
import OutputLine from "Components/OutputLine";
import { Button } from "Common/regularComponents";

interface IResultBlock {
  tipAmount: number;
  total: number;
  onReset: () => void;
  disabled: boolean;
}

const ResultBlock = ({ tipAmount, total, onReset, disabled }: IResultBlock) => {
  return (
    <Wrapper>
      <div>
        <OutputLine title="Tip Amount" value={tipAmount} />
        <OutputLine title="Total" value={total} />
      </div>
      <Button onClick={disabled ? () => {} : onReset} reset disabled={disabled}>
        RESET
      </Button>
    </Wrapper>
  );
};

export default ResultBlock;
