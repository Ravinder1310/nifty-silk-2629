import {
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    useToast,
} from '@chakra-ui/react'

import { useContext } from 'react';
import { useNavigate } from "react-router-dom"
import { userAuthContext } from './UserAuthContext';
import { FaUserCircle } from 'react-icons/fa';




export const AuthDropDown = () => {

    const { user, SignOut } = useContext(userAuthContext)
    const navigate = useNavigate();

    const toast = useToast()

    const handleLogOut = () => {
        SignOut()
            .then((res) => {
                navigate("/")
                toast({
                    position: "top",
                    title: 'Account created.',
                    description: "Sign Out Successfully.",
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                  })
            })
            .catch((err) => console.log(err.message))
    }


    return (
        <Menu>
            <MenuButton bg={"none"} _hover={{ bg: "none" }} _active={{ bg: "none" }} fontWeight={"500"} fontSize={"11px"} as={Button} rightIcon={<FaUserCircle />}>
                My Account
            </MenuButton>
            <MenuList>
                <MenuItem>{user?.phoneNumber}</MenuItem>
                <MenuItem>My Orders</MenuItem>
                <MenuItem>My Credits</MenuItem>
                <MenuItem>My Profile</MenuItem>
                <MenuItem>My Newsletters</MenuItem>
                <MenuItem>Refer a friend</MenuItem>
                <MenuItem>My Promos</MenuItem>
                <MenuItem onClick={handleLogOut}>Sign Out</MenuItem>
            </MenuList>
        </Menu>
    );
}