import { ComponentStory, ComponentMeta } from "@storybook/react";

import { mockPikachu } from "@/mocks/Pokemon";

import { PokemonCard } from "./PokemonCard";

export default {
  title: "Model/PokemonCard",
  component: PokemonCard,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof PokemonCard>;

const Template: ComponentStory<typeof PokemonCard> = (args) => (
  <PokemonCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  pokemon: mockPikachu,
};
