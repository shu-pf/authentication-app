import styled from "@emotion/styled";
import { DropDownItemProps } from ".";

export const Container = styled.a<Pick<DropDownItemProps, "isActive">>(
  ({ theme, isActive }) => ({
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    backgroundColor: isActive ? theme.colors.bgActive : theme.colors.bgPrimary,
    borderRadius: "8px",
    padding: "13px 11px",
    width: "164.12px",
  })
);

export const Label = styled.div(({ theme }) => ({
  marginLeft: "10px",
  color: "#4F4F4F",
  fontWeight: 500,
  fontSize: "12px",
  lineHeight: "16.34px",
  letterSpacing: "-3.5%",
}));
