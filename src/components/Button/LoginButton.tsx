import { Button } from '@chakra-ui/react'
import { MouseEventHandler } from 'react'

interface ILoginButton {
  onClick: MouseEventHandler<HTMLButtonElement>
}

export function LoginButton({ onClick }: ILoginButton) {
  return (
    <Button 
      onClick={onClick}
      colorScheme='teal'
      size='sm'
      width='100%'
      marginTop='5px'
    >
      Login
    </Button>
  )
}
