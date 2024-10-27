import { Button, HStack, Spacer, useColorMode } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode(); // Get color mode and toggle function

  return (
    <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"} spacing={8}>
      <Button variant={"unstyled"} color={"white"}>
        <Link to="/">Home</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"}>
        <Link to="/exchanges">Exchanges</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"}>
        <Link to="/coins">Coins</Link>
      </Button>

      {/* Spacer to push login and signup to the right */}
      <Spacer />

      <Button variant={"unstyled"} color={"white"}>
        <Link to="/login">Login</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"}>
        <Link to="/signup">SignUp</Link>
      </Button>

      {/* Background color switch button */}
      <Button
        variant={"outline"}
        colorScheme={"whiteAlpha"}
        onClick={toggleColorMode}
        ml={4}
      >
        Switch to {colorMode === "light" ? "Dark" : "Light"} Mode
      </Button>
    </HStack>
  );
};

export default Header;
