import { vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen } from "../../../../utils/test";
import Select, { type Option } from ".";
import { theme } from "../../../../Theme";

const options = [
  {
    value: "",
    label: "Please select a country",
    disabled: true,
  },
  { value: "usa", label: "USA" },
  { value: "canada", label: "Canada" },
] satisfies Array<Option>;

describe("Select component", () => {
  it("should render Select component correctly", () => {
    render(<Select options={options} />);
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

  it("should disable the individual option when disabled is true in an option", () => {
    render(<Select options={options} />);
    expect(screen.getByText(options[0].label)).toBeDisabled();
  });

  it("should call onChange function when changed", async () => {
    render(
      <Select
        options={options}
        onChange={() => console.log("Select changed")}
      />
    );
    const select = screen.getByRole("combobox");
    const spy = vi.spyOn(console, "log");
    await userEvent.selectOptions(select, options[1].value);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should change border to red when "invalid" prop is true', async () => {
    render(<Select options={options} invalid />);
    const select = screen.getByRole("combobox");
    expect(select).toHaveStyle(`border: 1px solid ${theme.colors.error}`);
  });

  it('should not change border to red when "invalid" prop is false', async () => {
    render(<Select options={options} invalid={false} />);
    const select = screen.getByRole("combobox");
    expect(select).not.toHaveStyle(`border: 1px solid ${theme.colors.error}`);
  });

  it("should add outline when focused", async () => {
    render(<Select options={options} />);
    const select = screen.getByRole("combobox");
    await userEvent.click(select);
    expect(select).toHaveStyle(`outline: 1px solid ${theme.colors.primary}`);
  });

  it("should be required when required prop is true", async () => {
    render(<Select options={options} required />);
    const select = screen.getByRole("combobox");
    expect(select).toBeRequired();
  });

  it("should be disabled when disabled prop is true", async () => {
    render(<Select options={options} disabled />);
    const select = screen.getByRole("combobox");
    expect(select).toBeDisabled();
  });
});
