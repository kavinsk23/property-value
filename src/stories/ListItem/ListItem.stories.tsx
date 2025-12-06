import type { Meta, StoryObj } from "@storybook/react";
import { ListItem, PropertyTypesList } from "./ListItem";
import { BuildingIcon } from "lucide-react";

const meta: Meta<typeof ListItem> = {
  title: "Components/ListItem",
  component: ListItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Multi-Storied",
    icon: <BuildingIcon className="text-primary-500" />,
    children: [
      { text: "Low rise Apartments", subtext: "(5 floors and less)" },
      { text: "Mid rise", subtext: "(6-10 floors)" },
      { text: "High rise", subtext: "(10-40 floors)" },
      { text: "Skyscraper", subtext: "(40+ floors)" },
    ],
  },
};

export const FullList: Story = {
  render: () => <PropertyTypesList />,
};
