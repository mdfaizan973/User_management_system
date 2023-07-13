import React from "react";

import {
  chakra,
  Box,
  Stack,
  Link,
  HStack,
  Text,
  Container,
  Icon,
  Avatar,
  Tooltip,
  StackProps,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";

const Home = () => {
  return (
    <Container maxW="5xl" p={{ base: 5, md: 6 }} mt={"50px"}>
      <Stack
        w="17rem"
        spacing={2}
        p={4}
        border="1px solid"
        borderColor={useColorModeValue("gray.400", "gray.600")}
        rounded="md"
        margin="0 auto"
        _hover={{
          boxShadow: useColorModeValue(
            "0 4px 6px rgba(160, 174, 192, 0.6)",
            "0 4px 6px rgba(9, 17, 28, 0.4)"
          ),
        }}
      >
        <HStack justifyContent="space-between" alignItems="baseline">
          <Tooltip
            label="User Logo"
            aria-label="User Logo"
            placement="right-end"
            size="sm"
            // Sizes for Tooltip are not implemented in the default theme. You can extend the theme to implement them
          >
            <Box pos="relative">
              <Avatar
                src="https://cdn3d.iconscout.com/3d/premium/thumb/user-3711850-3105265.png"
                name="name"
                size="xl"
                borderRadius="md"
              />
            </Box>
          </Tooltip>
        </HStack>
        <chakra.h1 fontSize="xl" fontWeight="bold">
          Muhammad Faizan
        </chakra.h1>
        <Text fontSize="md" color="gray.500">
          6201855200
        </Text>
        <Divider />
        <Text fontSize="md" color="gray.500">
          faizan@gmail.com
        </Text>
      </Stack>
    </Container>
  );
};

export default Home;
