// Avatar.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarGroup } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
    },
    status: {
      control: "select",
      options: ["online", "offline", "busy", "away"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    text: "John Doe",
    size: "md",
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Avatar text="JS" size="sm" />
      <Avatar text="MD" size="md" />
      <Avatar text="LG" size="lg" />
      <Avatar text="XL" size="xl" />
    </div>
  ),
};

export const WithStatus: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Avatar text="John" size="md" showStatus status="online" />
      <Avatar text="Jane" size="md" showStatus status="offline" />
      <Avatar text="Bob" size="md" showStatus status="busy" />
      <Avatar text="Alice" size="md" showStatus status="away" />
    </div>
  ),
};

export const WithImage: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    alt: "User profile",
    text: "John Smith",
    size: "lg",
    showStatus: true,
    status: "online",
  },
};

export const DifferentColors: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar text="JS" bgColor="bg-primary" />
      <Avatar text="MD" bgColor="bg-headerblue" />
      <Avatar text="LG" bgColor="bg-headergreen" />
      <Avatar text="XL" bgColor="bg-headerorange" />
      <Avatar text="AB" bgColor="bg-headerpurple" />
      <Avatar text="CD" bgColor="bg-gray-800" />
    </div>
  ),
};

export const Clickable: Story = {
  args: {
    text: "Click Me",
    size: "md",
    onClick: () => alert("Avatar clicked!"),
  },
};

export const AvatarGroups: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">Basic Group</h3>
        <AvatarGroup>
          <Avatar text="John Doe" />
          <Avatar text="Jane Smith" />
          <Avatar text="Bob Johnson" />
          <Avatar text="Alice Brown" />
        </AvatarGroup>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">
          With Max Limit
        </h3>
        <AvatarGroup max={3}>
          <Avatar text="John Doe" />
          <Avatar text="Jane Smith" />
          <Avatar text="Bob Johnson" />
          <Avatar text="Alice Brown" />
          <Avatar text="Charlie Davis" />
        </AvatarGroup>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">
          With Status Indicators
        </h3>
        <AvatarGroup>
          <Avatar text="John" showStatus status="online" />
          <Avatar text="Jane" showStatus status="busy" />
          <Avatar text="Bob" showStatus status="away" />
          <Avatar text="Alice" showStatus status="offline" />
        </AvatarGroup>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">Mixed Sizes</h3>
        <AvatarGroup>
          <Avatar text="JS" size="sm" />
          <Avatar text="MD" size="md" />
          <Avatar text="LG" size="lg" />
        </AvatarGroup>
      </div>
    </div>
  ),
};

export const InContext: Story = {
  render: () => (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 max-w-md">
      <div className="flex items-center gap-4 mb-6">
        <Avatar text="Alex Johnson" size="lg" showStatus status="online" />
        <div>
          <h3 className="font-semibold text-gray-900">Alex Johnson</h3>
          <p className="text-sm text-gray-600">Product Manager</p>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs text-primary font-medium">Online</span>
            <span className="text-xs text-gray-500">•</span>
            <span className="text-xs text-gray-500">
              Last active: 2 min ago
            </span>
          </div>
        </div>
      </div>

      <div className="border-t pt-6">
        <h4 className="text-sm font-medium text-gray-700 mb-3">Team Members</h4>
        <AvatarGroup max={4}>
          <Avatar text="Sarah Chen" showStatus status="online" />
          <Avatar text="Mike Ross" showStatus status="busy" />
          <Avatar text="Emma Wilson" showStatus status="away" />
          <Avatar text="David Lee" showStatus status="online" />
          <Avatar text="Lisa Park" showStatus status="offline" />
        </AvatarGroup>
      </div>
    </div>
  ),
};
