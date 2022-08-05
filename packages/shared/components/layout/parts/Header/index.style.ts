import styled from "@emotion/styled";

export const Content = styled.div({
  display: "flex",
  justifyContent: "space-between",
  padding: "12px 72px",
});

export const Regular = styled.span(({ theme }) => ({
  color: theme.colors.baseQuaternary,
  ...theme.typographies.footerRegular,
}));

export const Bold = styled.span(({ theme }) => ({
  color: theme.colors.baseQuaternary,
  textDecoration: "underline",
  ...theme.typographies.footerBold,
}));
