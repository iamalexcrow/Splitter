import React, { useEffect, useReducer, useState } from "react";
import { CalculatorWrapper, Title, Wrapper } from "./styled";
import InputBlock from "Components/InputBlock";
import ResultBlock from "Components/ResultBlock";
import { IInitialState } from "Common/interfaces";

function App() {
  const initialState: IInitialState = {
    bill: { value: "", error: false },
    tip: undefined,
    people: { value: "", error: false },
    tip_amount: undefined,
    total: undefined,
  };

  const reducer = (state: any, action: any) => {
    let newState: Partial<IInitialState> = {};
    if (action.type) {
      switch (action.type) {
        case "bill":
          newState.bill = { value: action.payload, error: false };
          break;
        case "bill_error":
          newState.bill = { value: state.bill.value, error: true };
          break;
        case "people":
          newState.people = { value: action.payload, error: false };
          break;
        case "people_error":
          newState.people = { value: state.people.value, error: true };
          break;
        case "tip":
          newState.tip = action.payload;
          break;
        case "reset":
          newState.tip = undefined;
          newState.bill = { value: "", error: false };
          newState.people = { value: "", error: false };
          break;
        default:
          throw new Error("oh no, reducer type is not found");
      }
    }
    return { ...state, ...newState };
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const [customTip, setCustomTip] = useState<string>("");

  const validateInputs = () => {
    if (!state.bill.value || !state.people.value) {
      if (!state.bill.value) {
        dispatch({ type: "bill_error" });
      }
      if (!state.people.value) {
        dispatch({ type: "people_error" });
      }
      return false;
    }
    return true;
  };

  const tipSelect = (value: number) => {
    if (validateInputs()) {
      setCustomTip("");
      dispatch({ type: "tip", payload: Number(value) });
    }
  };

  const onCustomInput = (value: string) => {
    if (validateInputs()) {
      setCustomTip(value);
    }
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      if (customTip) {
        dispatch({ type: "tip", payload: Number(customTip) });
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [customTip]);

  // useEffect(() => {
  //   console.log(state);
  // }, [state]);

  return (
    <Wrapper>
      <Title>Splitter</Title>
      <CalculatorWrapper>
        <InputBlock
          state={state}
          dispatch={dispatch}
          customTip={customTip}
          tipSelect={tipSelect}
          onCustomInput={onCustomInput}
        />
        <ResultBlock />
      </CalculatorWrapper>
    </Wrapper>
  );
}

export default App;
