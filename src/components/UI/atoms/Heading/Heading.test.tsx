import { render, screen } from "../../../../utils/test";
import Heading from ".";

describe("Heading component", () => {
  it("should render Heading component correctly", () => {
    render(<Heading type="h1">Test</Heading>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  it("should render h1 tag", () => {
    render(<Heading type="h1">Test</Heading>);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  it("should render h2 tag", () => {
    render(<Heading type="h2">Test</Heading>);
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
  });

  it("should render h3 tag", () => {
    render(<Heading type="h3">Test</Heading>);
    expect(screen.getByRole("heading", { level: 3 })).toBeInTheDocument();
  });

  it("should render h4 tag", () => {
    render(<Heading type="h4">Test</Heading>);
    expect(screen.getByRole("heading", { level: 4 })).toBeInTheDocument();
  });

  it("should render h5 tag", () => {
    render(<Heading type="h5">Test</Heading>);
    expect(screen.getByRole("heading", { level: 5 })).toBeInTheDocument();
  });

  it("should render h6 tag", () => {
    render(<Heading type="h6">Test</Heading>);
    expect(screen.getByRole("heading", { level: 6 })).toBeInTheDocument();
  });

  it("should render with the color passed as prop", () => {
    render(
      <Heading type="h1" color="red">
        Test
      </Heading>
    );
    expect(screen.getByText("Test")).toHaveStyle("color: red");
  });

  it("should render in center when textAlign props is center", () => {
    render(
      <Heading type="h1" textAlign="center">
        Test
      </Heading>
    );
    expect(screen.getByText("Test")).toHaveStyle("text-align: center");
  });
});
