import { Badge, useColorModeValue } from "@chakra-ui/react";
import { VFC } from "react";

interface TypeBadge {
  type: string;
}

export const TypeBadge: VFC<TypeBadge> = ({ type }) => {
  return (
    <>
      <Badge
        w={24}
        px={2}
        py={1}
        bg={useColorModeValue("gray.50", "gray.800")}
        fontWeight={"400"}
      >
        {type}
      </Badge>
    </>
  );
};
