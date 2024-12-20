import { useEffect, useState } from 'react';
import { Heading, Text, Button, Container, Center, Highlight, Mark } from '@chakra-ui/react';

function App() {
  const storageKeyName = "count"; // Key used to store the count value in localStorage

  // Function to get the stored count value from localStorage or default to 0 if not found
  const getCountValue = () => Number(localStorage.getItem(storageKeyName)) || 0;

  // State to hold the count value, initialized from localStorage or default value
  const [count, setCount] = useState(getCountValue());

  // Function to increment the count
  const addCount = (count) => setCount(Number(count) + 1);

  // useEffect hook to update localStorage whenever the count changes
  useEffect(() => {
    localStorage.setItem(storageKeyName, String(count)); // Store the updated count value in localStorage
  }, [count]);

  return (
    <>
      <Container maxW={['full', 'container.lg']} mt={4} mb={4}>
        <Center>
          <Heading lineHeight='tall'>
            {/* Highlighting the word 'Stranger' in the heading */}
            <Highlight
              query="Stranger"
              styles={{ px: "0.5", bg: "teal.muted", rounded: "full" }}
            >
              Welcome Stranger
            </Highlight>
          </Heading>
        </Center>
        <Center>
          {/* Displaying a small italic text below the heading */}
          <Text fontSize='md' fontStyle='italic'>React app with Chakra </Text>
        </Center>
        <Center m={4}>
          {/* Displaying the current count in a marked style */}
          <Mark
            fontSize='lg'
            fontWeight='bold'
            bg='black'
            color="white"
            fontFamily='NewYork'
            p='1'
          >
            Count is already {count}
          </Mark>
        </Center>
        <Center>
          {/* Button to increment the count value */}
          <Button
            onClick={() => addCount(count)} // Increment count when clicked
            variant='surface'
            size='md'
            height='48px'
            width='200px'
            border='2px'
            fontStyle='italic'
          >
            Count me!
          </Button>
        </Center>
      </Container>
    </>
  );
}

export default App;