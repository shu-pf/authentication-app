import styled from "@emotion/styled";

export const Button = styled.button(({ theme }) => ({
  color: theme.colors.baseLink,
  textDecoration: "none",
  position: "relative",
}));

export const IconWrapper = styled.div({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  height: "18px",
});

export const Label = styled.div({
  marginLeft: "26px",
  fontWeight: 400,
  fontSize: "18px",
  lineHeight: "25px",
  letterSpacing: "-0.035em",
});
