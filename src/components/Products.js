"use client"
import { Box, Container, Heading, SimpleGrid, Text, Image } from "@chakra-ui/react";

export default function Products() {
  const products = [
    { name: "SF3015H", desc: "Full Cover Fiber Laser Cutting Machine", img: "/products/1.jpg" },
    { name: "SF3015HM", desc: "Full Protection Steel Sheet and Tube Laser Cutter", img: "/products/2.jpg" },
    { name: "SF3015G", desc: "Open Type Metal Sheet Laser Cutting Machine", img: "/products/3.jpg" },
    { name: "SF3015M", desc: "Open Type Metal Sheet and Pipe Laser Cutting Machine", img: "/products/4.jpg" },
    { name: "SF1313G", desc: "Small Fiber Laser Cutting Machine", img: "/products/5.jpg" },
    { name: "SF6016T", desc: "Ultra High Speed Laser Tube Cutting Machine", img: "/products/6.jpg" },
  ];

  return (
    <Container as={'section'} id="products" maxW="100%" py={16} minH="100vh" display="flex" alignItems="center" justifyContent="center" flexDir="column">
      <Heading size={ '2xl'} textAlign="center" mb={8} color="teal.300">
        Our Products Range
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} maxW="1200px" mt={10}>
        {products.map((product, idx) => (
          <Box
            key={idx}
            w="100%"
            h="400px"
            position="relative"
            borderRadius="lg"
            overflow="hidden"
            bg="gray.800"
            boxShadow="lg"
            transition="all 0.3s ease-in-out"
            _hover={{
              transform: "translateY(-10px)", // Lifts the card on hover
              boxShadow: "2xl",
              backgroundColor: "gray.700", // Subtle background color change
            }}
          >
            <Box position="relative" height="100%">
              <Image
                src={product.img}
                alt={product.name}
                objectFit="cover"
                w="100%"
                h="100%"
                opacity={0.6}
              />
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                bg="blackAlpha.600"
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                p={4}
              >
                <Heading size="lg" color="white" mb={2} textAlign="center">
                  {product.name}
                </Heading>
                <Text color="gray.200" textAlign="center" fontSize="lg">
                  {product.desc}
                </Text>
              </Box>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
}
