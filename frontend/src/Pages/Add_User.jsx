import * as React from "react";
import {
  Container,
  Box,
  FormLabel,
  FormControl,
  Input,
  Stack,
  Button,
  Heading,
  VStack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import TableShow from "./TableShow";

const Add_User = () => {
  return (
    <Container maxW="5xl" mt={"100px"} p={{ base: 5, md: 10 }}>
      <Stack spacing={4} maxW={{ base: "20rem", sm: "25rem" }} margin="0 auto">
        <Stack align="center" spacing={2}>
          <Heading fontSize={{ base: "xl", sm: "3xl" }}>ADD USERS</Heading>
          {/* <Text fontSize={{ base: "sm", sm: "md" }}>
            Send a magic link with your email below
          </Text> */}
        </Stack>
        <Box pos="relative">
          <Box
            pos="absolute"
            top="-7px"
            right="-7px"
            bottom="-7px"
            left="-7px"
            rounded="lg"
            bgGradient="linear(to-l, blue,#87CEEB)"
            transform="rotate(-2deg)"
          ></Box>
          <VStack
            as="form"
            pos="relative"
            spacing={8}
            p={6}
            bg={useColorModeValue("white", "gray.700")}
            rounded="lg"
            boxShadow="lg"
          >
            <FormControl id="email">
              <FormLabel>Name</FormLabel>
              <Input type="text" placeholder="Enter Name" rounded="md" />
            </FormControl>

            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" placeholder="Enter email" rounded="md" />
            </FormControl>

            <FormControl id="email">
              <FormLabel>Phone Number</FormLabel>
              <Input type="number" placeholder="Enter Phone" rounded="md" />
            </FormControl>
            <Button
              bg="blue.400"
              color="white"
              _hover={{
                bg: "blue.500",
              }}
              rounded="md"
              w="100%"
            >
              Submit
            </Button>
          </VStack>
        </Box>
      </Stack>

      <TableShow />
    </Container>
  );
};

export default Add_User;
