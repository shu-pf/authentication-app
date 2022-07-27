import styled from "@emotion/styled";

export const Title = styled.h1(({ theme }) => ({
  color: theme.colors.basePrimary,
  ...theme.typographies.h2,
}));
