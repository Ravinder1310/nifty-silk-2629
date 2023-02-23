import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import {ChevronRightIcon} from "@chakra-ui/icons"
import React from 'react'

function CartCrumb({ setPage }) {
  
  const handleClick = value => {
    setPage(value)
  }

  return (
    <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500" />}>
      <BreadcrumbItem>
        <BreadcrumbLink onClick={()=>handleClick(1)}>Bag</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink onClick={()=>handleClick(2)}>Delivery Details</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink onClick={()=>handleClick(3)}>Payment</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}

export default CartCrumb;