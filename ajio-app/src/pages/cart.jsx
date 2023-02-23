import { DeleteIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CartCrumb from "../components/cart/CartCrumb";
import cart from "./data";
import CartItem from "../components/cart/CartItem";

function Cart() {
  const [page, setPage] = useState(1);
  const [bagTotal, setBagTotal] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    let sumTotal = 0;
    let bagTotal = 0;

    cart.map((item) => {
      sumTotal += item.price * item.qty;
    });

    cart.map((item) => {
      bagTotal += item.orginalPrice * item.qty;
    });

    setTotal(sumTotal);
    setBagTotal(bagTotal);

  }, [page]);



  return (
    <Box py={12} px={"180px"}>
      <CartCrumb setPage={setPage} />
      <Box mt={6}>
        <Text mb={4} textAlign={"left"}>
          <b>My Bag</b> ({cart.length} items)
        </Text>
        <Grid
          templateAreas={{
            base: `"right"
                   "left"`,
            xl: `"left right"`,
          }}
          gridTemplateColumns={{ base: "1", xl: "80% 20%" }}
          gap={4}>
          <GridItem area={"left"}>
            {cart.map((item) => {
              return (
                <CartItem
                  img={item.img}
                  title={item.title}
                  price={item.price}
                  orginalPrice={item.orginalPrice}
                  discount={item.discount}
                />
              );
            })}
          </GridItem>
          <GridItem area={"right"}>
            <Card
              maxW={"300px"}
              textAlign={"left"}
              h={"max-content"}
              variant={"outline"}
              p={6}>
              <Heading mb={4} fontSize={"lg"}>
                Order Details
              </Heading>
              <Flex mb={2} justifyContent={"space-between"}>
                <Text>Bag total</Text>
                <Text>₹{bagTotal}</Text>
              </Flex>
              <Flex mb={2} justifyContent={"space-between"}>
                <Text>Delivery fee</Text>
                <Flex gap={1}>Free<Text textDecoration={"line-through"}>₹99</Text></Flex>
              </Flex>
              <Flex mb={2} justifyContent={"space-between"}>
                <Text>Grand total</Text>
                <Text>₹{bagTotal}</Text>
              </Flex>
            </Card>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}

export default Cart;
