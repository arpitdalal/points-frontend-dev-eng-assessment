import { vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen } from "../../../../utils/test";
import Button from "./Button";

describe("Button component", () => {
  it("should render Button component correctly", () => {
    render(<Button>Click</Button>);
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveTextContent("Click");
  });

  it("should call onClick function when clicked", async () => {
    render(
      <Button onClick={() => console.log("Button clicked")}>Click</Button>
    );
    const button = screen.getByRole("button");
    const spy = vi.spyOn(console, "log");
    await userEvent.click(button);
    expect(spy).toHaveBeenCalled();
  });

  it("should have disabled attribute and should not call onClick function when disabled props is passed", async () => {
    render(
      <Button onClick={() => console.log("Button clicked")} disabled>
        Click
      </Button>
    );
    const button = screen.getByRole("button");
    const spy = vi.spyOn(console, "log");
    await userEvent.click(button);
    expect(spy).not.toHaveBeenCalled();
    expect(button.hasAttribute("disabled")).toBeTruthy();
  });

  it("should render LoadingSpinner when loading is true", () => {
    render(<Button loading>Click</Button>);
    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
  });

  it("should not render LoadingSpinner when loading is false", () => {
    const { container } = render(<Button loading={false}>Click</Button>);
    expect(container.querySelector("[data-testid]")).not.toBeInTheDocument();
  });
});
