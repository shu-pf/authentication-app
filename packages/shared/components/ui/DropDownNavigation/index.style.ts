import styled from "@emotion/styled";

export const Content = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "11px",
}));

export const UserName = styled.div(({ theme }) => ({
  fontWeight: 700,
  fontSize: "12px",
  lineHeight: "16.34px",
  letterSpacing: "-3.5%",
}));
