import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {
  Container,
  Title,
  SubTitle,
  Spacer,
  Map,
  Avatar,
  Input,
  Button,
  ButtonText,
  VerticalSeparator,
  Bullet,
  PulseCircle,
} from "../../styles";

const Home = () => {
  const tipo = "D"; // L = LOJA,  D = DRIVER , C = CLIENT
  const status = "C"; //S- SEM ENTREGA, I- INFORMAÇÕES, P- PESQUISA, C - CORRIDA

  return (
    <Container>
      <Map
        initialRegion={{
          latitude: -15.67991,
          longitude: -48.19456,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        disabled={status == "P"}
      />

      <Container
        position="absolute"
        justify="space-between"
        align="flex-start"
        padding={20}
        zIndex={999}
        pointerEvents="box-none"
        // bgColor="primary"
        style={{ height: "100%" }}
      >
        {/* parte superior */}

        <Container height={120} justify="flex-start" align="flex-start">
          {/* Avatar */}

          { ( status == "S" || tipo == "D" ) && (
            <TouchableOpacity>
              <Avatar
                //elevation={50}
                source={{
                  uri:
                    "https://i.em.com.br/1ux5MxARc3y5F3Adb1anBDtEOXY=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2021/06/15/1276947/20210615143326596039e.jpg",
                }}
              />
            </TouchableOpacity>
          )}

          {status !== "S" && tipo == "L"  && (
            <Container
              elevation={50}
              height={150}
              bgColor="light"
              justify="flex-end"
            >
              <Container padding={20}>
                <Container justify="flex-start" row>
                  <Bullet />
                  <SubTitle> Endereço de embarque completo</SubTitle>
                </Container>
                <Container justify="flex-start" row>
                  <Bullet destination />
                  <SubTitle> Endereço de embarque destino</SubTitle>
                </Container>
              </Container>
              <Button type="dark" compact>
                <ButtonText color="light">Toque aqui para editar</ButtonText>
              </Button>
            </Container>
          )}
        </Container>

        {/* Procurando entregadores*/}
        {tipo === "L" && status === "P" && (
          <Container padding={20} zIndex={-1}>
            <PulseCircle
              numPulses={3}
              diameter={400}
              speed={20}
              duaration={2000}
            />
          </Container>
        )}
        {/* do estabelecimento 
             STATUS
            S- SEM ENTREGA, 
            I- INFORMAÇÕES,
            P- PESQUISA, 
            C - CORRIDA
            
            TIPO
            L = LOJA,  
            D = DRIVER , 
            C = CLIENT
        */}

        {/* ESTADO INCIAL DO ESTABELECIMENTO */}

        {tipo === "L" && status === "S" && (
          <Container
            justify="flex-start"
            padding={20}
            align="flex-start"
            elevation={50}
            height={150}
            bgColor="light"
          >
            <SubTitle>Olá, Giraffas.</SubTitle>
            <Title>Para onde é a entrega?</Title>
            <Spacer />
            <Input placeholder="Procure um destino" />
          </Container>
        )}
        {/* "Cancelar Entrega" : "Confirmar Entrega" */}

        {tipo === "L" && (status == "I" || status == "P") && (
          <Container
            justify="flex-end"
            align="flex-start"
            elevation={50}
            height={180}
            bgColor="light"
          >
            <Container padding={20}>
              <SubTitle> DinnX Convencional</SubTitle>
              <Container row>
                <Container>
                  <Title>R$ 13,90</Title>
                </Container>
                <VerticalSeparator />
                <Container>
                  <Title>5 mins</Title>
                </Container>
              </Container>
            </Container>
            <Button type={status == "P" ? "muted" : "primary"}>
              <ButtonText color={status == "P" ? "dark" : "light"}>
                {status == "P" ? "Cancelar Entrega" : "Confirmar Entrega"}
              </ButtonText>
            </Button>
          </Container>
        )}

        {/*VISÃO INICIAL DO ENTREGADOR*/}

        {tipo === "D" && status === "S" && (
          <Container
            justify="flex-start"
            padding={20}
            align="flex-start"
            elevation={50}
            height={150}
            bgColor="light"
          >
            <SubTitle>Olá, motoqueiro. info</SubTitle>
            <Title>Nenhuma corrida encontrada</Title>
          </Container>
        )}

        {/*CORRIDA PENDENTE*/}
        {tipo === "D" && status == "S" && (
          <Container
            justify="flex-start"
            padding={20}
            align="flex-start"
            elevation={50}
            height={150}
            bgColor="light"
          >
            <SubTitle>Olá, motoqueiro.</SubTitle>
            <Title>Nenhuma corrida encontrada</Title>
          </Container>
        )}

        {/*CORRIDA EM ANDAMENTO*/}
        {tipo == "C" && status === "C" && (
          <Container justify="flex-end" bgColor="light" height={120}>
            <Container
              border="primary"
              justify="flex-end"
              align="flex-start"
              row
            >
              <Container justify="flex-start" padding={20} row>
                <Avatar
                  small
                  source={{
                    uri:
                      "https://i.em.com.br/1ux5MxARc3y5F3Adb1anBDtEOXY=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2021/06/15/1276947/20210615143326596039e.jpg",
                  }}
                />

                <Container justify="flex-start">
                  <SubTitle bold> Silvio Sampaio</SubTitle>
                  <SubTitle small>JBC2548,BMX, Preta </SubTitle>
                </Container>
              </Container>
              <VerticalSeparator />
              <Container padding={20} width={120}>
                <Container justify="flex-start">
                  <Title>R$ 13,90</Title>
                  <SubTitle small>Aprox. 5 mins</SubTitle>
                </Container>
              </Container>
            </Container>
            <Button type="muted">
              <ButtonText> CANCELAR CORRIDA </ButtonText>
            </Button>
          </Container>
        )}

        {/* MOTORISTA EM CORRIDA */}

        {tipo == "D" && status === "C" && (
          <Container justify="flex-end" bgColor="light" height={120}>
            <Container
              border="primary"
              justify="flex-end"
              align="flex-start"
              row
            >
              <Container justify="flex-start" margin={5} row>
                <Avatar
                  small
                  source={{
                    uri:
                      "https://i.em.com.br/1ux5MxARc3y5F3Adb1anBDtEOXY=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2021/06/15/1276947/20210615143326596039e.jpg",
                  }}
                />

                <Container justify="flex-start">
                  
                    <Container justify="flex-start" row>
                      <Bullet />
                      <SubTitle small numberOfLines={1}> Endereço de embarque completo</SubTitle>
                    </Container>
                    <Container justify="flex-start" row>
                      <Bullet destination />
                      <SubTitle small numberOfLines={1}> Endereço de embarque destino</SubTitle>
                    </Container>
                 
                </Container>
              </Container>
              <VerticalSeparator />
              <Container padding={20} width={120}>
                <Container justify="flex-start">
                  <Title>R$ 13,90</Title>
                  <SubTitle small>Aprox. 2 mins</SubTitle>
                </Container>
              </Container>
            </Container>
            <Button type="muted">
              <ButtonText color="primary"> ACEITAR A CORRIDA </ButtonText>
            </Button>
          </Container>
        )}
      </Container>
    </Container>
  );
};

export default Home;
