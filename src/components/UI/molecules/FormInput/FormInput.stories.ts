import type { Meta, StoryObj } from "@storybook/react";
import FormInput from "./FormInput";

const meta = {
  title: "molecules/FormInput",
  component: FormInput,
  tags: ["molecules", "FormInput", "autodocs"],
  args: {
    backgroundColor: "white",
    color: "black",
  },
} satisfies Meta<typeof FormInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Input: Story = {
  args: {
    inputType: "input",
    id: "email",
    type: "email",
    label: "Email",
    placeholder: "Enter your email",
  },
};

export const Select: Story = {
  args: {
    inputType: "select",
    id: "country",
    options: [
      { label: "USA", value: "usa" },
      { label: "Option 2", value: "option-2" },
    ],
    label: "Country",
  },
};
