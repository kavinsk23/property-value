import type { Meta, StoryObj } from "@storybook/react";
import { ListItem, PropertyTypesList } from "./ListItem";
import { CheckIcon, BuildingIcon, HomeIcon, BarChartIcon } from "lucide-react";

const meta: Meta<typeof ListItem> = {
  title: "Atoms/ListItem",
  component: ListItem,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    text: {
      control: "text",
      description: "Main text of the list item",
    },
    subtext: {
      control: "text",
      description: "Optional secondary text",
    },
    iconType: {
      control: {
        type: "select",
        options: ["check", "dot", "custom"],
      },
      description: "Type of icon to display",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Instant value range estimate",
    iconType: "check",
  },
};

export const WithSubtext: Story = {
  args: {
    text: "Multi-Storied",
    subtext: "Property Type",
    iconType: "check",
  },
};

export const DotIcon: Story = {
  args: {
    text: "Low rise Apartments",
    subtext: "(5 floors and less)",
    iconType: "dot",
  },
};

export const CustomIcon: Story = {
  args: {
    text: "Property Analysis",
    iconType: <BuildingIcon className="text-primary-500" />,
  },
};

export const FullPropertyTypesList: Story = {
  render: () => <PropertyTypesList />,
};
