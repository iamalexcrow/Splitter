import React from "react";
import { Wrapper } from "./styled";
import OutputLine from "Components/OutputLine";
import { Button } from "Common/regularComponents";

interface IResultBlock {
  tipAmount: number;
  total: number;
  onReset: () => void;
  resetDisabled: boolean;
}

const ResultBlock = ({
  tipAmount,
  total,
  onReset,
  resetDisabled,
}: IResultBlock) => {
  return (
    <Wrapper>
      <div>
        <OutputLine title="Tip Amount" value={tipAmount} />
        <OutputLine title="Total" value={total} />
      </div>
      <Button
        reset
        onClick={resetDisabled ? () => {} : onReset}
        disabled={resetDisabled}
      >
        RESET
      </Button>
    </Wrapper>
  );
};

export default ResultBlock;
