// StatsCard.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { StatsCard, StatsCardGroup } from "./StatsCard";

const meta: Meta<typeof StatsCard> = {
  title: "Components/StatsCard",
  component: StatsCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof StatsCard>;

export const PropertiesValued: Story = {
  args: {
    title: "Properties Valued",
    value: "1,000+",
    variant: "primary",
    description: "Successful property valuations",
  },
};

export const CustomerRating: Story = {
  args: {
    title: "Customer Rating",
    value: "4.0/",
    variant: "secondary",
    description: "Average customer satisfaction",
  },
};

export const SecurePayment: Story = {
  args: {
    title: "Secure Payment",
    value: "100%",
    variant: "tertiary",
    description: "Guaranteed secure transactions",
  },
};

export const WithTrend: Story = {
  args: {
    title: "Properties Valued",
    value: "1,200+",
    variant: "primary",
    showTrend: true,
    trend: 12,
    description: "Year-over-year growth",
  },
};

export const AllStatsCards: Story = {
  render: () => (
    <StatsCardGroup columns={3} className="max-w-6xl">
      <StatsCard
        title="Properties Valued"
        value="1,000+"
        variant="primary"
        description="Successful property valuations"
      />
      <StatsCard
        title="Customer Rating"
        value="4.0/"
        variant="secondary"
        description="Average customer satisfaction"
      />
      <StatsCard
        title="Secure Payment"
        value="100%"
        variant="tertiary"
        description="Guaranteed secure transactions"
      />
    </StatsCardGroup>
  ),
};

export const InDashboard: Story = {
  render: () => (
    <div className="bg-gray-50 p-8 rounded-2xl max-w-6xl">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">
        Platform Statistics
      </h2>
      <StatsCardGroup columns={3}>
        <StatsCard
          title="Properties Valued"
          value="1,000+"
          variant="primary"
          description="Total properties evaluated"
          showTrend={true}
          trend={15}
        />
        <StatsCard
          title="Customer Rating"
          value="4.0/"
          variant="secondary"
          description="Based on 500+ reviews"
        />
        <StatsCard
          title="Secure Payment"
          value="100%"
          variant="tertiary"
          description="Encrypted & protected transactions"
        />
      </StatsCardGroup>

      <div className="mt-8 p-6 bg-white rounded-xl border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Additional Metrics
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-headerblue rounded-full"></div>
              <span className="text-sm text-gray-600">Active Users</span>
            </div>
            <p className="text-2xl font-bold text-gray-900">2.5K</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-headergreen rounded-full"></div>
              <span className="text-sm text-gray-600">Avg. Response Time</span>
            </div>
            <p className="text-2xl font-bold text-gray-900">24h</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-headerorange rounded-full"></div>
              <span className="text-sm text-gray-600">Completion Rate</span>
            </div>
            <p className="text-2xl font-bold text-gray-900">98%</p>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const CompactView: Story = {
  render: () => (
    <div className="flex flex-col md:flex-row gap-4">
      <StatsCard
        title="Properties Valued"
        value="1,000+"
        variant="primary"
        className="flex-1"
      />
      <StatsCard
        title="Customer Rating"
        value="4.0/"
        variant="secondary"
        className="flex-1"
      />
      <StatsCard
        title="Secure Payment"
        value="100%"
        variant="tertiary"
        className="flex-1"
      />
    </div>
  ),
};
