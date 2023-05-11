import { render, screen } from "../../../../utils/test";
import Text from ".";

describe("Text component", () => {
  it("should render correctly", () => {
    render(<Text>Test</Text>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  it("should render with the color passed as props", () => {
    render(<Text color="red">Test</Text>);
    expect(screen.getByText("Test")).toHaveStyle("color: red");
  });
});
