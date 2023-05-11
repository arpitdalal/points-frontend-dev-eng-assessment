import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "../../../../utils/test";
import Form from ".";

describe("Form component", () => {
  it("should render form correctly", () => {
    const { container } = render(<Form />);
    expect(container.querySelector("form")).toBeInTheDocument();
  });

  it("should render form with 1 input, 1 select and a submit button", () => {
    render(<Form />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should show error when submitting form with empty income and empty year", async () => {
    render(<Form />);
    userEvent.click(screen.getByRole("button"));
    expect(
      await screen.findByText("Invalid income, only numbers are allowed")
    ).toBeInTheDocument();
  });

  it("should show error when submitting form with valid income and empty year", async () => {
    render(<Form />);
    userEvent.type(screen.getByRole("textbox"), "1");
    userEvent.click(screen.getByRole("combobox"));
    userEvent.click(screen.getByRole("button"));
    expect(await screen.findByText("Please select a year")).toBeInTheDocument();
  });

  it("should show errors for both income input and year select when submitting form with empty income and empty year", async () => {
    render(<Form />);
    userEvent.click(screen.getByRole("textbox"));
    userEvent.click(screen.getByRole("combobox"));
    userEvent.click(screen.getByRole("button"));
    expect(
      await screen.findByText("Invalid income, only numbers are allowed")
    ).toBeInTheDocument();
    expect(await screen.findByText("Please select a year")).toBeInTheDocument();
  });

  it("should perform api request after submitting the form with valid income and year", async () => {
    render(<Form />);
    userEvent.type(screen.getByRole("textbox"), "100000");
    userEvent.click(screen.getByRole("combobox"));
    userEvent.click(screen.getByRole("option", { name: "2022" }));
    userEvent.click(screen.getByRole("button"));
    waitFor(
      () => {
        expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
      },
      {
        timeout: 100,
      }
    );
    waitFor(
      () => {
        expect(screen.getByTestId("loading-spinner")).not.toBeInTheDocument();
      },
      {
        timeout: 1000,
      }
    );
  });
});
