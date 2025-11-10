import { Box, Center, Input } from '@chakra-ui/react'
import { LoginButton } from './Button/LoginButton'
import { login } from '../services/login'
import { Header } from './Header/Header'

export function Card() {
  return (

    <>


    <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px'>

      <Center margin='1rem' fontSize='35px' > 
      
        <Header /> 
      
      </Center>
      <Center margin='3rem'>
        <h1>Faça o login</h1>
      </Center>

      <Input placeholder="email" marginBottom='10px' />
      <Input placeholder="password" marginBottom='10px' />

      <Center>
        <LoginButton onClick={login} />
      </Center>
    </Box>
    </>
  )
}
