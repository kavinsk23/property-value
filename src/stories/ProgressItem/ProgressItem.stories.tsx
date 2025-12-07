// ProgressItem.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { ProgressItem, ProgressTimeline } from "./ProgressItem";

const meta: Meta<typeof ProgressItem> = {
  title: "Components/ProgressItem",
  component: ProgressItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    status: {
      control: "select",
      options: ["completed", "current", "upcoming"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProgressItem>;

export const Completed: Story = {
  args: {
    step: 1,
    title: "Step 1: Choose Your Service",
    description: "Select Property Valuation from our services to get started.",
    status: "completed",
  },
};

export const Current: Story = {
  args: {
    step: 2,
    title: "Step 2: Place Your Order",
    description:
      "Complete your order securely through our online checkout in just a few clicks.",
    status: "current",
  },
};

export const Upcoming: Story = {
  args: {
    step: 3,
    title: "Step 3: Submit Property Details",
    description:
      "After order confirmation, enter your property information location, type, and key details for accurate valuation.",
    status: "upcoming",
  },
};

export const PropertyValuationTimeline: Story = {
  render: () => (
    <div className="max-w-2xl">
      <ProgressTimeline>
        <ProgressItem
          step={1}
          title="Step 1: Choose Your Service"
          description="Select Property Valuation from our services to get started."
          status="completed"
        />
        <ProgressItem
          step={2}
          title="Step 2: Place Your Order"
          description="Complete your order securely through our online checkout in just a few clicks."
          status="current"
        />
        <ProgressItem
          step={3}
          title="Step 3: Submit Property Details"
          description="After order confirmation, enter your property information location, type, and key details for accurate valuation."
          status="upcoming"
        />
      </ProgressTimeline>
    </div>
  ),
};

export const AllStatusTypes: Story = {
  render: () => (
    <div className="max-w-md space-y-6">
      <ProgressItem
        step={1}
        title="Completed Step"
        description="This step has been successfully completed."
        status="completed"
        showConnector={true}
      />
      <ProgressItem
        step={2}
        title="Current Step"
        description="This is the step you're currently working on."
        status="current"
        showConnector={true}
      />
      <ProgressItem
        step={3}
        title="Upcoming Step"
        description="This step will be available next."
        status="upcoming"
        showConnector={false}
      />
    </div>
  ),
};

export const InDashboardContext: Story = {
  render: () => (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 max-w-3xl">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Property Valuation Process
        </h2>
        <p className="text-gray-600 mt-2">
          Follow these 4 simple steps to get your property valuation report
        </p>
      </div>

      <ProgressTimeline>
        <ProgressItem
          step={1}
          title="Step 1: Choose Your Service"
          description="Select Property Valuation from our services to get started with the valuation process."
          status="completed"
        />
        <ProgressItem
          step={2}
          title="Step 2: Place Your Order"
          description="Complete your order securely through our online checkout in just a few clicks."
          status="current"
        />
        <ProgressItem
          step={3}
          title="Step 3: Submit Property Details"
          description="After order confirmation, enter your property information location, type, and key details for accurate valuation."
          status="upcoming"
        />
      </ProgressTimeline>

      <div className="mt-10 p-6 bg-primary/5 rounded-lg border border-primary/10">
        <div className="flex items-start gap-3">
          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
          <div>
            <h4 className="font-semibold text-gray-900">
              Current Status: Step 2
            </h4>
            <p className="text-sm text-gray-600 mt-1">
              You're currently placing your order. Once completed, you'll be
              able to submit your property details.
            </p>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const CompactVersion: Story = {
  render: () => (
    <div className="max-w-lg">
      <ProgressTimeline>
        <ProgressItem
          step={1}
          title="Choose Service"
          description="Select valuation service"
          status="completed"
        />
        <ProgressItem
          step={2}
          title="Place Order"
          description="Secure checkout"
          status="current"
        />
        <ProgressItem
          step={3}
          title="Submit Details"
          description="Provide property information"
          status="upcoming"
        />
        <ProgressItem
          step={4}
          title="Get Report"
          description="Receive valuation report"
          status="upcoming"
        />
      </ProgressTimeline>
    </div>
  ),
};
