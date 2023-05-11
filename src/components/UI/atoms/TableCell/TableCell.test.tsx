import { render, screen } from "../../../../utils/test";
import TableCell from ".";

describe("TableCell component", () => {
  it("should render TableCell component with correct value", () => {
    render(<TableCell heading={false} value="A cell" />);
    expect(screen.getByText("A cell")).toBeInTheDocument();
  });

  it("should render th element when heading prop is true", () => {
    render(<TableCell heading={true} value="A cell" />);
    expect(screen.getByRole("columnheader")).toBeInTheDocument();
  });

  it("should render td element when heading prop is false", () => {
    render(<TableCell heading={false} value="A cell" />);
    expect(screen.getByRole("cell")).toBeInTheDocument();
  });

  it("should render with the color passed as a prop", () => {
    render(<TableCell heading={false} value="A cell" color="red" />);
    expect(screen.getByText("A cell")).toHaveStyle("color: red");
  });
});
