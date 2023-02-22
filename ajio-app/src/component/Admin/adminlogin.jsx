import { useState } from "react";
import { Box, Input, Button, Text, Center, Flex } from "@chakra-ui/react";
import { useNavigate,Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
// import logo from "../../project.png";

const initial = {
  username: "",
  password: "",
};

function AdminLogin() {
  const { loginUser,authState } = useContext(AuthContext);
  const [admin, setAdmin] = useState(initial);
  const navigate = useNavigate();

  const handleAdmin = (e) => {
    const { name, value } = e.target;
    setAdmin({ ...admin, [name]: value });
  };
  const handleClick = (e) => {
    e.preventDefault();
    if (admin.Name === "Admin" && admin.password === "12345") { 
      navigate("/AdminDash");
    } else {
      alert("You are not Admin");
    }
    loginUser(admin.username)
  };

  if (authState.isAuth) {
    return <Navigate to="/AdminDash" />;
  }

  return (
    <>
      <Box bg="grey" p={4} color="white" height="100px">
        <Center>
          {/* <Image src={logo} boxSize="70px" width="15%" alt="" /> */}
        </Center>
      </Box>
      <Flex
        margin="auto"
        width="450px"
        padding="20px"
        shadow="dark-lg"
        direction="column"
        height="280px"
        justifyContent="space-evenly"
        marginTop="40px"
        alignItems="center">
        <Text fontWeight="bold">Only Admin Login</Text>
        <Input
          type="text"
          placeholder="Admin"
          padding="20px"
          maxWidth="80%"
          name="Name"
          value={admin.Name}
          onChange={handleAdmin}
        />
        <Input
          type="password"
          placeholder="Enter Password"
          name="password"
          padding="20px"
          maxWidth="80%"
          value={admin.password}
          onChange={handleAdmin}
        />
        <Button width="80%" onClick={handleClick} colorScheme="blue">
          <Text fontSize="18px" fontWeight="bold" color="white">
            Submit
          </Text>
        </Button>
      </Flex>
    </>
  );
}

export default AdminLogin;
