import React from 'react'
import { Text } from 'react-native'
import { Container, Button, ButtonText, Title, SubTitle, PickerButton} from '../../styles';

const Type = ()=>{
    return(
        <Container padding={30} justify="flex-start">
            <Container 
                justify="flex-start" 
                height={80} 
                align="flex-start"
                padding={10} 
                >
                <Title>Como gostaria de logar?</Title>
                <SubTitle>Selecione qual será sua funçao no DinnX</SubTitle>
            </Container>

            <Container>

                <PickerButton >
                    <Title>Cliente</Title>
                </PickerButton>

                <PickerButton active>
                    <Title>Entregador</Title>
                </PickerButton>

                <PickerButton>
                    <Title>Estabelecimento</Title>
                </PickerButton>
            </Container>

            <Container height={70} justify="flex-end">
                <Button>
                    <ButtonText color="light"> Próximo Passo </ButtonText>
                </Button>
            </Container>

        </Container>
    )

}

export default Type; 