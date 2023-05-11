import { vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen } from "../../../../utils/test";
import Input from "./Input";
import { theme } from "../../../../Theme";

describe("Input component", () => {
  it("should render Input component correctly", () => {
    render(<Input />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("should call onChange function when changed", async () => {
    render(<Input onChange={() => console.log("Input changed")} />);
    const input = screen.getByRole("textbox");
    const spy = vi.spyOn(console, "log");
    await userEvent.type(input, "Hello");
    expect(spy).toHaveBeenCalledTimes(5);
  });

  it("should change border to red when invalid prop is true", async () => {
    render(<Input invalid />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveStyle(`border: 1px solid ${theme.colors.error}`);
  });

  it("should not change border to red when invalid prop is false", async () => {
    render(<Input invalid={false} />);
    const input = screen.getByRole("textbox");
    expect(input).not.toHaveStyle(`border: 1px solid ${theme.colors.error}`);
  });

  it("should add outline when focused", async () => {
    render(<Input />);
    const input = screen.getByRole("textbox");
    await userEvent.click(input);
    expect(input).toHaveStyle(`outline: 1px solid ${theme.colors.primary}`);
  });

  it("should be required when required prop is true", async () => {
    render(<Input required />);
    const input = screen.getByRole("textbox");
    expect(input).toBeRequired();
  });

  it("should be disabled when disabled prop is true", async () => {
    render(<Input disabled />);
    const select = screen.getByRole("textbox");
    expect(select).toBeDisabled();
  });
});
