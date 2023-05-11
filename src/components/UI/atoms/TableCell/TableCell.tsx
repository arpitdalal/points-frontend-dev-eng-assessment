import styled from "styled-components";

export interface CellProps extends React.ComponentPropsWithRef<"td"> {
  value: string;
  heading: boolean;
  color?: string;
  borderColor?: string;
  children?: never;
}

const StyledTd = styled.td<Pick<CellProps, "color" | "borderColor">>`
  padding: 0.5rem;
  text-align: center;
  color: ${({ color, theme }) => color || theme.colors.text};
  border: 1px solid
    ${({ borderColor, theme }) => borderColor || theme.colors.text};
`;

const StyledTh = styled.th<Pick<CellProps, "color" | "borderColor">>`
  padding: 0.5rem;
  text-align: center;
  color: ${({ color, theme }) => color || theme.colors.text};
  border: 1px solid black;
  border: 1px solid
    ${({ borderColor, theme }) => borderColor || theme.colors.text};
`;

export default function Cell({ value, heading, ...props }: CellProps) {
  switch (heading) {
    case true:
      return <StyledTh {...props}>{value}</StyledTh>;
    default:
      return <StyledTd {...props}>{value}</StyledTd>;
  }
}
