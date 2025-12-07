// ReportHeader.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { ReportHeader } from "./ReportHeader";

const meta: Meta<typeof ReportHeader> = {
  title: "Components/ReportHeader",
  component: ReportHeader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: [
        "headerblue",
        "headergreen",
        "headeryellow",
        "headerorange",
        "headerteal",
        "headerpurple",
      ],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ReportHeader>;

export const Default: Story = {
  args: {
    children: "Report Header",
    color: "headerblue",
    size: "md",
  },
};

export const AllColors: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <ReportHeader color="headerblue">Header Blue (#99ADFF)</ReportHeader>
      <ReportHeader color="headergreen">Header Green (#88C573)</ReportHeader>
      <ReportHeader color="headeryellow">Header Yellow (#FFDE5A)</ReportHeader>
      <ReportHeader color="headerorange">Header Orange (#FC9F68)</ReportHeader>
      <ReportHeader color="headerteal">Header Teal (#1CABB1)</ReportHeader>
      <ReportHeader color="headerpurple">Header Purple (#CEA9F0)</ReportHeader>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-start">
      <ReportHeader color="headerblue" size="sm">
        Small Header
      </ReportHeader>
      <ReportHeader color="headergreen" size="md">
        Medium Header
      </ReportHeader>
      <ReportHeader color="headerorange" size="lg">
        Large Header
      </ReportHeader>
    </div>
  ),
};

export const Clickable: Story = {
  args: {
    children: "Clickable Header",
    color: "headerpurple",
    onClick: () => alert("Header clicked!"),
  },
};

export const WithLongText: Story = {
  args: {
    children: "This is a longer report header text that wraps",
    color: "headerteal",
    size: "md",
  },
};

export const InContext: Story = {
  render: () => (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-md">
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-gray-800">Report Dashboard</h2>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Sales Report</span>
            <ReportHeader color="headergreen" size="sm">
              Completed
            </ReportHeader>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-600">Financial Analysis</span>
            <ReportHeader color="headeryellow" size="sm">
              In Progress
            </ReportHeader>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-600">Marketing Review</span>
            <ReportHeader color="headerorange" size="sm">
              Pending
            </ReportHeader>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-600">Annual Report</span>
            <ReportHeader color="headerblue" size="sm">
              Draft
            </ReportHeader>
          </div>
        </div>
      </div>
    </div>
  ),
};
