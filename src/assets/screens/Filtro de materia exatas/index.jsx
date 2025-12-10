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
import { useNavigation } from "@react-navigation/native";

export default function FiltroExatas() {
  const navigation = useNavigation();
  return (
    <Container>

      {/* ===== HEADER ===== */}
      <Header>
        <Logo source={require("../../images/libras.jpg")} />

        <HeaderCenterIcon
          source={require("../../images/icon_OSG.jpg")}
        />

        <BackButton onPress={() => navigation.goBack()}>
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
      <OptionButton onPress={() => navigation.navigate("FiltroMatematica")}>
        <OptionText>Matemática</OptionText>
        <Ionicons name="calculator-outline" size={40} color="#000" />
      </OptionButton>

      <OptionButton onPress={() => navigation.navigate("FiltroQuimica")}>
        <OptionText>Química</OptionText>
        <Ionicons name="flask-outline" size={40} color="#000" />
      </OptionButton>

      <OptionButton onPress={() => navigation.navigate("FiltroAstronomia")}>
        <OptionText>Astronomia</OptionText>
        <Ionicons name="telescope-outline" size={40} color="#000" />
      </OptionButton>

      <OptionButton onPress={() => navigation.navigate("FiltroInformatica")}>
        <OptionText>Informática</OptionText>
        <Ionicons name="desktop-outline" size={40} color="#000" />
      </OptionButton>

    </Container>
  );
}

