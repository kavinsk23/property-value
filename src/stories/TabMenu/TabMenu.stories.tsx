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
      control: "object",
      description: "List of tab names",
    },
    activeTab: {
      control: { type: "select" },
      description: "Currently active tab",
    },
    onTabChange: {
      action: "tabChanged",
      description: "Callback when tab is changed",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TabMenu>;

export const Default: Story = {
  args: {
    tabs: ["Full Details", "Property Types"],
    activeTab: "Full Details",
    onTabChange: (tab: string) => console.log(`Tab changed to: ${tab}`),
  },
};

export const ThreeTabs: Story = {
  args: {
    tabs: ["Tab 1", "Tab 2", "Tab 3"],
    activeTab: "Tab 1",
    onTabChange: (tab: string) => console.log(`Tab changed to: ${tab}`),
  },
};

export const WithManyTabs: Story = {
  args: {
    tabs: ["Overview", "Details", "Settings", "Analytics", "Help"],
    activeTab: "Overview",
    onTabChange: (tab: string) => console.log(`Tab changed to: ${tab}`),
  },
};

export const AllTabs: Story = {
  render: (args) => (
    <TabMenu
      tabs={args.tabs}
      activeTab={args.activeTab}
      onTabChange={args.onTabChange}
    />
  ),
  args: {
    tabs: ["Full Details", "Property Types"],
    activeTab: "Full Details",
    onTabChange: (tab: string) => console.log(`Tab changed to: ${tab}`),
  },
};
