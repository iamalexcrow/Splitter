import React, { useEffect, useReducer, useState } from "react";
import { CalculatorWrapper, Title, Wrapper } from "./styled";
import InputBlock from "Components/InputBlock";
import ResultBlock from "Components/ResultBlock";
import { IInitialState } from "Common/interfaces";
import ringer from "assets/sounds/jingle.mp3";
import ringer2 from "assets/sounds/holy-shit.mp3";

function App() {
  const audio = new Audio(ringer);
  const extremeAudio = new Audio(ringer2);
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
        case "tip_amount":
          newState.tip_amount = action.payload;
          break;
        case "total":
          newState.total = action.payload;
          break;
        case "remove_results":
          newState.total = undefined;
          newState.tip_amount = undefined;
          break;
        case "reset":
          newState.tip = undefined;
          newState.bill = { value: "", error: false };
          newState.people = { value: "", error: false };
          newState.total = undefined;
          newState.tip_amount = undefined;
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

  // DELAY ON CUSTOM INPUT
  useEffect(() => {
    let timer = setTimeout(() => {
      if (customTip) {
        dispatch({ type: "tip", payload: Number(customTip) });
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [customTip]);

  // CALCULATE THE RESLUTS
  useEffect(() => {
    if (state.tip && state.bill.value && state.people.value) {
      let tip =
        ((Number(state.bill.value) / Number(state.people.value)) * state.tip) /
        100;
      let total = Number(state.bill.value) / Number(state.people.value) + tip;
      dispatch({ type: "tip_amount", payload: tip.toFixed(2) });
      dispatch({ type: "total", payload: total.toFixed(2) });
      if (state.tip >= 50) {
        extremeAudio.play();
      } else {
        audio.play();
      }
    }
  }, [state.tip, state.bill.value, state.people.value]);

  // ERASE RESULTS IF ANY OF THE INPUTS GET EMPTY
  useEffect(() => {
    if (!state.bill.value || !state.people.value) {
      dispatch({ type: "tip", payload: undefined });
      dispatch({ type: "remove_results" });
    }
  }, [state.bill.value, state.people.value]);

  const onReset = () => {
    dispatch({ type: "reset" });
  };

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
        <ResultBlock
          tipAmount={state.tip_amount}
          total={state.total}
          onReset={onReset}
          resetDisabled={!state.tip_amount && !state.total}
        />
      </CalculatorWrapper>
    </Wrapper>
  );
}

export default App;
