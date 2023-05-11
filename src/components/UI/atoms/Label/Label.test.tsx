import { render, screen } from "../../../../utils/test";
import Label from ".";

describe("Label component", () => {
  it("should render Label component correctly", () => {
    render(<Label htmlFor="test">Test</Label>);
    expect(screen.getByText("Test")).toBeInTheDocument();
    expect(screen.getByText("Test")).toHaveAttribute("for", "test");
  });

  it("should render Label component with margin-bottom", () => {
    render(
      <Label htmlFor="test" marginBottom="10px">
        Test
      </Label>
    );
    expect(screen.getByText("Test")).toHaveStyle("margin-bottom: 10px");
  });
});
