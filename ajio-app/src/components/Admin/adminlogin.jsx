import { Input, Button, Text, Flex } from "@chakra-ui/react";
import React from "react";
// import {useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Navbar from "../Navbar";
import AdminNavbar from "./AdminNavbar";

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
      <AdminNavbar />
      <Flex
        margin="auto"
        width="450px"
        padding="20px"
        shadow="dark-lg"
        direction="column"
        height="300px"
        justifyContent="space-evenly"
        marginTop="200px"
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
