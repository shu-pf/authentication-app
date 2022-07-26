import styled from "@emotion/styled";

export const Container = styled.div({
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
});

export const Content = styled.div({
  width: "474px",
});

export const Main = styled.div(({ theme }) => ({
  padding: "50px 60px",
  border: `1px solid ${theme.colors.separateContents}`,
  borderRadius: "24px",
}));
