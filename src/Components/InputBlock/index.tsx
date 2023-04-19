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
  const [tempBill, setTempBill] = useState<string>("");
  const [tempPeople, setTempPeople] = useState<string>("");

  const onBillChange = (value: string) => {
    checkForNumbers(value, (value: string) => setTempBill(value), true);
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      dispatch({ type: "bill", payload: tempBill });
    }, 600);
    return () => clearTimeout(timer);
  }, [tempBill]);

  const onPeopleChange = (value: string) => {
    checkForNumbers(value, (value: string) => setTempPeople(value));
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      dispatch({ type: "people", payload: tempPeople });
    }, 600);
    return () => clearTimeout(timer);
  }, [tempPeople]);

  return (
    <Wrapper>
      {/* BILL  */}
      <LabelErrorWrapper label="Bill" error={state.bill.error}>
        <StyledInput
          label="Bill"
          value={tempBill}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onBillChange(e.target.value)
          }
          error={state.bill.error}
          svg={<DollarSvg />}
          maxLength={8}
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
          label="Number of People"
          value={tempPeople}
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
