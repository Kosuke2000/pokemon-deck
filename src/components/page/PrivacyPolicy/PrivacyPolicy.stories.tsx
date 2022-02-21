import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PrivacyPolicyPageView } from "./View";

export default {
  title: "Page/PrivacyPolicy",
  component: PrivacyPolicyPageView,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof PrivacyPolicyPageView>;

const Template: ComponentStory<typeof PrivacyPolicyPageView> = (args) => (
  <PrivacyPolicyPageView {...args} />
);

export const Default = Template.bind({});
Default.args = {};