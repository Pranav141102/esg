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

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = () => {
    // Add signup logic here
    console.log("Signing up with:", { name, email, password, confirmPassword });
  };

  return (
    <Container centerContent>
      <VStack spacing={4} mt={8} w="full" maxW="md">
        <Heading>Sign Up</Heading>
        <FormControl id="name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
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
        <FormControl id="confirmPassword" isRequired>
          <FormLabel>Confirm Password</FormLabel>
          <Input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </FormControl>
        <Button colorScheme="teal" onClick={handleSignup}>
          Sign Up
        </Button>
        <HStack>
          <Text>Already have an account?</Text>
          <Link
            href="/login" // Use Link from Chakra UI for navigation
            color="teal.500" // Highlight color for the link
            fontWeight="bold" // Making the text bold
            _hover={{ textDecoration: "underline" }} // Underline on hover
          >
            Login
          </Link>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Signup;
