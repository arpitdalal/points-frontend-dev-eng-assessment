import { render, screen } from "../../../../utils/test";
import Table, { type TableData } from ".";

const data = [
  [
    {
      heading: true,
      value: "Cell 1",
    },
    {
      heading: true,
      value: "Cell 2",
    },
    {
      heading: true,
      value: "Cell 3",
    },
  ],
  [
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
  ],
] satisfies TableData;

describe("Table component", () => {
  it("should render table correctly", () => {
    const { container } = render(<Table data={data} />);
    expect(container.querySelector("table")).toBeInTheDocument();
  });

  it("should apply border to the table when applyBorder props is true", () => {
    render(<Table data={data} applyBorder={true} borderColor="red" />);
    expect(screen.getAllByRole("cell")[0]).toHaveStyle("border: 1px solid red");
  });
});
