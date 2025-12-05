import React from "react";
import { Container, Card, BackButton, BackIcon, PlayerRow, Avatar, PlayerName, Divider, InviteText, SwordImage } from "./styles";

export default function ConviteDuelo() {
  return (
    <Container>

      <Card>

        <BackButton>
          <BackIcon source={require("../../images/back.jpg")} />
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
          <PlayerName>Natalie</PlayerName>
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
