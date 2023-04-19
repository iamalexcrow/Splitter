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

export const CalculatorWrapper = styled.div`
  max-width: 900px;
  width: 100%;
  border-radius: 24px;
  background-color: ${css.colors.white};
  padding: 32px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 24px;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
`;

export const LogoContainer = styled.div`
  margin-bottom: 32px;
`;
