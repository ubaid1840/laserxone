import Clients from "@/components/Clients";
import Features from "@/components/Features";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Why from "@/components/Why";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Products from "@/components/Products";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <Box bg="gray.900" color="white" minH="100vh" w={'100%'}>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* Why Choose Us Section */}
      <Why />

      {/* Products Range Section */}
      <Products />

      {/* Clients Section */}
      <Clients />

      <Footer />
    </Box>
  );
}
