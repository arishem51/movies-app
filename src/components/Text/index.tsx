import { Typography, TypographyProps } from "antd";
import styled from "styled-components";
import { COLORS } from "../../constant";

type TextProps = TypographyProps["Text"]["defaultProps"] & { size?: number };

const StyledText = styled(Typography.Text)<TextProps>`
  font-size: ${(props) => props.size && props.size + "px"};
  line-height: ${(props) => props.size && props.size + "px"};
  color: ${COLORS.white};
`;

const Text = (props: TextProps) => {
  return <StyledText {...props} />;
};

export default Text;
