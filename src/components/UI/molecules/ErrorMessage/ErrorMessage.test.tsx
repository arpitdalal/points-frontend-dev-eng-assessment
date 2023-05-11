import { render, screen } from "../../../../utils/test";
import ErrorMessage from ".";
import { theme } from "../../../../Theme";

describe("ErrorMessage component", () => {
  it("should render correctly", () => {
    render(<ErrorMessage>Error</ErrorMessage>);
    expect(screen.getByText("Error")).toBeInTheDocument();
  });
  
  it("should render with correct color", () => {
    render(<ErrorMessage>Error</ErrorMessage>);
    expect(screen.getByText("Error")).toHaveStyle(
      `color: ${theme.colors.error}`
    );
  });
});
