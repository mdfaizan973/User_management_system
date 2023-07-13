import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SimpleGrid } from "@chakra-ui/react";
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
import { usersData } from "../Redux/UserReducer/action";

const Home = () => {
  const { users } = useSelector((store) => store.userReducer); // getting data
  console.log(users);

  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(usersData());
    usersData(dispatch);
  }, []);
  return (
    <div>
      <SimpleGrid columns={[1, 2, 4]} spacing="40px">
        {users.map((ele, i) => (
          <Container maxW="5xl" p={{ base: 5, md: 6 }} mt={"50px"}>
            <Stack
              w="17rem"
              spacing={2}
              p={4}
              border="1px solid"
              key={ele._id}
              // borderColor={useColorModeValue("gray.400", "gray.600")}
              rounded="md"
              margin="0 auto"
              _hover={
                {
                  // boxShadow: useColorModeValue(
                  //   "0 4px 6px rgba(160, 174, 192, 0.6)",
                  //   "0 4px 6px rgba(9, 17, 28, 0.4)"
                  // ),
                }
              }
            >
              <HStack justifyContent="space-between" alignItems="baseline">
                <Tooltip
                  label="User Logo"
                  aria-label="User Logo"
                  placement="right-end"
                  size="sm"
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
                Name : {ele.name}
              </chakra.h1>
              <Text fontSize="md" color="gray.500">
                Phone : {ele.phone}
              </Text>
              <Divider />
              <Text fontSize="md" color="gray.500">
                Email : {ele.email}
              </Text>
            </Stack>
          </Container>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default Home;
