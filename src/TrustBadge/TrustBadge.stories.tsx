import type { Meta, StoryObj } from "@storybook/react";
import { TrustBadge } from "./TrustBadge";

const meta: Meta<typeof TrustBadge> = {
  title: "Components/TrustBadge",
  component: TrustBadge,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: {
      control: "text",
      description: "Custom label for the trust badge",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Trusted by 10,000+ Property Owners",
  },
};

export const CustomLabel: Story = {
  args: {
    label: "Trusted by 10,000+ Property Owners",
  },
};
