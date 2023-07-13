import React from "react";

import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
export default function Not_Found() {
  return (
    <Box textAlign="center" py={10} px={6} mt={"100px"}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, teal.400, teal.600)"
        backgroundClip="text"
      >
        404
      </Heading>
      <Text fontSize="30px" mt={3} mb={2}>
        Page Not Found
      </Text>
      <Text color={"gray.500"} mb={6}>
        The page you're looking for does not seem to exist
      </Text>

      <RouterLink to="/">
        <Button
          colorScheme="teal"
          bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
          color="white"
          variant="solid"
        >
          Go to Home
        </Button>
      </RouterLink>
    </Box>
  );
}
