import styled from "@emotion/styled";

export const Container = styled.div(({ theme }) => ({
  width: "474px",
  padding: "50px 60px",
  border: `1px solid ${theme.colors.separateContents}`,
  borderRadius: "24px",
}));

export const Title = styled.h1(({ theme }) => ({
  color: theme.colors.basePrimary,
  marginBottom: "14.5px",
  ...theme.typographies.h2,
}));

export const Body = styled.div(({ theme }) => ({
  color: theme.colors.basePrimary,
  marginBottom: "34.5px",
  ...theme.typographies.body,
}));
