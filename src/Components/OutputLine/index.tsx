import React from "react";
import { Subtitle, Title, Value, Wrapper } from "./styled";
import { Flex } from "Common/regularComponents";
import AnimatedNumber from "animated-number-react";

interface IOutputLine {
  title: string;
  value: number;
}

const OutputLine = ({ title, value }: IOutputLine) => {
  let formatValue = (value: number) => value.toFixed(2);
  return (
    <Wrapper>
      <Flex fd="column">
        <Title>{title}</Title>
        <Subtitle>/ person</Subtitle>
      </Flex>
      <Value>
        $
        <AnimatedNumber
          value={value ? value : "0.00"}
          formatValue={formatValue}
          duration="500"
        />
      </Value>
    </Wrapper>
  );
};

export default OutputLine;
