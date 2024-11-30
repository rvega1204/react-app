import { useEffect, useState } from 'react';
import { Heading, Text, Button, Container, Center, Highlight, Mark } from '@chakra-ui/react';


function App() {
  const storageKeyName = "count";
  const getCountValue = () => Number(localStorage.getItem(storageKeyName)) || 0;
  const [count, setCount] = useState(getCountValue());
  const addCount = (count) => setCount(Number(count) + 1);

  useEffect(() => {
    localStorage.setItem(storageKeyName, String(count));
  }, [count]);

  return (

    <>
      <Container maxW={['full', 'container.lg']} mt={4} mb={4}>
        <Center>
          <Heading lineHeight='tall'>
            <Highlight
              query="Stranger"
              styles={{ px: "0.5", bg: "teal.muted", rounded: "full" }}
            >
              Welcome Stranger
            </Highlight>
          </Heading>
        </Center>
        <Center>
          <Text fontSize='md' fontStyle='italic'>React app with Chakra </Text>
        </Center>
        <Center m={4}>
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
          <Button
            onClick={() => addCount(count)}
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

  )
}

export default App
