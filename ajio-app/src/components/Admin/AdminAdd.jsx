import {
  Box,
  Button,
  Center,
  FormControl,
  Select,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import AdminNavbar from "./AdminNavbar";

const initial = {
  image1: "",
  image2: "",
  image3: "",
  title: "",
  short_description: "",
  long_description: "",
  price: 0,
  reviews: 0,
  thumbnail1: "",
  thumbnail2: "",
  thumbnail3: "",
};
const AdminAdd = () => {
  const [add, setAdd] = useState(initial);
  const [cate, setCate] = useState("");

  const getAdd = async (add, cate) => {
    let res = await fetch(`https://odd-deer-hoodie.cyclic.app/${cate}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(add),
    });
    let data = await res.json();
    setAdd(data);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === "price" || name === "reviews") {
      setAdd({ ...add, [name]: +value });
    } else {
      setAdd({ ...add, [name]: value });
    }
  };

  const handleChanges = (e) => {
    e.preventDefault();
    setCate(e.target.value);
  };

  const addProduct = (e) => {
    e.preventDefault();
    getAdd(add, cate);
    setAdd(initial);
  };

  return (
    <div>
      <AdminNavbar />
      <Box width="80%" margin="auto" p={4} position="relative">
        <Heading marginTop="70px">
          <Center
            fontSize={{ base: "10px", sm: "18px", md: "20px", lg: "25px" }} marginBottom="20px">
            ADD PRODUCTS
          </Center>
        </Heading>
        <FormControl
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          width={{ base: "90%", sm: "80%", md: "80%", lg: "60%" }}
          margin="auto"
          p={10}
          marginBottom="20px">
          <FormLabel
            fontSize={{ base: "10px", sm: "14px", md: "16px", lg: "18px" }}
            margin="-1px">
            Image
          </FormLabel>
          <Input
            type="url"
            marginBottom="10px"
            placeholder="Product Image1"
            name="image1"
            value={add.images}
            onChange={handleChange}
          />
          
          <Select
            value={cate}
            placeholder="select category"
            onChange={handleChanges}
            marginBottom="10px">
            <option value="mens">Men</option>
            <option value="womens">Women</option>
            <option value="kids">Kids</option>

          </Select>
          <FormLabel
            fontSize={{ base: "10px", sm: "14px", md: "16px", lg: "18px" }}
            margin="-1px">
            Title
          </FormLabel>
          <Input
            type="text"
            marginBottom="10px"
            placeholder="Product title"
            name="title"
            value={add.title}
            onChange={handleChange}
          />
          <FormLabel
            fontSize={{ base: "10px", sm: "14px", md: "16px", lg: "18px" }}
            margin="-1px">
            Short_Description
          </FormLabel>
          <Input
            type="text"
            marginBottom="10px"
            placeholder="Product short_description"
            name="short_description"
            value={add.short_description}
            onChange={handleChange}
          />
         
          <FormLabel
            fontSize={{ base: "10px", sm: "14px", md: "16px", lg: "18px" }}
            margin="-1px">
            Price
          </FormLabel>
          <Input
            marginBottom="10px"
            placeholder="Product Price"
            name="price"
            value={add.price}
            onChange={handleChange}
          />
          <FormLabel
            fontSize={{ base: "10px", sm: "14px", md: "16px", lg: "18px" }}
            margin="-1px">
            Reviews
          </FormLabel>
          <Input
            marginBottom="10px"
            placeholder="Product reviews"
            name="reviews"
            value={add.reviews}
            onChange={handleChange}
          />
          
        </FormControl>
        <Center>
          <Button colorScheme="blue" onClick={addProduct} marginBottom="20px">
            ADD PRODUCT
          </Button>
        </Center>
      </Box>
    </div>
  );
};

export default AdminAdd;
