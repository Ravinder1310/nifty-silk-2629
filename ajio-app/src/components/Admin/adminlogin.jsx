import { Input, Button, Text, Flex, Box, Center, Image } from "@chakra-ui/react";
import React from "react";
// import {useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import logo from "../../logo.png";

const AdminLogin = () => {
  const { adminData, setAdminData, adminLogin } = React.useContext(AuthContext);

  const handleAdminChange = (event) => {
    setAdminData({ ...adminData, [event.target.name]: event.target.value });
  };

  const handleAdminSubmit = (event, adminData) => {
    event.preventDefault();
    adminLogin(adminData);
  };

  return (
    <>
      <Box bg="grey" p={4} color="white" width="100%" height="100px">
        <Center>
          <Image src={logo} boxSize="70px" width="15%" alt="" />
        </Center>
      </Box>
      <Flex
        margin="auto"
        width={{base:"300px",sm:"350px",md:"400px",lg:"450px"}}
        padding="20px"
        shadow="dark-lg"
        direction="column"
        height="300px"
        justifyContent="space-evenly"
        marginTop="60px"
        alignItems="center">
        <Text fontWeight="800" fontSize="20px">
          ADMIN LOGIN
        </Text>
        <Input
          type="text"
          placeholder="Admin"
          padding="20px"
          maxWidth="80%"
          name="email"
          value={adminData.email}
          onChange={(event) => handleAdminChange(event)}
        />
        <Input
          type="password"
          placeholder="Enter Password"
          name="password"
          padding="20px"
          maxWidth="80%"
          value={adminData.password}
          onChange={(event) => handleAdminChange(event)}
        />
        <Button
          width="80%"
          onClick={(event) => handleAdminSubmit(event, adminData)}
          colorScheme="blue">
          <Text fontSize="18px" fontWeight="bold" color="white">
            Submit
          </Text>
        </Button>
      </Flex>
    </>
  );
};

export default AdminLogin;
