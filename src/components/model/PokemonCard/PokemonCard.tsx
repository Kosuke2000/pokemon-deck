import {
  Avatar,
  Box,
  Button,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { VFC } from "react";

import { Pokemon } from "@/types/PokemonCard";

import { TypeBadge } from "@/components/model/PokemonCard/TypeBadge";

export interface PokemonProps {
  pokemon: Pokemon;
}

export const PokemonCard: VFC<PokemonProps> = ({ pokemon }) => {
  const { name, abilities, types, sprite } = pokemon;

  {
    abilities.map((ability) => {
      console.log(ability);
    });
  }
  //   // フォームに入力されたポケモンネームをrequestに代入
  //   const [request, setRequest] = useState<string>("pikachu");

  //   // requestをAPIkeyに代入し、データを取得
  //   const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  //   const { data, error } = useSWR(
  //     `https://pokeapi.co/api/v2/pokemon/${request}`,
  //     fetcher
  //   );

  return (
    <Center py={6}>
      <Box
        maxW={"320px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <Avatar
          size={"xl"}
          src={sprite}
          mb={4}
          pos={"relative"}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: "green.300",
            border: "2px solid white",
            rounded: "full",
            pos: "absolute",
            bottom: 0,
            right: 3,
          }}
        />
        <Heading fontSize={"2xl"} fontFamily={"body"}>
          {name}
        </Heading>

        <Text
          textAlign={"center"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
        >
          <ul>
            {abilities.map((ability, i) => {
              return <li key={i}>{ability.ability}</li>;
            })}
          </ul>
        </Text>
        <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
          {types.map((type, i) => {
            return <TypeBadge type={type} key={i} />;
          })}
        </Stack>

        <Stack mt={8} direction={"row"} spacing={4}>
          <Button
            flex={1}
            fontSize={"xs"}
            rounded={"full"}
            _focus={{
              bg: "gray.200",
            }}
          >
            キミに決めた！
          </Button>
          <Button
            flex={1}
            fontSize={"xs"}
            rounded={"full"}
            bg={"blue.400"}
            color={"white"}
            boxShadow={
              "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
            }
            _hover={{
              bg: "blue.500",
            }}
            _focus={{
              bg: "blue.500",
            }}
          >
            今までありがとな！
          </Button>
        </Stack>
      </Box>
    </Center>
  );
};
