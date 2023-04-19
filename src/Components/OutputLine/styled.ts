import { Flex, Text } from "Common/regularComponents";
import css from "Constants/css";
import styled from "styled-components";

export const Wrapper = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;

export const Title = styled(Text)`
  font-size: 14px;
  color: ${css.colors.white};
  font-weight: 700;
`;

export const Subtitle = styled(Text)`
  color: ${css.colors.light_green};
`;

export const Value = styled(Text)`
  color: ${css.colors.light_green};
  font-size: 48px;
`;
