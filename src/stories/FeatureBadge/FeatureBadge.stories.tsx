import type { Meta, StoryObj } from "@storybook/react";
import { FeatureBadgeGroup, FeatureBadge } from "./FeatureBadge";
import { UserCheckIcon } from "lucide-react";

const meta: Meta<typeof FeatureBadgeGroup> = {
  title: "Atoms/FeatureBadgeGroup",
  component: FeatureBadgeGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SingleBadge: Story = {
  render: () => (
    <FeatureBadge
      icon={<UserCheckIcon className="text-success" size={20} />}
      text="Fully Automated"
    />
  ),
};
