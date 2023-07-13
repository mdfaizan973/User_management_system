import { Fragment, useEffect } from "react";
import {
  Container,
  Box,
  chakra,
  Flex,
  Stack,
  VStack,
  HStack,
  Grid,
  Icon,
  Divider,
  Link,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { Link as RouterLink } from "react-router-dom";
import {
  FaRegComment,
  FaRegHeart,
  FaRegEye,
  FaEdit,
  FaBitbucket,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deleteUsers, usersData } from "../Redux/UserReducer/action";
import { toast } from "react-toastify";
import Add_User from "./Add_User";
const TableShow = () => {
  const { users } = useSelector((store) => store.userReducer); // getting data
  // console.log(users);

  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(usersData());
    usersData(dispatch);
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteUsers(id));
    toast.error("User deleted successfully");
    setTimeout(() => {
      window.location.reload();
    }, 2000);
    // console.log(id);
  };

  const handleEdit = (id) => {
    // console.log(id);

    toast.success("Look at your form");
  };

  return (
    <Container maxW="5xl" p={{ base: 5, md: 10 }}>
      <Flex justify="left" mb={3}>
        <chakra.h3 fontSize="2xl" fontWeight="bold" textAlign="center">
          All Users
        </chakra.h3>
      </Flex>

      {users.map((ele, i) => (
        <VStack
          key={ele._id}
          border="1px solid"
          borderColor="gray.400"
          rounded="md"
          overflow="hidden"
          spacing={0}
        >
          <Fragment key={"index"}>
            <Grid
              templateRows={{ base: "auto auto", md: "auto" }}
              w="100%"
              templateColumns={{ base: "unset", md: "4fr 2fr 2fr" }}
              p={{ base: 2, sm: 4 }}
              gap={3}
              alignItems="center"
            >
              <Box gridColumnEnd={{ base: "span 2", md: "unset" }}>
                <chakra.h3 isExternal fontWeight="bold" fontSize="lg">
                  {ele._id}
                </chakra.h3>
                <chakra.p fontWeight="medium" fontSize="sm"></chakra.p>
              </Box>
              <HStack
                spacing={{ base: 0, sm: 3 }}
                alignItems="center"
                fontWeight="medium"
                fontSize={{ base: "xs", sm: "sm" }}
                // color={useColorModeValue("gray.600", "gray.300")}
              >
                <chakra.h3 isExternal fontWeight="bold" fontSize="lg">
                  {ele.name.toUpperCase()}
                </chakra.h3>
              </HStack>
              <Stack
                spacing={2}
                direction="row"
                fontSize={{ base: "sm", sm: "md" }}
                justifySelf="flex-end"
                alignItems="center"
              >
                <RouterLink to={`/details/${ele._id}`}>
                  <Button colorScheme="green">
                    <FaRegEye /> - View
                  </Button>
                </RouterLink>
                <RouterLink to={`/add_users/${ele._id}`}>
                  <Button
                    colorScheme="blue"
                    onClick={() => handleEdit(ele._id)}
                  >
                    <FaEdit /> - Edit
                  </Button>
                </RouterLink>

                <Button colorScheme="red" onClick={() => handleDelete(ele._id)}>
                  <FaBitbucket /> - Delete
                </Button>
              </Stack>
            </Grid>
          </Fragment>
        </VStack>
      ))}
    </Container>
  );
};

export default TableShow;
