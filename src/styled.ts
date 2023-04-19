import { Flex } from "Common/regularComponents";
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
  @media (max-width: 900px) {
    display: grid;
    grid-template-rows: 1fr auto;
  }
`;

export const CalculatorWrapper = styled.div`
  max-width: 900px;
  width: 100%;
  border-radius: 24px;
  background-color: ${css.colors.white};
  padding: 32px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  @media (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    padding: 24px;
  }
`;

export const LogoContainer = styled(Flex)`
  margin: 32px 0px;
  align-items: center;
  justify-content: center;
`;
