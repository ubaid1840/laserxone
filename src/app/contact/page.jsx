"use client";
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Input,
  Textarea,
  Button,
  Text,
  chakra,
  useToast,
} from "@chakra-ui/react";
import ReCAPTCHA from "react-google-recaptcha";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";

const MotionBox = motion(Box);
const GradientText = chakra("span", {
  baseStyle: {
    bgGradient: "linear(to-r, teal.300, purple.400)",
    bgClip: "text",
  },
});

export default function Page() {
  const [captchaValue, setCaptchaValue] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const toast = useToast();

  const handleCaptcha = (value) => {
    setCaptchaValue(value);
  };

  const handleChange = (e) => {
    if (e.target.id === "name") {
      setName(e.target.value);
    }

    if (e.target.id === "email") {
      setEmail(e.target.value);
    }

    if (e.target.id === "msg") {
      setMsg(e.target.value);
    }
  };

  async function handleSendMail() {
    axios
      .post("/api/mail", {
        name,
        email,
        msg,
      })
      .then(() => {
        toast({
          title: "Sent",
          description: "You will be contacted shortly",
          duration: 3000,
          isClosable: true,
          status : "success"
        });
      })
      .catch(() => {
        toast({
          title: "Failed",
          description: "Message sending failed! Kindly retry again.",
          duration: 3000,
          isClosable: true,
          status : "error"
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <Box bg="gray.900" color="white" minH="100vh" w={"100%"}>
      <Container
        as="section"
        id="contact"
        maxW="100%"
        py={16}
        minH="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box color="white" textAlign="center" maxW="container.md">
          <Stack spacing={8} align="center" textAlign="center" mb={12}>
            <Heading fontSize={{ base: "3xl", md: "5xl" }} maxW="800px">
              Get in Touch with <GradientText>Senfeng Laser</GradientText>!
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} maxW="700px">
              Have questions or need assistance? Reach out to us using the form
              below, and we'll be happy to assist you with precision laser
              solutions tailored to your needs.
            </Text>
          </Stack>
          <MotionBox
            p={8}
            bg="gray.800"
            borderRadius="lg"
            boxShadow="lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            maxW="500px"
            mx="auto"
            mb={12}
          >
            <Stack spacing={4}>
              <Input
                id="name"
                value={name}
                onChange={handleChange}
                placeholder="Your Name"
                size="lg"
                bg="gray.700"
                border="none"
                _hover={{ bg: "gray.600" }}
                _focus={{ bg: "gray.600" }}
                color="white"
              />
              <Input
                id="email"
                value={email}
                onChange={handleChange}
                placeholder="Your Email"
                size="lg"
                type="email"
                bg="gray.700"
                border="none"
                _hover={{ bg: "gray.600" }}
                _focus={{ bg: "gray.600" }}
                color="white"
              />
              <Textarea
                id="msg"
                value={msg}
                onChange={handleChange}
                placeholder="Your Message"
                size="lg"
                bg="gray.700"
                border="none"
                _hover={{ bg: "gray.600" }}
                _focus={{ bg: "gray.600" }}
                color="white"
                rows={6}
              />
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                onChange={handleCaptcha}
                theme="dark"
              />
              <Button
                isDisabled={!captchaValue}
                isLoading={loading}
                onClick={() => {
                  setLoading(true);
                  handleSendMail();
                }}
                colorScheme="teal"
                size="lg"
                w="full"
                _hover={{ bg: "teal.400" }}
              >
                Send Message
              </Button>
            </Stack>
          </MotionBox>
          <Box>
            <Heading size="md" color="teal.300" mb={4}>
              Contact Information
            </Heading>
            <Text fontSize="lg" color="gray.300" mb={2}>
              Address: Street# 2, Sharif Garden Daroghawala, Lahore, Punjab
              54000, Pakistan
            </Text>
            <Text fontSize="lg" color="gray.300" mb={2}>
              Contact No: +92 323 4784400
            </Text>
            <Text fontSize="lg" color="gray.300">
              Email: laserzone.pk@gmail.com
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
