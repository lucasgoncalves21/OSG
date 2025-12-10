import React from "react";
import { Container, Card, BackButton, BackIcon, PlayerRow, Avatar, PlayerName, Divider, InviteText, SwordImage } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function ConviteDuelo() {
  const navigation = useNavigation();
  return (
    <Container>

      <Card>

        <BackButton onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-undo" size={22} color="#B84EF2" /> 
        </BackButton>

        <PlayerRow>
          <Avatar source={require("../../images/icon_OSG.jpg")} />
          <PlayerName>Makauli</PlayerName>
        </PlayerRow>

        <PlayerRow>
          <Avatar source={require("../../images/icon_OSG.jpg")} />
          <PlayerName>Caiox</PlayerName>
        </PlayerRow>

        <PlayerRow>
          <Avatar source={require("../../images/icon_OSG.jpg")} />
          <PlayerName onPress={() => navigation.navigate("DueloAmigo")}>Natalie</PlayerName>
        </PlayerRow>

        <PlayerRow>
          <Avatar source={require("../../images/icon_OSG.jpg")} />
          <PlayerName>McLove</PlayerName>
        </PlayerRow>

        <PlayerRow>
          <Avatar source={require("../../images/icon_OSG.jpg")} />
          <PlayerName>Mc Pozinho</PlayerName>
        </PlayerRow>

        <PlayerRow>
          <Avatar source={require("../../images/icon_OSG.jpg")} />
          <PlayerName>Reboco</PlayerName>
        </PlayerRow>

        <Divider />

        <InviteText>Chame seus Amigos{"\n"}para Duelar!</InviteText>

        <SwordImage source={require("../../images/espada.jpg")} />

      </Card>

    </Container>
  );
}
