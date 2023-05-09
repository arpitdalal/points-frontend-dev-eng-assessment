import type { Meta, StoryObj } from "@storybook/react";
import Asterisk from "./Asterisk";

const meta = {
  title: "atoms/Asterisk",
  component: Asterisk,
  tags: ["atoms", "Asterisk", "autodocs"],
} satisfies Meta<typeof Asterisk>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
