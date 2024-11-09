"use client";
import { Box, Container, Heading, SimpleGrid, Stack, Text, Icon, chakra } from "@chakra-ui/react";
import { FaIndustry, FaCogs, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const GradientText = chakra("span", {
  baseStyle: {
    bgGradient: "linear(to-r, teal.300, purple.400)",
    bgClip: "text",
  },
});

export default function Features() {
  const features = [
    { icon: FaIndustry, title: "Revolutionize Your Manufacturing Process" },
    { icon: FaCogs, title: "Unparalleled Precision" },
    { icon: FaRocket, title: "Stay Ahead in the Market" },
  ];

  return (
    <Container as='section' id="features" maxW="100%" py={16} minH="100vh" display="flex" alignItems="center" justifyContent="center" >
      <Box color="white" textAlign="center" maxW="container.lg">
        {/* Main Heading Section */}
        <Stack spacing={8} align="center" textAlign="center" mb={12}>
          <Heading fontSize={{ base: "3xl", md: "5xl" }} maxW="800px">
            Your Premier Destination for <GradientText>Laser Cutting</GradientText> Machines in Pakistan!
          </Heading>
          <Text fontSize={{ base: "lg", md: "xl" }} maxW="700px">
            Discover Precision Cutting Solutions. Explore our range of Senfeng
            laser cutting machines, engineered for accuracy and efficiency.
            From metal to wood, our cutting-edge technology ensures flawless
            results for your fabrication needs.
          </Text>
        </Stack>

        {/* Features Section */}
        <Heading size={ '2xl'} textAlign="center" mb={8} color="teal.300">
          Elevate Your Production Standards
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} maxW="900px" mx="auto">
          {features.map((feature, idx) => (
            <MotionBox
              key={idx}
              p={8}
              bg="gray.800"
              borderRadius="lg"
              boxShadow="lg"
              whileHover={{ scale: 1.05, translateY: -5 }}
              transition={{ duration: 0.3 }}
              _hover={{ bg: "gray.700" }}
            >
              <Box textAlign="center" mb={4}>
                <Icon as={feature.icon} boxSize={10} color="teal.300" mb={2} />
                <Heading size="md" color="white" mb={4}>
                  {feature.title}
                </Heading>
                <Text color="gray.300">
                  Empower your business with Senfeng laser machines, designed to
                  enhance production standards.
                </Text>
              </Box>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
}
