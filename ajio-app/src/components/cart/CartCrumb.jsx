import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import React from "react";

function CartCrumb({ setPage, onToggle }) {
  const handleClick = (value) => {
    setPage(value);
    if (value === 1) {
      window.location.reload();
    }
    if (value === 2 || value === 3) {
      onToggle();
    }
  };

  return (
    <Box ml={"100px"}>
    <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500"  />}>
      <BreadcrumbItem>
        <BreadcrumbLink onClick={() => handleClick(1)}>Bag</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink onClick={() => handleClick(2)}>
          Delivery Details
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink onClick={() => handleClick(3)}>Payment</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
    </Box>
  );
}

export default CartCrumb;
