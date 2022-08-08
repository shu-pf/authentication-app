import styled from "@emotion/styled";
import { TextInput } from ".";

export const Input = styled.input<Pick<TextInput, "width">>(
  ({ width = "417px" }) => ({
    borderRadius: "12px",
    border: "1px solid #828282",
    padding: "17px 18px",
    fontWeight: 500,
    fontSize: "13px",
    lineHeight: "18px",
    letterSpacing: "-0.035em",
    marginTop: "4px",
    width,
    "::placeholder": {
      color: "#BDBDBD",
    },
  })
);

export const Label = styled.label({
  color: "#4F4F4F",
});
