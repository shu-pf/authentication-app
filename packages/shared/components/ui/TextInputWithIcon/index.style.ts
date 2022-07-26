import styled from "@emotion/styled";
import { TextInputWithIconProps } from ".";

export const Container = styled.div({ position: "relative" });

export const Input = styled.input<Pick<TextInputWithIconProps, "width">>(
  ({ theme, width }) => ({
    border: `1px solid ${theme.colors.separateContents}`,
    padding: "13px 13px 13px 46px",
    borderRadius: "8px",
    width,
  })
);

export const IconWrapper = styled.div({
  position: "absolute",
  top: "12px",
  left: "12px",
});
