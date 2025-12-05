import React from "react";
import {
  Container,
  Header,
  Logo,
  HeaderCenterIcon,
  BackButton,
  BackText,
  Banner,
  BannerBackground,
  BannerText,
  OptionButton,
  OptionText,
  OptionIcon
} from "./styles";
import { Ionicons } from "@expo/vector-icons";

export default function FiltroExatas() {
  return (
    <Container>

      {/* ===== HEADER ===== */}
      <Header>
        <Logo source={require("../../images/libras.jpg")} />

        <HeaderCenterIcon
          source={require("../../images/icon_OSG.jpg")}
        />

        <BackButton>
          <BackText>Voltar</BackText>
        </BackButton>
      </Header>

      {/* ===== BANNER EXATAS ===== */}
      <Banner>
        <BannerBackground
          source={require("../../images/Exatas_background.jpg")}
        />
        <BannerText>Exatas</BannerText>
      </Banner>

      {/* ===== OPÇÕES DE MATÉRIA ===== */}
      <OptionButton>
        <OptionText>Matemática</OptionText>
        <Ionicons name="calculator-outline" size={40} color="#000" />
      </OptionButton>

      <OptionButton>
        <OptionText>Química</OptionText>
        <Ionicons name="flask-outline" size={40} color="#000" />
      </OptionButton>

      <OptionButton>
        <OptionText>Astronomia</OptionText>
        <Ionicons name="telescope-outline" size={40} color="#000" />
      </OptionButton>

      <OptionButton>
        <OptionText>Informática</OptionText>
        <Ionicons name="desktop-outline" size={40} color="#000" />
      </OptionButton>

    </Container>
  );
}
