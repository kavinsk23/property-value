import type { Meta, StoryObj } from "@storybook/react";
import { ListItem, PropertyTypesList } from "./ListItem";
import { CheckIcon, BuildingIcon, HomeIcon, BarChartIcon } from "lucide-react";

const meta: Meta<typeof ListItem> = {
  title: "Components/ListItem",
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

export const NestedList: Story = {
  args: {
    text: "Multi-Storied",
    iconType: "check",
    children: [
      { text: "Low rise Apartments", subtext: "(5 floors and less)" },
      { text: "Mid rise", subtext: "(6-10 floors)" },
      { text: "High rise", subtext: "(10-40 floors)" },
      { text: "Skyscraper", subtext: "(40+ floors)" },
    ],
  },
};

export const FullPropertyTypesList: Story = {
  render: () => <PropertyTypesList />,
};

export const ComplexNestedList: Story = {
  args: {
    text: "Property Types",
    iconType: <HomeIcon className="text-primary-500" />,
    children: [
      {
        text: "Multi-Storied",
        iconType: <BarChartIcon className="text-gray-500" />,
        children: [
          { text: "Low rise Apartments", subtext: "(5 floors and less)" },
          { text: "Mid rise", subtext: "(6-10 floors)" },
        ],
      },
      {
        text: "Single-Storied",
        iconType: <BarChartIcon className="text-gray-500" />,
        children: [{ text: "Standalone Houses" }, { text: "Bungalows" }],
      },
    ],
  },
};
