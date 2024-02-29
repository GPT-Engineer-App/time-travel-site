import React, { useState } from "react";
import { Box, Button, Container, Heading, Input, InputGroup, InputRightElement, VStack, Text, Image } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const Index = () => {
  const [url, setUrl] = useState("");

  const handleInputChange = (event) => {
    setUrl(event.target.value);
  };

  const handleSubmit = () => {
    // In a real app, you would trigger a search for the URL's archive here
    alert(`Search for archived versions of: ${url}`);
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Box textAlign="center">
          <Heading as="h1" size="xl" mb={2}>
            Web Archive Search
          </Heading>
          <Text fontSize="lg">Explore archived versions of web pages over time.</Text>
        </Box>
        <InputGroup size="md">
          <Input pr="4.5rem" type="text" placeholder="Enter website URL" value={url} onChange={handleInputChange} />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleSubmit}>
              <FaSearch />
            </Button>
          </InputRightElement>
        </InputGroup>
        <Image src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhcmNoaXZlJTIwc2hlbHZlc3xlbnwwfHx8fDE3MDkxNzc5Njl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Archive Shelves" />
      </VStack>
    </Container>
  );
};

export default Index;
