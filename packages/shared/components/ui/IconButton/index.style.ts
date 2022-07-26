import styled from "@emotion/styled";

export const Button = styled.button(({ theme }) => ({
  position: "relative",
  width: "42px",
  height: "42px",
  border: `1px solid ${theme.colors.baseQuaternary}`,
  borderRadius: "50%",
  ":active": {
    opacity: "0.8",
  },
}));

export const IconWrapper = styled.div(() => ({
  width: "18px",
  height: "18px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translateX(-50%) translateY(-50%)",
}));
