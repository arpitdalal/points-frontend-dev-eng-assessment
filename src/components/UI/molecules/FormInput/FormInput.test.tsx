import { render, screen } from "../../../../utils/test";
import FormInput from ".";
import type { Option } from "../../atoms/Select";

const options = [
  {
    value: "",
    label: "Please select a country",
    disabled: true,
  },
  { value: "usa", label: "USA" },
  { value: "canada", label: "Canada" },
] satisfies Array<Option>;

describe("FormInput component", () => {
  it("should render text input and label correctly", () => {
    render(
      <FormInput
        inputType="input"
        type="text"
        id="name"
        name="name"
        label="Name"
      />
    );
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
  });

  it("should render select and label correctly", () => {
    render(
      <FormInput
        inputType="select"
        options={options}
        id="country"
        name="country"
        label="Country"
      />
    );
    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(screen.getByLabelText("Country")).toBeInTheDocument();
  });

  it("should show error when passed via props", () => {
    render(
      <FormInput
        inputType="input"
        type="text"
        id="name"
        name="name"
        label="Name"
        error="Error"
      />
    );
    expect(screen.getByText("Error")).toBeInTheDocument();
  });

  it("should show asterisk when required prop is passed", () => {
    render(
      <FormInput
        inputType="input"
        type="text"
        id="name"
        name="name"
        label="Name"
        required
      />
    );
    expect(screen.getByText("*")).toBeInTheDocument();
  });
});
