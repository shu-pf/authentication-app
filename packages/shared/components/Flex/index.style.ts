import styled from "@emotion/styled";
import { FlexProps } from ".";

export const Flex = styled.div<FlexProps>(({ gap }) => ({
  display: "flex",
  gap,
}));
