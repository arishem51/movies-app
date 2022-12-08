import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import styled from "styled-components";
import { COLORS } from "../../constant";

const ProgressText = styled.span`
  --font-size: 12px;
  display: flex;
  color: white;
  font-weight: bold;
  font-size: var(--font-size);
  line-height: var(--font-size);
  span {
    font-size: calc(var(--font-size) / 2);
    line-height: calc(var(--font-size) / 2);
  }
`;

type Props = {
  value: number;
};

const CircleProgessBar = ({ value }: Props) => {
  return (
    <CircularProgressbarWithChildren
      value={value}
      background
      backgroundPadding={6}
      styles={buildStyles({
        backgroundColor: COLORS.black,
        pathColor: COLORS.green,
        trailColor: COLORS.darkGreen,
        strokeLinecap: "round",
      })}
    >
      <ProgressText>
        {value}
        <span>%</span>
      </ProgressText>
    </CircularProgressbarWithChildren>
  );
};

export default CircleProgessBar;
