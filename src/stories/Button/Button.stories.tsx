import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import {
  HomeIcon,
  ChevronRightIcon,
  SettingsIcon,
  ArrowRightIcon,
} from "lucide-react";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: { type: "select", options: ["default", "outline", "gradient"] },
      description: "Button variant style",
    },
    size: {
      control: { type: "select", options: ["sm", "md", "lg"] },
      description: "Button size",
    },
    children: {
      control: "text",
      description: "Button content",
    },
    iconRight: {
      control: {
        type: "select",
        options: [
          false,
          "HomeIcon",
          "ChevronRightIcon",
          "SettingsIcon",
          "ArrowRightIcon",
        ],
      },
      mapping: {
        false: undefined,
        HomeIcon: <HomeIcon />,
        ChevronRightIcon: <ChevronRightIcon />,
        SettingsIcon: <SettingsIcon />,
        ArrowRightIcon: <ArrowRightIcon />,
      },
      description: "Icon to display on the right side",
    },
    disabled: {
      control: "boolean",
      description: "Disable the button",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Default Button",
    variant: "default",
    size: "md",
  },
};

export const Outline: Story = {
  args: {
    ...Default.args,
    variant: "outline",
    children: "Outline Button",
  },
};

export const Gradient: Story = {
  args: {
    children: "Gradient Button",
    variant: "gradient",
    size: "md",
  },
};

export const GradientWithIcon: Story = {
  args: {
    children: "Start Your Valuation",
    variant: "gradient",
    size: "md",
    iconRight: <ArrowRightIcon />,
  },
};

export const Small: Story = {
  args: {
    ...Default.args,
    size: "sm",
    children: "Small Button",
  },
};

export const Large: Story = {
  args: {
    ...Default.args,
    size: "lg",
    children: "Large Button",
  },
};

export const WithHomeIcon: Story = {
  args: {
    ...Default.args,
    children: "Home",
    iconRight: <HomeIcon />,
  },
};

export const WithChevronIcon: Story = {
  args: {
    ...Default.args,
    children: "Next",
    iconRight: <ChevronRightIcon />,
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
    children: "Disabled Button",
  },
};

export const OutlineWithIcon: Story = {
  args: {
    ...Outline.args,
    children: "Settings",
    iconRight: <SettingsIcon />,
  },
};
