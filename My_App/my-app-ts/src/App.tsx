// import { Layout } from './components/Layout';
// import styled from 'styled-components'
import { 
  // Center,
  ChakraProvider,
  Box,
  Input,
} from '@chakra-ui/react'

// const Box = styled.div`
//   background-color: orange;
//   border-radius: 10px;
//   padding-left: 15px;
// `

function App() {
  return (
    <ChakraProvider>
      <Box minHeight='100vh' backgroundColor='#004f37'>
      <h1>Faça seu Login</h1>
        <Input placeholder= "email"/>
        <Input placeholder="senha"/>
      </Box>
      {/* <Center h='200px'>
          <Layout>
          <Box>
          </Box>
         
          </Layout>
        
        <h1>Faça seu Login</h1>
        <Input placeholder= "email"/>
        <Input placeholder="senha"/>    
        
      </Center>  */}
    </ChakraProvider>
  );
}

export default App;
