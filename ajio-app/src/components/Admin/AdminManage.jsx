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
import AdminNavbar from "./AdminNavbar";
import { useEffect } from "react";

const AdminManage = () => {
  const [deletes, setDelete] = useState([]);
  const [cate, setCate] = useState("");
  const [total, setTotal] = useState(0);

  const getdata = async (cate) => {
    let res = await fetch(`https://odd-deer-hoodie.cyclic.app/${cate}`);
    let data = await res.json();
    setDelete(data);
  };

  const AdminDelete = async (id, cate) => {
    await fetch(`https://odd-deer-hoodie.cyclic.app/${cate}/${id}`, {
      method: "DELETE",
    });
  };

  const AdminUpdate = async (id, cate) => {
    let updatePrice = window.prompt("Enter new price");
    let newPrice = {
      price: +updatePrice,
    };
    console.log(newPrice);
    await fetch(`https://odd-deer-hoodie.cyclic.app/${cate}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPrice),
    });
  };

  const handleChange = (e) => {
    setCate(e.target.value);
  };

  useEffect(() => {
    getdata(cate);
    setTotal(+deletes.reduce((acc, el) => acc + el.price, 0));
  }, [deletes, cate]);

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
          Total Product : {deletes.length}
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
        gap="25px"
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
        {deletes.map((e) => (
          <Box shadow="md" p={4} key={e.id} fontWeight="bold" zIndex={-1} textAlign="center">
            <Image width="80%" src={e.images} alt="" />
            <Text>{e.brand}</Text>
            <Text>{e.nameCls}</Text>
            <Text>{e.price}</Text>
            <p className="mens_discount">({e.discount}% off)</p>
            <p className="offer_price">Offer price ₹{e.price-80}</p>
            <Button
              fontSize={{ base: "18px", sm: "12px", md: "15px", lg: "14px" }}
              colorScheme="blue"
              onClick={() => AdminDelete(e._id, cate)}>
              Delete
            </Button>
            <Button
              fontSize={{ base: "18px", sm: "12px", md: "15px", lg: "14px" }}
              colorScheme="blue"
              onClick={() => AdminUpdate(e._id, cate)}
              margin="10px">
              Update
            </Button>
          </Box>
        ))}
      </Grid>
    </div>
  );
};

export default AdminManage;
