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
  GridItem,
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
  SlideFade,
} from "@chakra-ui/react";

function Address({ page, setPage, isOpen, onToggle }) {
  const [fname, setfname] = useState("");
  const [add, setAdd] = useState("");
  const [app, setApp] = useState("");
  const [city, setCity] = useState("");
  const [num, setNum] = useState("");
  const [loading, setLoading] = useState(false);

  const nameError = fname === "";
  const addError = add === "";
  const appError = app === "";
  const cityError = city === "";

  const handleForm = () => {
    if (fname === "" || add === "" || app === "" || city === "") {
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setPage(3);
    }, "2000");
    onToggle();
  };

  return (
    <SlideFade in={isOpen} offsetY={"20px"} >
      <GridItem ml={"100px"}>
        <Stack spacing={4}>
          <HStack>
            <Box>
              <FormControl id="firstName" isInvalid={nameError} isRequired>
                <FormLabel>First name</FormLabel>
                <Input
                  onChange={(e) => setfname(e.target.value)}
                  aria-required={true}
                  type="text"
                />
                {!nameError ? null : (
                  <FormErrorMessage>This field is required.</FormErrorMessage>
                )}
              </FormControl>
            </Box>
            <Box>
              <FormControl id="lastName">
                <FormLabel>Last name</FormLabel>
                <Input type="text" />
              </FormControl>
            </Box>
          </HStack>
          <FormControl id="email" isInvalid={addError} isRequired>
            <FormLabel>Address</FormLabel>
            <Input onChange={(e) => setAdd(e.target.value)} type="text" />
            {!addError ? null : (
              <FormErrorMessage>This field is requied.</FormErrorMessage>
            )}
          </FormControl>
          <FormControl id="email" isInvalid={appError} isRequired>
            <FormLabel>Apartment, suite, etc</FormLabel>
            <Input onChange={(e) => setApp(e.target.value)} type="text" />
            {!appError ? null : (
              <FormErrorMessage>This field is requied.</FormErrorMessage>
            )}
          </FormControl>
          <HStack>
            <Box>
              <FormControl id="firstName" isInvalid={cityError} isRequired>
                <FormLabel>City</FormLabel>
                <Input onChange={(e) => setCity(e.target.value)} type="text" />
                {!cityError ? null : (
                  <FormErrorMessage>This field is requied.</FormErrorMessage>
                )}
              </FormControl>
            </Box>
            <Box>
              <FormControl id="lastName">
                <FormLabel>State</FormLabel>
                <Input type="text" />
              </FormControl>
            </Box>
            <Box>
              <FormControl id="lastName">
                <FormLabel>Postal code</FormLabel>
                <Input type="text" />
              </FormControl>
            </Box>
          </HStack>
          <FormControl id="password">
            <FormLabel>Phone Number</FormLabel>
            <InputGroup>
              <Input
                w={"100%"}
                onChange={(e) => setNum(e.target.value)}
                type={"number"}
                onInput={(e) => (e.target.value = e.target.value.slice(0, 10))}
              />
              <InputRightElement h={"full"}></InputRightElement>
            </InputGroup>
          </FormControl>
          <Stack spacing={10} pt={2}>
            <Button
              isLoading={loading}
              onClick={() => handleForm()}
              loadingText="Saving Address"
              size="lg"
              variant="solid"
              _hover={{ bgColor: "#4b6480" }}
              color={"white"}
              bg={"#304154"}>
              PROCEED TO PAYMENT
            </Button>
          </Stack>
        </Stack>
      </GridItem>
    </SlideFade>
  );
}

export default Address;
