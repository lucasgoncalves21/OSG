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
  NavBar, 
  NavLabel, 
  NavItem
} from "./styles";

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

      <NavBar>
        <NavItem>
          <Image source={require("../../images/home.jpg")} />
          <NavLabel>Home</NavLabel>
        </NavItem>

        <NavItem>
          <Image source={require("../../images/game.jpg")} />
          <NavLabel>Game</NavLabel>
        </NavItem>

        <NavItem>
          <Image source={require("../../images/config.jpg")} />
          <NavLabel>Materiais</NavLabel>
        </NavItem>

        <NavItem>
          <Image source={require("../../images/conta.jpg")} />
          <NavLabel>Perfil</NavLabel>
        </NavItem>
      </NavBar>
    </Container>
  );
}
