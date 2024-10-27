import React, { useState } from "react";
import {
  Container,
  Heading,
  Input,
  Button,
  VStack,
  FormControl,
  FormLabel,
  Text,
  Link, // Importing Link from Chakra UI
  HStack, // Importing HStack for better alignment
} from "@chakra-ui/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Add login logic here
    console.log("Logging in with:", { email, password });
  };

  return (
    <Container centerContent>
      <VStack spacing={4} mt={8} w="full" maxW="md">
        <Heading>Login</Heading>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <Button colorScheme="teal" onClick={handleLogin}>
          Login
        </Button>
        <HStack>
          <Text>Don't have an account?</Text>
          <Link
            href="/signup" // Use Link from Chakra UI for navigation
            color="teal.500" // Highlight color for the link
            fontWeight="bold" // Making the text bold
            _hover={{ textDecoration: "underline" }} // Underline on hover
          >
            Sign Up
          </Link>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Login;
