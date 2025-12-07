import type { Meta, StoryObj } from "@storybook/react";
import { Badge, BadgeGroup } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Atoms/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["residential", "quick", "automated"],
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "residential",
  },
};

export const AllBadges: Story = {
  render: () => <BadgeGroup />,
};

export const Residential: Story = {
  args: {
    variant: "residential",
  },
};

export const Quick: Story = {
  args: {
    variant: "quick",
  },
};

export const Automated: Story = {
  args: {
    variant: "automated",
  },
};
