import { ScrollView, Image } from "react-native";
import {
  Container,
  Header,
  Title,
  MenuIcon,
  SearchBar,
  ProfileIcon,
  Banner,
  SectionTitle,
  GroupItem,
  GroupText,
  MenuButton,
  MenuText,
  BottomMenu,
} from "./styles";
import { Ionicons } from "@expo/vector-icons";

export default function Menu() {
  return (
    <Container>
      <Header>
        <MenuIcon source={require("../../images/menu.jpg")} />
        <Title>OSG</Title>
        <ProfileIcon source={require("../../images/libras.jpg")} />
      </Header>

      <SearchBar placeholder="Pesquisar" placeholderTextColor="#A086CC" />

      <Banner source={require("../../images/banner.jpg")} />

      <SectionTitle>Seus Grupos</SectionTitle>

      <ScrollView>
        <GroupItem>
          <Image source={require("../../images/quimica_organica.jpg")} />
          <GroupText>Grupo de Química Orgânica</GroupText>
        </GroupItem>

        <GroupItem>
          <Image source={require("../../images/economia.jpg")} />
          <GroupText>Grupo de Economia</GroupText>
        </GroupItem>

        <GroupItem>
          <Image source={require("../../images/algebra.jpg")} />
          <GroupText>Grupo de Álgebra</GroupText>
        </GroupItem>

        <GroupItem>
          <Image source={require("../../images/quimica_forense.jpg")} />
          <GroupText>Grupo de Química Forense</GroupText>
        </GroupItem>
      </ScrollView>

      <BottomMenu>
        <MenuButton>
          <Ionicons name="home-outline" size={20} color="#fff" />
          <MenuText>Home</MenuText>
        </MenuButton>

        <MenuButton>
          <Ionicons name="game-controller-outline" size={20} color="#fff" />
          <MenuText>Game</MenuText>
        </MenuButton>

        <MenuButton active>
          <Ionicons name="chatbubble-ellipses" size={22} color="#fff" />
          <MenuText>Grupos</MenuText>
        </MenuButton>

        <MenuButton>
          <Ionicons name="book-outline" size={20} color="#fff" />
          <MenuText>Matérias</MenuText>
        </MenuButton>

        <MenuButton>
          <Ionicons name="person-outline" size={20} color="#fff" />
          <MenuText>Perfil</MenuText>
        </MenuButton>
      </BottomMenu>
    </Container>
  );
}
