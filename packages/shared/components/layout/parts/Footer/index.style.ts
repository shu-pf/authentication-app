import styled from "@emotion/styled";

export const Content = styled.div(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "12px",
}));

export const Regular = styled.span(({ theme }) => ({
  color: theme.colors.baseQuaternary,
  ...theme.typographies.footerRegular,
}));

export const Bold = styled.span(({ theme }) => ({
  color: theme.colors.baseQuaternary,
  textDecoration: "underline",
  ...theme.typographies.footerBold,
}));
