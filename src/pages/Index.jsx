import { Box, Button, Input, Stack, Text, Image, VStack, Center } from "@chakra-ui/react";
import { FaGoogle, FaApple } from "react-icons/fa";

const Index = () => {
  return (
    <Center height="100vh" bg="gray.50">
      <VStack spacing={4} p={8} boxShadow="md" borderRadius="md" bg="white">
        <Image borderRadius="full" boxSize="100px" src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsb2dvfGVufDB8fHx8MTcxMzQyMDQxM3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Company Logo" />
        <Text fontSize="2xl" fontWeight="bold">
          Login
        </Text>
        <Box width="100%">
          <Input placeholder="Email address" mb={3} />
          <Button colorScheme="blue" width="100%">
            Login with Email
          </Button>
        </Box>
        <Text my={2}>or</Text>
        <Stack direction="row" spacing={4} width="100%">
          <Button leftIcon={<FaGoogle />} colorScheme="red" width="100%">
            Google
          </Button>
          <Button leftIcon={<FaApple />} colorScheme="gray" width="100%">
            Apple
          </Button>
        </Stack>
      </VStack>
    </Center>
  );
};

export default Index;
