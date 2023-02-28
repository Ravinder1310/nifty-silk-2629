import React from "react";
import { Routes, Route } from "react-router-dom";
import {Box} from '@chakra-ui/react'
import HomePage from "./HomePage";
import Cart from "../pages/cart";
import { Kids, Mens, Women } from "../pages/product";
import { MensCard } from "../components/products/mensSingle";
import { WomensCard } from "../components/products/womensSingle";
import { KidsCard } from "../components/products/kidsSingle";

const AllRoutes = () => {
  return (
    <div>
      <Box marginTop={"90px"}>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
         <Route path='/mens'element={<Mens/>}/>
         <Route path='/mens/:id'element={<MensCard/>}/>
         <Route path='/womens/:id'element={<WomensCard/>}/>
         <Route path='/kids/:id'element={<KidsCard/>}/>
         <Route path='/womens'element={<Women/>}/>
         <Route path='/kids'element={<Kids/>}/>
        <Route path="/cart" element={<Cart/>} /> 
      </Routes>
      </Box>
      </div>
  );
};

export default AllRoutes;