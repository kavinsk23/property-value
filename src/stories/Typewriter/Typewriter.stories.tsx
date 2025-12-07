import type { Meta, StoryObj } from "@storybook/react";
import { Typewriter } from "./Typewriter";

const meta: Meta<typeof Typewriter> = {
  title: "Atoms/Typewriter",
  component: Typewriter,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    words: {
      control: "object",
      description: "Array of words to type",
    },
    speed: {
      control: { type: "number", min: 50, max: 500 },
      description: "Typing speed in milliseconds",
    },
    delay: {
      control: { type: "number", min: 500, max: 5000 },
      description: "Delay between typing and deleting",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    words: ["Property", "Valuation", "Made Easy"],
    speed: 100,
    delay: 2000,
  },
};

export const FastTyping: Story = {
  args: {
    words: ["Quick", "Simple", "Efficient"],
    speed: 50,
    delay: 1000,
  },
};
