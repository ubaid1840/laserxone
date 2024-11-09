"use client";
import { Box, Container, Text, Link, Center } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box as="footer" bg={'black'} py={6} >
      <Container maxW="container.xl" textAlign="center">
        <Center>
          <Text fontSize="sm">
            © {new Date().getFullYear()} <Link href="/" color="teal.300">Laserxone</Link>. All rights reserved.
          </Text>
        </Center>
      </Container>
    </Box>
  );
}
