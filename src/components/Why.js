"use client"
import { Box, Container, Heading, Text, Fade, chakra } from "@chakra-ui/react";

export default function Why() {
  const GradientText = chakra("span", {
    baseStyle: {
      bgGradient: "linear(to-r, teal.300, purple.400)",
      bgClip: "text",
    },
  });
  return (
    <Box
    as="section"
    id="why"
     bgGradient='linear(to-b, gray.900, gray.700, gray.900)'
      py={24}
      display="flex"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      position="relative"
      color="white"
    >
      <Container maxW="container.xl" zIndex={2}>
        <Fade in={true} delay={0.3}>
          <Heading
            fontSize={{ base: "4xl", md: "6xl" }}
            fontWeight="extrabold"
            letterSpacing="wider"
            textTransform="uppercase"
            mb={6}
            // textShadow="3px 3px 5px rgba(0, 0, 0, 0.6)"
          >
            Partner with Pakistan&apos;s {" "}
            <GradientText>Leading</GradientText>
            {" "}Distributor
          </Heading>
        </Fade>
        <Fade in={true} delay={0.6}>
          <Text
            maxW="3xl"
            mx="auto"
            fontSize={{ base: "md", md: "xl" }}
            lineHeight="1.75"
            opacity={0.9}
            textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)"
          >
            Join forces with Laser Zone, Pakistan&apos;s premier distributor of Senfeng laser cutting machines.
            With our expertise and top-notch service, unlock the full potential of laser cutting technology
            for your business success.
          </Text>
        </Fade>
      </Container>
    </Box>
  );
}
