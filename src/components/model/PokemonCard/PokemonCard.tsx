import {
  Avatar,
  Box,
  Button,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  PopoverArrow,
} from "@chakra-ui/react";
import { useState, VFC } from "react";

import { Pokemon } from "@/types/PokemonCard";

import { TypeBadge } from "@/components/model/PokemonCard/TypeBadge";

export interface PokemonProps {
  pokemon: Pokemon;
  open: () => void;
}

export const PokemonCard: VFC<PokemonProps> = ({ pokemon, open }) => {
  const { name, abilities, types, sprites } = pokemon;

  const [isChat, setChatting] = useState(false);
  const [disable, setDisable] = useState(false);

  const startChat = () => {
    setChatting(true);
    setDisable(true);

    setTimeout(() => {
      setChatting(false);
      setDisable(false);
    }, 3000);
  };
  const endChat = () => setChatting(false);

  const [comment, setComment] = useState("よろしく！");

  return (
    <Center h={"full"}>
      <Box
        h={"full"}
        w={"full"}
        display={"flex"}
        flexDirection={"column"}
        justifyItems={"center"}
      >
        <Box
          mx={"auto"}
          h={"full"}
          maxW={"2xl"}
          w={"full"}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          rounded={"lg"}
          p={6}
          textAlign={"center"}
        >
          <Popover
            isOpen={isChat}
            onClose={endChat}
            placement="bottom"
            closeOnBlur={false}
          >
            <PopoverTrigger>
              <Box p={"8"} pb={"0"} mx={"auto"} maxW={"sm"}>
                <Avatar
                  size={"full"}
                  src={sprites.front_default}
                  pos={"relative"}
                  _after={{
                    content: '""',
                    w: 8,
                    h: 8,
                    bg: "green.300",
                    border: "2px solid white",
                    rounded: "full",
                    pos: "absolute",
                    bottom: 0,
                    right: 3,
                  }}
                />
              </Box>
            </PopoverTrigger>
            <PopoverContent h={"full"}>
              <PopoverArrow />
              <PopoverBody>
                Are you sure you want to continue with your
                action?aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              </PopoverBody>
            </PopoverContent>
          </Popover>
          <Box p={"4"} mx={"auto"} maxW={"min-content"}>
            <Heading fontSize={"4xl"} fontFamily={"body"}>
              {name}
            </Heading>

            <Text
              textAlign={"center"}
              color={useColorModeValue("gray.700", "gray.400")}
              px={3}
            >
              <ul>
                {abilities.map((ability, i) => {
                  return <li key={i}>{ability.ability.name}</li>;
                })}
              </ul>
            </Text>
            <Stack align={"center"} justify={"center"} direction={"row"} p={4}>
              {types.map((type, i) => {
                return <TypeBadge type={type.type.name} key={i} />;
              })}
            </Stack>
          </Box>
          <Stack maxW={"md"} mx={"auto"} direction={"row"} spacing={4}>
            <Button
              py={4}
              disabled={disable}
              onClick={startChat}
              flex={1}
              fontSize={"xs"}
              rounded={"full"}
              _focus={{
                bg: "gray.200",
              }}
            >
              おしゃべり！
            </Button>
            <Button
              py={2}
              onClick={open}
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
      </Box>
    </Center>
  );
};
