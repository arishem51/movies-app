import { Typography, TypographyProps } from "antd";
import styled from "styled-components";
import { COLORS } from "../../constant";

type TitleProps = TypographyProps["Title"]["defaultProps"];

const Title = (props: TitleProps) => {
  return (
    <Typography.Title
      {...props}
      style={{
        color: "var(--text-color)",
        marginBottom: "var(--margin-bottom,0)",
      }}
    />
  );
};

export const WhiteTitle = styled(Title)`
  --text-color: ${COLORS.white};
`;
