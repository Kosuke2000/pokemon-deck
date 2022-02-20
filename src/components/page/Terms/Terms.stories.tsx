import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TermsPageView } from "./View";

export default {
  title: "Page/Terms",
  component: TermsPageView,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof TermsPageView>;

const Template: ComponentStory<typeof TermsPageView> = (args) => (
  <TermsPageView {...args} />
);

export const Default = Template.bind({});
Default.args = {};