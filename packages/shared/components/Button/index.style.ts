import styled from "@emotion/styled";

export const Button = styled.button(({ theme }) => ({
  color: theme.colors.baseWhite,
  backgroundColor: theme.colors.mainPrimary,
  padding: "7px",
  borderRadius: "8px",
}));
