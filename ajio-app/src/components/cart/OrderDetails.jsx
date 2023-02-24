import React, { useState } from "react";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Card,
  CloseButton,
  Flex,
  GridItem,
  Heading,
  SlideFade,
  Tag,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import { BsLightbulb, BsLightbulbFill } from "react-icons/bs";
import { WarningIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

function OrderDetails({ bagTotal, total, discount, page, setPage, onToggle }) {
  const [loading, setLoading] = useState(false);

  const CustomCard = React.forwardRef(({ children, ...rest }, ref) => (
    <Box p="1">
      <Tag ref={ref} {...rest}>
        {children}
      </Tag>
    </Box>
  ));

  const handleContinue = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (page === 1) {
        setPage(2);
      } else if (page === 2) {
        setPage(1);
        window.location.reload();
      } else if (page === 3) {
        setPage(2);
      }
      onToggle();
    }, "2000");
  };

  return (
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
          <Text>Discount</Text>
          <Text color={"#b09975"}>-₹{discount}</Text>
        </Flex>
        <Flex mb={2} justifyContent={"space-between"}>
          <Text>Delivery fee</Text>
          <Flex gap={1}>
            <Text as={"b"} color={"#b09975"}>
              Free
            </Text>
            <Text textDecoration={"line-through"}>₹99</Text>
          </Flex>
        </Flex>
        <Flex mb={2} justifyContent={"space-between"}>
          <Text>Grand total</Text>
          <Text as={"b"}>₹{total}</Text>
        </Flex>
        {page === 1 ? (
          <Button
            isLoading={loading === true}
            onClick={handleContinue}
            rightIcon={<HiArrowNarrowRight />}
            mt={4}>
            CONTINUE
          </Button>
        ) : (
          <Button
            isLoading={loading === true}
            onClick={handleContinue}
            leftIcon={<HiArrowNarrowLeft />}
            mt={4}>
            GO BACK
          </Button>
        )}
      </Card>
      <Alert status={"error"} textAlign={"left"} bgColor={"gray.200"} mt={2}>
        <AlertIcon />
        <Box>
          <AlertTitle fontSize={"sm"}>Return/Refund policy</AlertTitle>
          <Text fontSize={"xs"}>
            In case of return, we ensure quick refunds. Full amount will be
            refunded excluding Convenience Fee
          </Text>
          <Link target={"_blank"} to={"https://www.ajio.com/return-refund-policy"}>
            <AlertTitle color={"blue.500"} mt={2} fontSize={"xs"}>
              Read policy
            </AlertTitle>
          </Link>
        </Box>
        {/* <CloseButton
          alignSelf="flex-start"
          position="relative"
          right={-1}
          top={-1}
          onClick={onClose}
        /> */}
      </Alert>
    </GridItem>
  );
}

export default OrderDetails;
