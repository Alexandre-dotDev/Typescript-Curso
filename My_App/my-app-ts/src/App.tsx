// import { Layout } from './components/Layout';
// import styled from 'styled-components'
import { Center, ChakraProvider, Box, Input, Button } from "@chakra-ui/react";

// const Box = styled.div`
//   background-color: orange;
//   border-radius: 10px;
//   padding-left: 15px;
// `

function App() {
  return (
    <ChakraProvider>
      <Box minHeight="100vh" backgroundColor="#201f30" p="25px" fontSize="16px">
        <Center>
          <Box
            backgroundColor="#f2f2f2"
            p="15px"
            borderRadius="10px"
            w="400px"
            fontFamily="monospace"
          >
            <Center>
              <h1>Faça seu Login</h1>
            </Center>

            <Input placeholder="email" mt="10px" />
            <Input placeholder="senha" mt="10px" />
            <Button 
              colorScheme='messenger'
              w="100%"
              mt="20px"
              >
              Entrar
            </Button>
          </Box>
        </Center>
      </Box>    
    </ChakraProvider>
  );
}

export default App;
