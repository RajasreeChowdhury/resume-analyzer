import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
} from "@chakra-ui/react";

export default function ResultPage({ resultText, fileURL }) {

  // 🔥 Extract score
  let score = 0;
  const match = resultText.match(/(\d+)\s*\/\s*10/);
  if (match) score = parseInt(match[1]) * 10;

  // 🔥 Split sections (basic parsing)
  const strengths = resultText.split("Strengths:")[1]?.split("Weaknesses:")[0] || "";
  const weaknesses = resultText.split("Weaknesses:")[1]?.split("Suggestions:")[0] || "";
  const suggestions = resultText.split("Suggestions:")[1] || "";

  return (
    <Flex
      p={10}
      gap={10}
      minH="100vh"
      bgGradient="linear(to-r, #0f2027, #203a43, #2c5364)"
      color="white"
    >

      {/* LEFT SIDE */}
      <Box w="50%">

        {/* 🔥 Heading */}
        <Heading
          mb={2}
          fontSize="3xl"
          textShadow="0 0 10px #1d6e7c"
        >
          Score for your resume
        </Heading>

        <Text mb={6} color="blue.200">
          Welcome to your resume review
        </Text>

        {/* 🔥 SCORE BAR */}
        <Box mb={6}>
          <Text mb={2} fontSize="lg">
            Your Score: <b>{score}/100</b>
          </Text>

          <Box position="relative">

            {/* Gradient Bar */}
            <Box
              h="14px"
              borderRadius="full"
              bgGradient="linear(to-r, red.500, orange.400, yellow.300, green.400, green.600)"
            />

            {/* Pointer */}
            <Box
              position="absolute"
              left={`${Math.min(score, 100)}%`}
              top="-18px"
              transform="translateX(-50%)"
              textAlign="center"
            >
              <Text fontSize="12px" color="white">
                {score}
              </Text>
              <Text fontSize="18px">▼</Text>
            </Box>

          </Box>
        </Box>

        {/* 🔥 METRIC CARDS */}
        <HStack spacing={4} mb={6}>
          {["Overall", "Impact", "Style", "Skills"].map((item) => (
            <Box
              key={item}
              p={4}
              borderRadius="lg"
              w="25%"
              textAlign="center"
              bgGradient="linear(to-br, orange.300, yellow.400)"
              boxShadow="0 4px 20px rgba(255, 200, 0, 0.4)"
              color="black"
            >
              <Text fontSize="sm">{item}</Text>
              <Heading size="md">{score}</Heading>
            </Box>
          ))}
        </HStack>

        {/* 🔥 RECOMMENDATIONS */}
        <Box
          bg="whiteAlpha.200"
          p={6}
          borderRadius="lg"
          boxShadow="xl"
        >
          <Heading size="md" mb={4}>
            Recommendations
          </Heading>

          {/* Strengths */}
          <Text fontWeight="bold" color="green.300">Strengths</Text>
          <VStack align="start" mb={3}>
            {strengths.split("-").map((item, i) =>
              item.trim() && <Text key={i}>• {item.trim()}</Text>
            )}
          </VStack>

          {/* Weaknesses */}
          <Text fontWeight="bold" color="red.300">Weaknesses</Text>
          <VStack align="start" mb={3}>
            {weaknesses.split("-").map((item, i) =>
              item.trim() && <Text key={i}>• {item.trim()}</Text>
            )}
          </VStack>

          {/* Suggestions */}
          <Text fontWeight="bold" color="yellow.300">Suggestions</Text>
          <VStack align="start">
            {suggestions.split("-").map((item, i) =>
              item.trim() && <Text key={i}>• {item.trim()}</Text>
            )}
          </VStack>

        </Box>

      </Box>

      {/* RIGHT SIDE */}
      <Box
        w="50%"
        bg="white"
        p={6}
        borderRadius="lg"
        boxShadow="xl"
      >
        <Heading size="md" mb={4} color="black">
          Your Resume
        </Heading>

        <iframe
          src={fileURL}
          width="100%"
          height="600px"
          title="Resume Preview"
        />
      </Box>

    </Flex>
  );
}