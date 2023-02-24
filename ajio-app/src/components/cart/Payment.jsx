import { GridItem, SlideFade } from "@chakra-ui/react";
import React, { useState } from "react";
import {
  Flex,
  Grid,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  useColorModeValue,
  useToast,
  FormErrorMessage,
} from "@chakra-ui/react";

function Payment({ confirmOrder, loading, isOpen }) {
  return (
    <SlideFade in={isOpen} offsetY={"20px"}>
        <GridItem>
          <HStack>
            <Box w={"100%"}>
              <FormControl id="name" isRequired>
                <FormLabel>CARDHOLDER'S NAME</FormLabel>
                <Input type="text" />
              </FormControl>
            </Box>
            <Box>
              <FormControl isRequired id="CVV">
                <FormLabel>CVV</FormLabel>
                <Input
                  type="password"
                  onInput={(e) => (e.target.value = e.target.value.slice(0, 3))}
                />
              </FormControl>
            </Box>
          </HStack>
          <HStack mt={6}>
            <Box w={"100%"}>
              <FormControl id="email" isRequired>
                <FormLabel>CARD NUMBER</FormLabel>
                <Input
                  onInput={(e) => (e.target.value = e.target.value.slice(0, 16))}
                  type="number"
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl id="email" isRequired>
                <FormLabel>EXPIRATION DATE</FormLabel>
                <Flex alignItems={"center"}>
                  <Input
                    onInput={(e) => (e.target.value = e.target.value.slice(0, 2))}
                    type="number"
                  />
                  <Text mx={2}>/</Text>
                  <Input
                    onInput={(e) => (e.target.value = e.target.value.slice(0, 2))}
                    type="number"
                  />
                </Flex>
              </FormControl>
            </Box>
          </HStack>
          <Stack mt={6} spacing={10} pt={2}>
            <Button
              type="submit"
              isLoading={loading === true}
              onClick={() => confirmOrder()}
              loadingText="PLEASE WAIT WHILE WE CONFIRM YOUR PAYMENT"
              size="lg"
              variant="solid"
              _hover={{ bgColor: "#4b6480" }}
              color={"white"}
              bg={"#304154"}>
              CONFIRM ORDER
            </Button>
          </Stack>
        </GridItem>
    </SlideFade>
  );
}

export default Payment;
