import { useState } from "react";
import {
  Box,
  Text,
  Image,
  Grid,
  Button,
  Select,
  Center,
} from "@chakra-ui/react";
import { useEffect } from "react";
import AdminNavbar from "./AdminNavbar";
import Navbar from "../Navbar";

const AdminDash = () => {
  const [dash, setDash] = useState([]);
  const [cate, setCate] = useState("");
  const [total, setTotal] = useState(0);

  const getdata = async (cate) => {
    let res = await fetch(`https://odd-deer-hoodie.cyclic.app/${cate}`);
    let data = await res.json();
    setDash(data);
  };

  const handleChange = (e) => {
    setCate(e.target.value);
  };
  useEffect(() => {
    getdata(cate);
    setTotal(dash.reduce((acc, el) => acc + el.price, 0));
  }, [dash, cate]);

  return (
    <div>
      <AdminNavbar />
      <Box
        position={"relative"}
        zIndex={-1}
        display="flex"
        flexDirection={{ base: "column", sm: "row", md: "row", lg: "row" }}
        justifyContent="space-evenly"
        marginTop="90px">
        <Button
          disabled
          colorScheme="teal"
          variant="solid"
          margin="5px"
          fontSize={{ base: "10px", sm: "18px" }}>
          Total Product : {dash.length}
        </Button>
        <Button
          disabled
          colorScheme="teal"
          variant="solid"
          margin="5px"
          fontSize={{ base: "10px", sm: "18px" }}>
          Total Inventory : ₹ {total}
        </Button>
      </Box>
      <Box
        zIndex="-1"
        width="30%"
        margin="auto"
        marginBottom="20px"
        fontSize={{ base: "10px", sm: "18px" }}
        textAlign="center">
        <Center fontWeight="bold">Select Product to see details</Center>
        <Select
          width="40%"
          margin="auto"
          value={cate}
          placeholder="select"
          onChange={handleChange}
          size={{ base: "xs", sm: "sm", md: "md", lg: "lg" }}>
          <option value="mens">Mens</option>
          <option value="womens">Womens</option>
          <option value="kids">Kids</option>
        </Select>
      </Box>
      <Grid
        gap="30px"
        width="90%"
        margin="auto"
        cursor="pointer"
        marginBottom="20px"
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(2,1fr)",
          md: "repeat(3,1fr)",
          lg: "repeat(4,1fr)",
        }}>
        {dash.map((e) => (
          <Box shadow="md" p={5} key={e.id} fontWeight="bold">
            <Box position="relative" zIndex="-1" >
              <Image src={e.images} alt="image 1 starting" />
              {/* <Box
                _hover={{ display: "none" }}
                position={"absolute"}
                top="0px"
                left="0px">
                <Image src={e.image2} alt="image 2 starting" />
              </Box> */}
            </Box>
            {/* <Link to={`/book/${book.id}`}> */}
            {/* <img src={e.images} alt='Error' width={"100%"}/> */}
            {/* </Link> */}
            <h3>{e.brand}</h3>
            <p>{e.nameCls}</p>
            <div>
            <p className="price">₹{e.price}</p>
            <p className="original_price">₹{e.orginal_price}</p>
            <p className="mens_discount">({e.discount}% off)</p>
            </div>
            <p className="offer_price">Offer price ₹{e.price-80}</p>
            {/* <Link to={`/book/${book.id}/edit`}>
            <button>Edit</button>
            </Link> */}
          </Box>
        ))}
      </Grid>
    </div>
  );
};

export default AdminDash;
