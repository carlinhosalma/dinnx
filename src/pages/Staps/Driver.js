import React , {useState, useEffect} from "react";
import { Keyboard } from "react-native";
import {
  Container,
  Button,
  ButtonText,
  Title,
  SubTitle,
  Input,
  Spacer
} from "../../styles";

const Driver = () => {
    const [visible, setVisible] = useState(true);

    useEffect(()=>{

        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow', 
            ()=> setVisible(false),
        );

        const keyboardDidHideListener = Keyboard.addListener(
            "keyboardDidHide", 
            ()=> setVisible(true),
        );

        return ()=>{
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove
        }


    },[])


  return (
    <Container padding={30} justify="flex-start">
      <Container
        justify="flex-start"
        height={80}
        align="flex-start"
        padding={10}
      >
        <Title>Cadastre seu veículo</Title>
        <SubTitle>Preencha os campos abaixo</SubTitle>
      </Container>

      <Container justify="flex-start">
        <Spacer height={50} />
        <Input placeholder="Placa do veículo" />
        <Spacer />
        <Input placeholder="Marca do veículo" />
        <Spacer />
        <Input placeholder="Modelo do veículo" />
        <Spacer />
        <Input placeholder="Cor do veículo" />
      </Container>

     { visible && (
     <Container height={70} justify="flex-end">
        <Button>
          <ButtonText color="light"> Comece a usar </ButtonText>
        </Button>
      </Container>
     )}
    </Container>
  );
};

export default Driver;
