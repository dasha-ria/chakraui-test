import { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import {
  Box,
  Image,
  HStack,
  Tag,
  Heading,
  Text,
  Button,
  Center,
} from "@chakra-ui/react";

function App() {
  return (
    <Center as="section" bg="gray.100" h="100vh">
      <Box maxW="420px" bg="white" p="6">
        <Image
          src="https://images.unsplash.com/photo-1476610182048-b716b8518aae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2759&q=80"
          alt="Svartifoss Waterfall"
          borderRadius="xl"
          objectFit="cover"
          mx="auto"
        ></Image>
        <HStack mt="5" spacing="3">
          {["Waterfall", "Nature"].map((item) => (
            <Tag key={item} variant="outline">
              {item}
            </Tag>
          ))}
        </HStack>
        <Heading my="4" size="lg">
          Svartifoss Waterfall
        </Heading>
        <Text>
          Svartifoss is a waterfall in Skaftafell in Vatnajökull National Park
          in Iceland, and is one of the most popular sights in the park. It is
          surrounded by dark lava columns, which gave rise to its name. The base
          of this waterfall is noteworthy for its sharp rocks.
        </Text>
        <Center my="6">
          <Button colorScheme="blue">Learn more</Button>
        </Center>
      </Box>
    </Center>
  );
}

export default App;
