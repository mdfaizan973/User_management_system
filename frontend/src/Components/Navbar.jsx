import React from "react";
import {
  Link,
  Box,
  Flex,
  Stack,
  HStack,
  Heading,
  Container,
  Icon,
  Text,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const linkColor = "cyan.400";

  return (
    <>
      <Box
        as="header"
        bg={useColorModeValue("white", "gray.800")}
        px={4}
        boxShadow={useColorModeValue(
          "0 4px 6px rgba(160, 174, 192, 0.6)",
          "0 4px 6px rgba(9, 17, 28, 0.9)"
        )}
        position="fixed"
        width="100%"
        zIndex="55"
        top="0"
      >
        <Container maxW="1280px" p={{ base: 0, md: "inherit" }}>
          <Flex
            h={16}
            alignItems="center"
            justifyContent="space-between"
            mx="auto"
          >
            <HStack spacing={3} alignItems="center">
              <Link href="#">
                <Heading
                  as="h1"
                  fontSize={["lg", "md", "xl", "3xl"]}
                  cursor="pointer"
                >
                  <Flex position="relative">
                    <HStack d={{ base: "none", sm: "flex" }} spacing={2}>
                      <RouterLink to="/">
                        <Text textShadow="1px 2px #179c40">
                          UserMana
                          <Box
                            as="span"
                            position="relative"
                            _before={{
                              content: '""',
                              bg: linkColor,
                              position: "absolute",
                              top: "-0.15rem",
                              right: "-0.15rem",
                              bottom: "-0.15rem",
                              left: "-0.15rem",
                              transform: "rotate(-4deg)",
                            }}
                          >
                            <Box
                              as="span"
                              textShadow="1px 2px #179c40"
                              color={useColorModeValue("white", "black")}
                              position="relative"
                            >
                              gementSystem
                            </Box>
                          </Box>
                        </Text>
                      </RouterLink>
                    </HStack>
                  </Flex>
                </Heading>
              </Link>
            </HStack>
            <HStack spacing={2} alignItems="center">
              <RouterLink to="/add_users">
                <Button colorScheme="blue">Add User</Button>
              </RouterLink>

              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
