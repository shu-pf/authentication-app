import styled from "@emotion/styled";

export const Input = styled.input(({ theme }) => ({
  border: `1px solid ${theme.colors.separateContents}`,
  padding: "13px 13px 13px 46px",
  borderRadius: "8px",
}));
