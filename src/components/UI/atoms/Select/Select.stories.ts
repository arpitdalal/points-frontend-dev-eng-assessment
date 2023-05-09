import type { Meta, StoryObj } from "@storybook/react";
import Select from "./Select";

const meta = {
  title: "atoms/Select",
  component: Select,
  tags: ["atoms", "Select", "autodocs"],
  argTypes: {
    onChange: { action: "onChange" },
    onFocus: { action: "onFocus" },
    onBlur: { action: "onBlur" },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "countries",
    name: "countries",
    options: [
      { value: "usa", label: "United States of America" },
      { value: "canada", label: "Canada" },
      { value: "mexico", label: "Mexico" },
    ],
    backgroundColor: "white",
    color: "black",
  },
};
