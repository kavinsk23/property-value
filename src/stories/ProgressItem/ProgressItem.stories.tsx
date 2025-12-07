// ProgressItem.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { ProgressItem, ProgressTimeline } from "./ProgressItem";

const meta: Meta<typeof ProgressItem> = {
  title: "Atoms/ProgressItem",
  component: ProgressItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    status: {
      control: "select",
      options: ["completed", "upcoming"],
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
    showConnector: true,
  },
};

export const Upcoming: Story = {
  args: {
    step: 2,
    title: "Step 2: Place Your Order",
    description:
      "Complete your order securely through our online checkout in just a few clicks.",
    status: "upcoming",
    showConnector: true,
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
          status="completed"
        />
        <ProgressItem
          step={3}
          title="Step 3: Submit Property Details"
          description="After order confirmation, enter your property information location, type, and key details for accurate valuation."
          status="upcoming"
        />
        <ProgressItem
          step={4}
          title="Step 4: Get Your Report"
          description="Receive your property valuation report."
          status="upcoming"
        />
      </ProgressTimeline>
    </div>
  ),
};

export const AllCompleted: Story = {
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
          status="completed"
        />
        <ProgressItem
          step={3}
          title="Step 3: Submit Property Details"
          description="After order confirmation, enter your property information location, type, and key details for accurate valuation."
          status="completed"
        />
        <ProgressItem
          step={4}
          title="Step 4: Get Your Report"
          description="Receive your property valuation report."
          status="completed"
        />
      </ProgressTimeline>
    </div>
  ),
};

export const AllUpcoming: Story = {
  render: () => (
    <div className="max-w-2xl">
      <ProgressTimeline>
        <ProgressItem
          step={1}
          title="Step 1: Choose Your Service"
          description="Select Property Valuation from our services to get started."
          status="upcoming"
        />
        <ProgressItem
          step={2}
          title="Step 2: Place Your Order"
          description="Complete your order securely through our online checkout in just a few clicks."
          status="upcoming"
        />
        <ProgressItem
          step={3}
          title="Step 3: Submit Property Details"
          description="After order confirmation, enter your property information location, type, and key details for accurate valuation."
          status="upcoming"
        />
        <ProgressItem
          step={4}
          title="Step 4: Get Your Report"
          description="Receive your property valuation report."
          status="upcoming"
        />
      </ProgressTimeline>
    </div>
  ),
};

export const WithCustomGradient: Story = {
  render: () => (
    <div className="max-w-2xl">
      <ProgressTimeline>
        <ProgressItem
          step={1}
          title="Step 1: Choose Your Service"
          description="Select Property Valuation from our services to get started."
          status="completed"
          className="[&_.bg-gradient-to-br]:from-primary-300 [&_.bg-gradient-to-br]:to-primary-500 [&_.from-gradient-start]:from-primary-300 [&_.to-gradient-end]:to-primary-500"
        />
        <ProgressItem
          step={2}
          title="Step 2: Place Your Order"
          description="Complete your order securely through our online checkout in just a few clicks."
          status="completed"
          className="[&_.bg-gradient-to-br]:from-gradientAlt-start [&_.bg-gradient-to-br]:to-gradientAlt-end [&_.from-gradient-start]:from-gradientAlt-start [&_.to-gradient-end]:to-gradientAlt-end"
        />
        <ProgressItem
          step={3}
          title="Step 3: Submit Property Details"
          description="After order confirmation, enter your property information location, type, and key details for accurate valuation."
          status="upcoming"
        />
        <ProgressItem
          step={4}
          title="Step 4: Get Your Report"
          description="Receive your property valuation report."
          status="upcoming"
        />
      </ProgressTimeline>
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
          status="completed"
        />
        <ProgressItem
          step={3}
          title="Step 3: Submit Property Details"
          description="After order confirmation, enter your property information location, type, and key details for accurate valuation."
          status="upcoming"
        />
        <ProgressItem
          step={4}
          title="Step 4: Get Your Report"
          description="Receive your comprehensive property valuation report within 24-48 hours."
          status="upcoming"
        />
      </ProgressTimeline>

      <div className="mt-10 p-6 bg-gradient-to-r from-gradient-start/10 to-gradient-end/10 rounded-lg border border-gradient-start/20">
        <div className="flex items-start gap-3">
          <div className="w-3 h-3 bg-gradient-to-br from-gradient-start to-gradient-end rounded-full mt-1 flex-shrink-0"></div>
          <div>
            <h4 className="font-semibold text-gray-900">
              Progress Status: 2/4 Steps Completed
            </h4>
            <p className="text-sm text-gray-600 mt-1">
              Great progress! You've completed the first two steps. Next, submit
              your property details.
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
          status="completed"
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

export const WithoutConnector: Story = {
  render: () => (
    <div className="max-w-md space-y-6">
      <ProgressItem
        step={1}
        title="Step 1: Choose Your Service"
        description="Select Property Valuation from our services to get started."
        status="completed"
        showConnector={false}
      />
      <ProgressItem
        step={2}
        title="Step 2: Place Your Order"
        description="Complete your order securely through our online checkout in just a few clicks."
        status="completed"
        showConnector={false}
      />
    </div>
  ),
};

export const MixedCompletion: Story = {
  render: () => (
    <div className="max-w-2xl">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Order #12345 Progress
        </h3>
        <p className="text-sm text-gray-600">Track your current order status</p>
      </div>

      <ProgressTimeline>
        <ProgressItem
          step={1}
          title="Order Placed"
          description="Your order has been successfully placed"
          status="completed"
        />
        <ProgressItem
          step={2}
          title="Payment Confirmed"
          description="Payment has been processed and confirmed"
          status="completed"
        />
        <ProgressItem
          step={3}
          title="Processing"
          description="Your property valuation is being prepared"
          status="upcoming"
        />
        <ProgressItem
          step={4}
          title="Report Ready"
          description="Valuation report will be delivered"
          status="upcoming"
        />
      </ProgressTimeline>
    </div>
  ),
};
