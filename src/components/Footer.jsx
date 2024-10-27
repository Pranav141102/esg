import { Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"24"} // Adjusted height
      px={"16"}
      py={["8", "4"]} // Reduced padding
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We are India’s leading trading app, offering expert guidance across cryptocurrency, stocks, and more – all at affordable prices. Our platform empowers you with the tools and insights needed for seamless, informed trading.
          </Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
