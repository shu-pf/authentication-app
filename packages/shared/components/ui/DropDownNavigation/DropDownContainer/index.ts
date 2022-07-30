import styled from "@emotion/styled";

export const DropDownContainer = styled.div(({ theme }) => ({
  position: "absolute",
  right: "0",
  top: "40px",
  backgroundColor: theme.colors.bgPrimary,
  border: `1px solid ${theme.colors.separateContents}`,
  padding: "14px 11px",
  borderRadius: "12px",
  boxShadow: `0px 2px 4px ${theme.colors.overlayShadow}`,
}));
