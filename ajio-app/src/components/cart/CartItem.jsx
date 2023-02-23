import { DeleteIcon } from '@chakra-ui/icons';
import { Badge, Box, Button, Card, CardBody, CardFooter, Flex, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react'
import { BsFillHeartFill } from 'react-icons/bs';

function CartItem({ img, title, price, orginalPrice, discount }) {
  return (
    <Card
      mb={6}
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline">
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "150px" }}
        src={img}
      />

      <Stack w={"100%"}>
        <CardBody>
          <Flex justifyContent={"space-between"}>
            <Text textAlign={"left"} size="md">
              {title}
            </Text>

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
                  color={"black"}
                  mt={2}
                  fontSize={"lg"}
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
  );
}

export default CartItem