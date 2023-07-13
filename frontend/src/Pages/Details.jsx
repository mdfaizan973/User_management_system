import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import {
  Container,
  Flex,
  Stack,
  VStack,
  HStack,
  Divider,
  useColorModeValue,
  Avatar,
  Text,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
export default function Details() {
  return (
    <div style={{ margin: "150px" }}>
      <NotificationsList />
    </div>
  );
}

const notifications = [
  {
    notification: `It's <span style="font-weight: 600">Dan Abrahmov's</span> birthday. Wish him well!`,
    dateTime: "2 days ago",
    userName: "Dan Abrahmov",
    userAvatar: "https://bit.ly/dan-abramov",
    isOnline: true,
  },
];

const NotificationsList = () => {
  const { id } = useParams();
  const [userid, setUserId] = useState({});
  const { users } = useSelector((store) => store.userReducer); // getting data

  useEffect(() => {
    const userDetailes = users.find((ele, i) => ele._id == id);
    userDetailes && setUserId(userDetailes);
  }, []);
  // console.log(userid);

  return (
    <Container maxW="5xl" p={{ base: 5, md: 10 }}>
      <VStack
        boxShadow={useColorModeValue(
          "2px 6px 8px rgba(160, 174, 192, 0.6)",
          "2px 6px 8px rgba(9, 17, 28, 0.9)"
        )}
        bg={useColorModeValue("gray.100", "gray.800")}
        rounded="md"
        overflow="hidden"
        spacing={0}
      >
        <Fragment key={"index"}>
          <Flex w="100%" h="250px" justify="space-between" alignItems="center">
            <Stack spacing={0} direction="row" alignItems="center">
              <Flex p={4}>
                <Avatar
                  size="2xl"
                  src={
                    "https://cdn3d.iconscout.com/3d/premium/thumb/user-3711850-3105265.png"
                  }
                />
              </Flex>
              <Flex direction="column" p={2}>
                <HStack>
                  <Text fontSize={"25px"} />
                  <Text fontSize={"md"}>ID : {userid._id}</Text>
                  <Text fontSize={"25px"} />
                  <Text fontSize={"25px"} />

                  <Text fontSize={"30px"} color={"red"}>
                    {userid.name}
                  </Text>
                  <Text fontSize={"25px"} />
                  <Text fontSize={"25px"} />

                  <Text fontSize={"30px"} color={"green"}>
                    {userid.email}
                  </Text>
                  <Text fontSize={"25px"} />
                  <Text fontSize={"25px"} />

                  <Text fontSize={"30px"} />
                  <Text fontSize={"25px"} />

                  <Text fontSize={"20px"} color={"blue"}>
                    {userid.phone}
                  </Text>
                </HStack>
              </Flex>
            </Stack>
          </Flex>
        </Fragment>
      </VStack>
    </Container>
  );
};

// export default NotificationsList;
