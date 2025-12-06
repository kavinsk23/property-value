import type { Meta, StoryObj } from "@storybook/react";
import { TabMenu } from "./TabMenu";

const meta: Meta<typeof TabMenu> = {
  title: "Components/TabMenu",
  component: TabMenu,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    tabs: {
      control: { type: "array" },
      description: "List of tab names",
    },
    activeTab: {
      control: { type: "select" },
      description: "Currently active tab",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tabs: ["Full Details", "Property Types"],
    activeTab: "Full Details",
  },
};

export const AllTabs: Story = {
  render: () => (
    <TabMenu
      tabs={["Full Details", "Property Types"]}
      activeTab="Full Details"
    />
  ),
};
