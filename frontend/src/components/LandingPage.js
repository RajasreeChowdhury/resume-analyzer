import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Input,
} from "@chakra-ui/react";

export default function LandingPage({ handleFileChange, handleUpload }) {
  return (
    <Flex
      minH="100vh"
      bgGradient="linear(to-r, blue.500, blue.700)"
      color="white"
      align="center"
      justify="center"
      px={10}
    >
      <Flex w="100%" maxW="1200px" justify="space-between" align="center">
        
        {/* LEFT SIDE */}
        <VStack align="start" spacing={6} w="50%">
          <Text fontSize="sm" letterSpacing="wide">
            SCROLL MY RESUME — FREE RESUME CHECKER
          </Text>

          <Heading fontSize="4xl" lineHeight="1.2">
            Get expert feedback on your resume instantly
          </Heading>

          <Text fontSize="md" color="blue.100">
            Analyze your resume with AI to understand how it performs based on
            what recruiters actually look for. Receive actionable insights to
            improve your chances of landing interviews faster.
          </Text>

          <Text fontSize="sm">
            ⭐ Trusted by 1M+ job seekers worldwide
          </Text>
        </VStack>

        {/* RIGHT SIDE */}
        <Box
          bg="white"
          color="black"
          p={8}
          borderRadius="xl"
          w="40%"
          textAlign="center"
          boxShadow="xl"
        >
          <VStack spacing={4}>
            <Text fontSize="3xl">📄</Text>

            <Heading fontSize="lg">
              Drop your resume here or choose a file
            </Heading>

            <Input type="file" onChange={handleFileChange} />

            <Text fontSize="sm" color="gray.500">
              Max file size: 5MB (PDF)
            </Text>

            <Button colorScheme="blue" w="100%" onClick={handleUpload}>
              Upload Resume
            </Button>
          </VStack>
        </Box>

      </Flex>
    </Flex>
  );
}