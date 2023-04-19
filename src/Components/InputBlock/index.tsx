import React from "react";
import { Wrapper } from "./styled";
import StyledInput from "Atoms/Input";
import { IInitialState } from "Common/interfaces";

import DollarSvg from "assets/svgs/DollarSvg";
import PeopleSvg from "assets/svgs/PeopleSvg";
import ButtonsBlock from "Components/ButtonsBlock";
import LabelErrorWrapper from "Components/LabelErrorWrapper";

interface IInputBlock {
  state: IInitialState;
  customTip: string;
  tipSelect: (v: number) => void;
  onCustomInput: (s: string) => void;
  maxLengthBill: boolean;
  tempBill: string;
  onBillChange: (s: string) => void;
  maxLengthPeople: boolean;
  onPeopleChange: (s: string) => void;
  tempPeople: string;
}

const InputBlock = ({
  state,
  customTip,
  tipSelect,
  onCustomInput,
  maxLengthBill,
  tempBill,
  onBillChange,
  maxLengthPeople,
  onPeopleChange,
  tempPeople,
}: IInputBlock) => {
  return (
    <Wrapper>
      {/* BILL  */}
      <LabelErrorWrapper
        label="Bill"
        error={state.bill.error}
        maxLengthReached={maxLengthBill}
      >
        <StyledInput
          label="Bill"
          value={tempBill}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onBillChange(e.target.value)
          }
          error={state.bill.error}
          svg={<DollarSvg />}
        />
      </LabelErrorWrapper>
      {/* SELECT TIP BLOCK */}
      <LabelErrorWrapper label="Select Tip %">
        <ButtonsBlock
          tipSelect={tipSelect}
          onCustomInput={onCustomInput}
          customTip={customTip}
          selectedTip={state.tip}
        />
      </LabelErrorWrapper>
      {/* NUMBER OF PEOPLE */}
      <LabelErrorWrapper
        label="Number of People"
        error={state.people.error}
        maxLengthReached={maxLengthPeople}
      >
        <StyledInput
          label="Number of People"
          value={tempPeople}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onPeopleChange(e.target.value)
          }
          error={state.people.error}
          svg={<PeopleSvg />}
        />
      </LabelErrorWrapper>
    </Wrapper>
  );
};

export default InputBlock;
