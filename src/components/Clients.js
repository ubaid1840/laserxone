"use client";
import { useEffect, useRef } from "react";
import { Center, Container, Heading, HStack, Image, Box } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";

export default function Clients() {
 
  const logos = [
    "alkaram.png", "ambassador.png", "friggs.png", "KRL.png", "lums.png", "msf.png", "sialkot.png"
  ];


  return (
    <Container as="section" id="clients" maxW="100%" py={10} textAlign="center" >
      <Heading size={'2xl'} mb={10} color={'teal.300'} >CLIENTS</Heading>
      <Marquee>
        {logos.map((logo, idx) => (
          <Center key={idx} w="200px" h={24} flexShrink={0} bg={'gray.300'} m={10} rounded={'full'} p={2} 
          backdropFilter="blur(10px)"
          border="1px solid rgba(255, 255, 255, 0.3)">
            <Image src={`/clients/${logo}`} alt={`Client ${idx + 1}`} maxH="100%" objectFit="contain" />
          </Center>
        ))}
      </Marquee>



    </Container>
  );
}
