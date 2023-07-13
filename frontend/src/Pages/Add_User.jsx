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
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUserstData } from "../Redux/UserReducer/action";

const initialState = {
  name: "",
  email: "",
  phone: "",
};

const Add_User = () => {
  const [adData, setAddData] = useState(initialState);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUserstData(adData));
    setAddData(initialState);
  };
  return (
    <Container maxW="5xl" mt={"100px"} p={{ base: 5, md: 10 }}>
      <Stack spacing={4} maxW={{ base: "20rem", sm: "25rem" }} margin="0 auto">
        <Stack align="center" spacing={2}>
          <Heading fontSize={{ base: "xl", sm: "3xl" }}>ADD USERS</Heading>
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
              <Input
                type="text"
                placeholder="Enter Name"
                name="name"
                onChange={(e) => handleChange(e)}
                value={adData.name}
                rounded="md"
              />
            </FormControl>

            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={(e) => handleChange(e)}
                value={adData.email}
                rounded="md"
              />
            </FormControl>

            <FormControl id="email">
              <FormLabel>Phone Number</FormLabel>
              <Input
                type="number"
                placeholder="Enter Phone"
                name="phone"
                onChange={(e) => handleChange(e)}
                value={adData.phone}
                rounded="md"
              />
            </FormControl>
            <Button
              bg="blue.400"
              color="white"
              _hover={{
                bg: "blue.500",
              }}
              rounded="md"
              w="100%"
              onClick={handleSubmit}
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
