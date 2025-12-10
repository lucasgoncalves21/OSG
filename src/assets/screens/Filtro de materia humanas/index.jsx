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

export default function FiltroHumanas() {
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
          source={require("../../images/Humanas_background.jpg")}
        />
        <BannerText>Humanas</BannerText>
      </Banner>

      {/* ===== OPÇÕES DE MATÉRIA ===== */}
      <OptionButton onPress={() => navigation.navigate("FiltroHistoria")}>
        <OptionText>História</OptionText>
        <Ionicons name="earth-outline" size={40} color="#000" />
      </OptionButton>

      <OptionButton onPress={() => navigation.navigate("FiltroFilosofia")}>
        <OptionText>Filosofia</OptionText>
        <Ionicons name="leaf-outline" size={40} color="#000" />
      </OptionButton>

      <OptionButton onPress={() => navigation.navigate("FiltroSociologia")}>
        <OptionText>Sociologia</OptionText>
        <Ionicons name="people-outline" size={40} color="#000" />
      </OptionButton>

      <OptionButton onPress={() => navigation.navigate("FiltroAntropologia")}>
        <OptionText>Antropologia</OptionText>
        <Ionicons name="accessibility-outline" size={40} color="#000" />
      </OptionButton>

    </Container>
  );
}

