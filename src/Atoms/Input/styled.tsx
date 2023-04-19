import css from "Constants/css";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

interface IInput {
  error?: boolean;
}

export const Input = styled.input.attrs({
  type: "text",
})<IInput>`
  width: 100%;
  height: 48px;
  border: none;
  background-color: ${css.colors.input_background};
  border-radius: 4px;
  outline: none;
  padding-right: 16px;
  border: 2px solid ${css.colors.input_background};
  cursor: pointer;
  /* direction: rtl; */

  font-family: "Cousine", monospace;
  font-size: 24px;
  line-height: 24px;
  font-weight: 800;
  text-align: right;
  color: ${css.colors.dark_green};
  transition: 0.3s;

  &:hover {
    border-color: ${css.colors.green_border};
    transition: 0.3s;
  }
  ${(p: IInput) =>
    p.error &&
    `
    border-color: ${css.colors.error};
  `}
  @media(max-width: 600px) {
    font-size: 16px;
  }
`;

export const IconContainer = styled.div`
  position: absolute;
  left: 12px;
  bottom: 12px;
`;
