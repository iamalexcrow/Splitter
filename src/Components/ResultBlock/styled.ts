import { Flex } from "Common/regularComponents";
import css from "Constants/css";
import styled from "styled-components";

export const Wrapper = styled(Flex)`
  flex-direction: column;
  justify-content: space-between;
  border-radius: 24px;
  background-color: ${css.colors.dark_green};
  padding: 40px 40px;
`;
