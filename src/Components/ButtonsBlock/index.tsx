import { Button } from "Common/regularComponents";
import React from "react";
import { ButtonsGrid } from "./styled";
import StyledInput from "Atoms/Input";

interface IButtonsBlock {
  tipSelect: (s: number) => void;
  onCustomInput: (s: string) => void;
  customTip: string;
  selectedTip: number | undefined;
}

const ButtonsBlock = ({
  tipSelect,
  onCustomInput,
  customTip,
  selectedTip,
}: IButtonsBlock) => {
  const buttonsData = [5, 10, 15, 25, 50];

  return (
    <ButtonsGrid>
      {buttonsData.map((b: number) => {
        return (
          <Button
            key={b}
            type="submit"
            onClick={() => tipSelect(b)}
            selected={selectedTip === b}
          >
            {b}%
          </Button>
        );
      })}
      <StyledInput
        value={customTip}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onCustomInput(e.target.value)
        }
        error={false}
        placeholder="Custom"
        maxLength={3}
      />
    </ButtonsGrid>
  );
};

export default ButtonsBlock;
