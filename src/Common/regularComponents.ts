import css from "Constants/css";
import styled from "styled-components";

interface IFlex {
  fd?: string;
  jc?: string;
  ai?: string;
}

export const Flex = styled.div<IFlex>`
  display: flex;
  ${(p: IFlex) =>
    p.fd &&
    `
    flex-direction: ${p.fd}
  `}
  ${(p: IFlex) =>
    p.jc &&
    `
    justify-content: ${p.jc}
  `}
  ${(p: IFlex) =>
    p.ai &&
    `
    align-items: ${p.ai}
  `}
`;

export const Text = styled.p`
  margin: 0;
  font-family: "Cousine", monospace;
  font-size: 14px;
  line-height: 24px;
  font-weight: 600;
  text-align: left;
`;

export const Label = styled(Text)`
  color: ${css.colors.label};
  margin-bottom: 4px;
`;

export const ErrorMessage = styled(Text)`
  color: ${css.colors.error};
`;

interface IButton {
  selected?: boolean;
  reset?: boolean;
  disabled?: boolean;
}

export const Button = styled.button<IButton>`
  height: 48px;
  border: none;
  border-radius: 6px;
  background-color: ${css.colors.dark_green};
  color: ${css.colors.white};
  font-family: "Cousine", monospace;
  font-size: 24px;
  line-height: 24px;
  font-weight: 800;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${css.colors.green_hover};
    color: ${css.colors.dark_green};
    transition: 0.3s;
  }
  ${(p: IButton) =>
    p.selected &&
    `
    background-color: ${css.colors.light_green};
    color: ${css.colors.dark_green}
  `}
  ${(p: IButton) =>
    p.reset &&
    `
    width: 100%;
    background-color: ${css.colors.light_green};
    color: ${css.colors.dark_green}
  `}
   ${(p: IButton) =>
    p.disabled &&
    `
    width: 100%;
    background-color: ${css.colors.darker_green};
    color: ${css.colors.dark_green};
    cursor:auto;

    &:hover {
    background-color: ${css.colors.darker_green};
    color: ${css.colors.dark_green};
    cursor:auto;
      transition: 0.3s;
    }
  `}
@media(max-width: 600px) {
    font-size: 16px;
  }
`;
