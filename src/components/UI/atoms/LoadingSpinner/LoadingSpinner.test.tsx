import { render, screen } from "../../../../utils/test";
import LoadingSpinner from ".";

describe("LoadingSpinner component", () => {
  it("should render correctly", () => {
    render(<LoadingSpinner />);
    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
  });
});
