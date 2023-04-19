import css from "Constants/css";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${css.colors.app_background};
`;

export const Title = styled.h1`
  margin: 0px;
  text-transform: uppercase;
  font-family: "Chivo Mono", monospace;
`;

export const CalculatorWrapper = styled.div`
  max-width: 900px;
  width: 100%;
  border-radius: 24px;
  background-color: ${css.colors.white};
  padding: 32px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 24px;
`;

//font-family: 'Chivo Mono', monospace;
//font-family: 'Cousine', monospace;
