import React, { useEffect, useState } from "react";
import { Wrapper } from "./styled";
import StyledInput from "Atoms/Input";
import { IInitialState } from "Common/interfaces";
import { checkForNumbers } from "utils/helpers";
import DollarSvg from "assets/svgs/DollarSvg";
import PeopleSvg from "assets/svgs/PeopleSvg";
import ButtonsBlock from "Components/ButtonsBlock";
import LabelErrorWrapper from "Components/LabelErrorWrapper";

interface IInputBlock {
  state: IInitialState;
  dispatch: React.Dispatch<any>;
  customTip: string;
  tipSelect: (v: number) => void;
  onCustomInput: (s: string) => void;
}

const InputBlock = ({
  state,
  dispatch,
  customTip,
  tipSelect,
  onCustomInput,
}: IInputBlock) => {
  const onBillChange = (value: string) => {
    checkForNumbers(
      value,
      (value: string) => {
        dispatch({ type: "bill", payload: value });
      },
      true
    );
  };

  const onPeopleChange = (value: string) => {
    checkForNumbers(value, (value: string) => {
      dispatch({ type: "people", payload: value });
    });
  };

  return (
    <Wrapper>
      {/* BILL  */}
      <LabelErrorWrapper label="Bill" error={state.bill.error}>
        <StyledInput
          value={state.bill.value}
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
      <LabelErrorWrapper label="Number of People" error={state.people.error}>
        <StyledInput
          value={state.people.value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onPeopleChange(e.target.value)
          }
          error={state.people.error}
          svg={<PeopleSvg />}
          maxLength={3}
        />
      </LabelErrorWrapper>
    </Wrapper>
  );
};

export default InputBlock;
