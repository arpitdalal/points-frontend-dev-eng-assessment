import type { Meta, StoryObj } from "@storybook/react";
import Text from "./Text";

const meta = {
  title: "atoms/Text",
  component: Text,
  tags: ["atoms", "Text", "autodocs"],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "A paragraph",
    color: "black",
  },
};
