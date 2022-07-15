import React from "react";
import { Text } from "react-native";
//import { CreditCardInput} from "react-native-credit-card-input"
import { Container, Button, ButtonText, Title, SubTitle } from "../../styles";

const Client = () => {
  return (
    <Container padding={30} justify="flex-start">
      <Container
        justify="flex-start"
        height={80}
        align="flex-start"
        padding={10}
      >
        <Title>Escolha como pagar</Title>
        <SubTitle>Preencha os dados do cartão de crédito</SubTitle>
      </Container>

      <Container>
      
      </Container>

      <Container height={70} justify="flex-end">
        <Button>
          <ButtonText color="light"> Comece a usar</ButtonText>
        </Button>
      </Container>
    </Container>
  );
};

export default Client;
