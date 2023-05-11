import { render, screen } from "../../../../utils/test";
import TableRow, { type Row } from ".";

const row = [
  {
    heading: false,
    value: "Cell 1",
  },
  {
    heading: false,
    value: "Cell 2",
  },
  {
    heading: false,
    value: "Cell 3",
  },
] satisfies Array<Row>;

describe("TableRow component", () => {
  it("should render with correct values of row cells", () => {
    render(<TableRow row={row} />);
    expect(screen.getByText("Cell 1")).toBeInTheDocument();
    expect(screen.getByText("Cell 2")).toBeInTheDocument();
    expect(screen.getByText("Cell 3")).toBeInTheDocument();
  });

  it("should render with correct backgroundColor", () => {
    render(<TableRow row={row} backgroundColor="red" />);
    expect(screen.getByRole("row")).toHaveStyle(`background-color: red`);
  });
});
