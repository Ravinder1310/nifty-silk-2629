import { AddIcon, CheckCircleIcon, DeleteIcon } from "@chakra-ui/icons";
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
  SlideFade,
  Stack,
  TagLabel,
  Text,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CartCrumb from "../components/cart/CartCrumb";
import cart from "./data";
import CartItem from "../components/cart/CartItem";
import OrderDetails from "../components/cart/OrderDetails";
import Address from "../components/cart/Address";
import Payment from "../components/cart/Payment";
import Navbar from "../components/Navbar";
import MobileNav from "../components/homepage/MobileNav";

function Cart() {
  const [page, setPage] = useState(1);
  const [bagTotal, setBagTotal] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const [total, setTotal] = useState(0);
  const { isOpen, onToggle } = useDisclosure();
  const [order, setOrder] = useState(false);
  const [loading, setLoading] = useState(false);
  

  const confirmOrder = () => {
    setLoading(true);
    setTimeout(completeOrder, 5000);
  };

  const completeOrder = () => {
    setLoading(false);
    setOrder(true);
    setTimeout(redirect, 3000);
  };

  const redirect = () => {
    window.location.href = "/";
  };

  useEffect(() => {
    let sumTotal = 0;
    let bagTotal = 0;
    let discount = 0;

    cart.map((item) => {
      sumTotal += item.price * item.qty;
    });

    cart.map((item) => {
      bagTotal += item.orginalPrice * item.qty;
    });

    cart.map((item) => {
      discount += item.orginalPrice - item.price;
    });

    setTotal(sumTotal);
    setBagTotal(bagTotal);
    setTotalDiscount(discount);
  }, [page]);
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)')

  if (order) {
    return (
      <Box mt={"100px"} textAlign="center" py={10}>
         {isLargerThan800?<Navbar />:<MobileNav />}
        <CheckCircleIcon boxSize={"50px"} color={"green.500"} />
        <Heading as="h2" size="xl" mt={6} mb={2}>
          Order placed successfully
        </Heading>
        <Text color={"gray.500"}>
          You will recieve an email with tracking information once your goods
          have shipped.
        </Text>
      </Box>
    );
  }

  if (page === 1) {
    return (
      <Box py={"100px"}>
         {isLargerThan800?<Navbar />:<MobileNav />}
        <CartCrumb onToggle={onToggle} page={page} setPage={setPage}/>
        <Box mt={6} px="100px">
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
                      quantity={item.qty}
                      img={item.img}
                      title={item.title}
                      price={item.price}
                      orginalPrice={item.orginalPrice}
                      discount={item.discount}
                    />
                  );
                })}
              </GridItem>
            <OrderDetails
              isOpen={isOpen}
              onToggle={onToggle}
              page={page}
              setPage={setPage}
              discount={totalDiscount}
              bagTotal={bagTotal}
              total={total}
            />
          </Grid>
        </Box>
      </Box>
    );
  }

  if (page === 2) {
    return (
      <Box py={"100px"} >
         {isLargerThan800?<Navbar />:<MobileNav />}
        <CartCrumb setPage={setPage} />
        <Box mt={6}>
          <Text mb={4} textAlign={"left"}>
            <b style={{marginLeft:"100px"}}>Address</b>
          </Text>
          <Grid
            templateAreas={{
              base: `"right"
                       "left"`,
              xl: `"left right"`,
            }}
            gridTemplateColumns={{ base: "1", xl: "80% 20%" }}
            gap={4}>
            <Address setPage={setPage} isOpen={isOpen} />
            <OrderDetails
              page={page}
              setPage={setPage}
              discount={totalDiscount}
              bagTotal={bagTotal}
              total={total}
            />
          </Grid>
        </Box>
      </Box>
    );
  }

  if (page === 3) {
    return (
      <Box py={"100px"}>
         {isLargerThan800?<Navbar />:<MobileNav />}
        <CartCrumb setPage={setPage} />
        <Box mt={6}>
          <Text mb={4} textAlign={"left"}>
            <b style={{marginLeft:"100px"}}>Payment Details</b>
          </Text>
          <Grid
            templateAreas={{
              base: `"right"
                       "left"`,
              xl: `"left right"`,
            }}
            gridTemplateColumns={{ base: "1", xl: "80% 20%" }}
            gap={4}>
            <Payment
              isOpen={isOpen}
              loading={loading}
              confirmOrder={confirmOrder}
            />
            <OrderDetails
              page={page}
              setPage={setPage}
              discount={totalDiscount}
              bagTotal={bagTotal}
              total={total}
            />
          </Grid>
        </Box>
      </Box>
    );
  }
}

export default Cart;
