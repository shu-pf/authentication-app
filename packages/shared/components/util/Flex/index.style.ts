import styled from "@emotion/styled";
import { FlexProps } from ".";

export const Flex = styled.div<FlexProps>(
  ({ gap, justifyContentCenter, alignItemsCenter }) => ({
    display: "flex",
    gap,
    justifyContent: justifyContentCenter ? "center" : undefined,
    alignItems: alignItemsCenter ? "center" : undefined,
  })
);
