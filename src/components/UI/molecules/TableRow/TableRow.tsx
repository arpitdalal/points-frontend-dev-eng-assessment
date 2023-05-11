import styled from "styled-components";
import Cell from "../../atoms/TableCell";

export interface Row {
  value: string;
  heading: boolean;
}
export interface TableRowProps extends React.ComponentPropsWithRef<"tr"> {
  row: Array<Row>;
  padding?: string;
  backgroundColor?: string;
  borderColor?: string;
  color?: string;
  children?: never;
}

const StyedTr = styled.tr<Pick<TableRowProps, "padding" | "backgroundColor">>`
  padding: ${({ padding = "0.5rem" }) => padding};
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor || theme.colors.background};
`;

export default function TableRow({
  row,
  color,
  borderColor,
  ...props
}: TableRowProps) {
  return (
    <StyedTr {...props}>
      {row.map((cell, index) => (
        <Cell
          key={index}
          heading={cell.heading}
          color={color}
          borderColor={borderColor}
          value={cell.value}
        />
      ))}
    </StyedTr>
  );
}
