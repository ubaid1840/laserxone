"use client"
import { useState } from "react";
import { Box, Button, Container, Heading, Spinner, Stack, Text } from "@chakra-ui/react";

export default function HeroSection() {

  return (
    <Box as="section" id="hero" position="relative" overflow="hidden" minH="100vh">
      {/* Background Video */}
      <Box
  as="video"
  src="/video/hero.mp4"
  autoPlay
  muted
  loop
  playsInline
  preload="metadata"
  position="absolute"
  top="0"
  left="0"
  width="100%"
  height="100%"
  objectFit="cover"
  zIndex="0"
/>
    </Box>
  );
}
