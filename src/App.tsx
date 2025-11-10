import { 
  Center,
  ChakraProvider,
  Input,
  Box,
  Button,
} from '@chakra-ui/react'
import { login } from './services/login';
import { Header } from './components/Header/Header'
import { LoginButton } from './components/Button/LoginButton';


function App() {
  return (
    <ChakraProvider>
      <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
        <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >

          <Center margin='1rem' fontSize='35px' >
            <Header />
          </Center>

          <Center margin='3rem'>
          <h1>Faça o login</h1>
          </Center>
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Center>
            <LoginButton onClick={login}/>
          </Center>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
