import React from 'react'
import { Image } from 'react-native'

import { Container, Button, ButtonText, ImageLogo} from '../../styles'
import logo from '../../assets/logo.png'
import bgBotton from '../../assets/DinnX.png'
const Login = ()=>{
    return (
        <Container bgColor="black" justify="center"
        padding={30}
        >
            
            <Container
                justify="space-around"
                padding={30}
                position="absolute"
                height={270}
                top={200}
                zIndex={9}
            >
                <Image source={bgBotton} />

                <Button type="info" radius="4">
                    <ButtonText color="light">Fazer Login com Facebook</ButtonText>
                </Button>
                <Button type="light" radius="4">
                    <ButtonText  >Fazer Login com Google</ButtonText>
                </Button>
            </Container>
           
        </Container>
    )
    
}
export default Login;