import styled from "styled-components";
import TableRow, { type Row } from "../../molecules/TableRow";

export type TableData = Array<Array<Row>>;
export interface TableProps extends React.ComponentPropsWithRef<"table"> {
  data: TableData;
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
  applyBorder?: boolean;
  width?: string;
  maxWidth?: string;
  margin?: string;
}

const StyledTable = styled.table<
  Pick<TableProps, "applyBorder" | "margin" | "width" | "maxWidth">
>`
  border-collapse: ${({ applyBorder }) => (applyBorder ? "collapse" : "none")};
  width: ${({ width = "100%" }) => width};
  max-width: ${({ maxWidth = "100%" }) => maxWidth};
  margin: ${({ margin = "0" }) => margin};
`;

export default function Table({
  color,
  data,
  backgroundColor,
  borderColor,
  applyBorder = true,
  ...props
}: TableProps) {
  return (
    <StyledTable applyBorder={applyBorder} {...props}>
      <tbody>
        {data.map((row, index) => (
          <TableRow
            key={index}
            row={row}
            backgroundColor={backgroundColor}
            borderColor={borderColor}
            color={color}
          />
        ))}
      </tbody>
    </StyledTable>
  );
}
