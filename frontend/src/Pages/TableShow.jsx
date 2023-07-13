import { Fragment } from "react";
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
const TableShow = () => {
  let a = [1, 2, 3, 4, 5];
  return (
    <Container maxW="5xl" p={{ base: 5, md: 10 }}>
      <Flex justify="left" mb={3}>
        <chakra.h3 fontSize="2xl" fontWeight="bold" textAlign="center">
          All Users
        </chakra.h3>
      </Flex>

      {a.map((ele, i) => (
        <VStack
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
                  1
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
                  Md Faizan
                </chakra.h3>
              </HStack>
              <Stack
                spacing={2}
                direction="row"
                fontSize={{ base: "sm", sm: "md" }}
                justifySelf="flex-end"
                alignItems="center"
              >
                <RouterLink to={"/details"}>
                  <Button colorScheme="green">
                    <FaRegEye /> - View
                  </Button>
                </RouterLink>
                <Button colorScheme="blue">
                  <FaEdit /> - Edit
                </Button>
                <Button colorScheme="red">
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
