import {
  Box,
  Button,
  Divider,
  DrawerBody,
  DrawerContent,
  DrawerCloseButton,
  DrawerOverlay,
  Heading,
  HStack,
  Image,
  useDisclosure,
  Drawer,
  VStack,
  Center,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import logo from "../../logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { useRef } from "react";

const AdminNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  let navigate = useNavigate();
  return (
    <div>
      <Box bg="white" p={4} position="fixed" z-index="1" width="100%" top="0px" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
        <HStack
          gap={10}
          padding={2}
          justifyContent="space-between"
          height={"28px"}>
          <Box>
            <Center>
              <Image src={logo} w={"60px"} />
            </Center>
          </Box>
          <Box>
            <Center>
              <Text color={"black"} fontWeight={700} fontSize={20}>
                ADMIN_PANEL
              </Text>
            </Center>
          </Box>
          <Box>
            <Button
              ref={btnRef}
              bg="black"
              onClick={onOpen}
              color="white">
              <RxHamburgerMenu />
            </Button>
            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              finalFocusRef={btnRef}
              size="sm">
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerBody>
                  <Box
                    display="flex"
                    gap={"10px"}
                    justifyContent="space-evenly"
                    alignItems="center"
                    margin="20px">
                    <Image
                      src={logo}
                      alt=""
                      width={{ base: "35%", sm: "30%", mg: "40%", lg: "30%" }}
                      height={{ base: "65px", sm: "70px", lg: "120px" }}
                      borderRadius="50%"
                    />
                    <Heading
                      fontSize={{
                        base: "12px",
                        sm: "14px",
                        md: "20px",
                        lg: "30px",
                      }}>
                      {" "}
                      ADMIN PANEL
                    </Heading>
                  </Box>
                  <Divider />
                  <VStack
                    gap={2}
                    margin="10px"
                    alignContent="start"
                    alignItems="flex-end">
                    <Button
                      fontSize={{ base: "9px", sm: "18px" }}
                      width="100%"
                      onClick={() => navigate("/AdminDash")}>
                      ADMIN DASHBOARD
                    </Button>
                    <Button
                      fontSize={{ base: "9px", sm: "18px" }}
                      width="100%"
                      onClick={() => navigate("/Adminadd")}>
                      ADMIN ADD PRODUCT
                    </Button>
                    <Button
                      fontSize={{ base: "9px", sm: "18px" }}
                      width="100%"
                      onClick={() => navigate("/AdminManage")}>
                      ADMIN MANAGER
                    </Button>
                    <Button
                      fontSize={{ base: "9px", sm: "18px" }}
                      width="100%"
                      onClick={() => navigate("/")}>
                      USER SIDE
                    </Button>
                  </VStack>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Box>
        </HStack>
      </Box>
    </div>
  );
};

export default AdminNavbar;
