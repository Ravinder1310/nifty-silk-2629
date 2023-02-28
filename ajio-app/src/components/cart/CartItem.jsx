import { DeleteIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Image,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsFillHeartFill } from "react-icons/bs";
import MobileNav from "../homepage/MobileNav";
import Navbar from "../Navbar";

function CartItem({ img, title, price, orginalPrice, discount, quantity }) {
  const [qty, setQty] = useState(quantity);
  

  const handleQuantity = (value) => {
    setQty(qty + value);
  };

  return (
    <Box>
     
    <Card
      mb={6}
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline">
      <Image objectFit="cover" maxW={{ base: "100%", sm: "150px" }} src={img} />

      <Stack w={"100%"}>
        <CardBody>
          <Flex justifyContent={"space-between"}>
            <Flex flexWrap={"wrap"}>
              <Text mb={4} w={"250px"} mr={12} textAlign={"left"} size="md">
                {title}
              </Text>
              <Flex h={"max-content"} alignItems={"center"}>
                <Button
                size={"sm"}
                  isDisabled={qty === 1}
                  onClick={() => handleQuantity(-1)}
                  variant="solid"
                  _hover={{ bgColor: "#4b6480" }}
                  color={"white"}
                  bgColor={"#304154"}>
                  -
                </Button>
                <Text mx={2} alignSelf={"center"}>{qty}</Text>
                <Button
                size={"sm"}
                  onClick={() => handleQuantity(1)}
                  variant="solid"
                  _hover={{ bgColor: "#4b6480" }}
                  color={"white"}
                  bgColor={"#304154"}>
                  +
                </Button>
              </Flex>
            </Flex>

            <Box>
              {discount ? (
                <Flex gap={1}>
                  <Text color={"#b09975"} textDecoration={"line-through"}>
                    ₹{orginalPrice}
                  </Text>
                  <Text color={"#b09975"}>{discount}</Text>
                </Flex>
              ) : null}
              <Box textAlign={"right"}>
                <Badge
                  px={2}
                  color={"black"}
                  mt={2}
                  fontSize={"xl"}
                  colorScheme="purple">
                  ₹{price}
                </Badge>
              </Box>
            </Box>
          </Flex>
        </CardBody>

        <Flex justifyContent={"end"}>
          <CardFooter gap={4}>
            <Button
              leftIcon={<DeleteIcon />}
              variant="solid"
              _hover={{ bgColor: "#4b6480" }}
              color={"white"}
              bgColor={"#304154"}>
              Delete
            </Button>
            <Button
              leftIcon={<BsFillHeartFill />}
              variant="solid"
              _hover={{ bgColor: "#4b6480" }}
              color={"white"}
              bgColor={"#304154"}>
              Move to Wishlist
            </Button>
          </CardFooter>
        </Flex>
      </Stack>
    </Card>
    </Box>
  );
}

export default CartItem;
