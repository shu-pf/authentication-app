import styled from "@emotion/styled";

export const Title = styled.h1(({ theme }) => ({
  color: theme.colors.basePrimary,
  marginBottom: "14.5px",
  ...theme.typographies.h2,
}));

export const Body = styled.div(({ theme }) => ({
  color: theme.colors.basePrimary,
  ...theme.typographies.body,
}));

export const Caption = styled.div(({ theme }) => ({
  textAlign: "center",
  color: theme.colors.baseQuaternary,
  ...theme.typographies.caption,
}));

export const Link = styled.span(({ theme }) => ({
  color: theme.colors.baseLink,
  cursor: "pointer",
}));
