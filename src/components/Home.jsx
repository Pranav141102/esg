import { Box, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import btcSrc from "../assets/stock 1.jpg";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box bgColor={"white"} w={"full"} h={"85vh"} position="relative">
      <motion.div
        style={{
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          w={"full"}
          h={"full"}
          objectFit={"contain"}
          src={btcSrc}
          borderRadius="lg" // Adding rounded corners to the image
          boxShadow="xl" // Adding shadow for depth
        />
      </motion.div>

      <VStack
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        spacing={4} // Adding space between the items
        zIndex="1" // Ensuring text is above the image
      >
        <Text
          fontSize={{ base: "4xl", md: "6xl" }} // Responsive font size
          textAlign={"center"}
          fontWeight={"extrabold"} // Making the text more bold
          color={"white"} // Changing text color to white for better contrast
          textShadow="2px 2px 4px rgba(0, 0, 0, 0.7)" // Dark shadow to help text pop
        >
          Welcome to Basement!
        </Text>
        <Text
          fontSize={"lg"}
          textAlign={"center"}
          color={"whiteAlpha.900"} // Light white text for readability
          fontWeight={"medium"}
          maxW="lg" // Limiting the width of the text
          lineHeight={1.5} // Adjusting line height for better readability
        >
          Your gateway to seamless trading across all markets. Access the best tools and expert guidance for informed investing at your fingertips.
        </Text>
      </VStack>
    </Box>
  );
};

export default Home;
