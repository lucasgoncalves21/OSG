
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  Header,
  BackButton,
  Title,
  GameOption,
  OptionText,
  BottomMenu,
  MenuButton,
  MenuText,
  Text,
  Text2,
  Text3,
} from "./styles";
import { Ionicons } from "@expo/vector-icons";

export default function ThemeSelection() {
  const navigation = useNavigation();
  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <OptionText style={{ color: "#C67AFC" }}>Voltar</OptionText>
        </BackButton>
        <Title>Escolha o Tema</Title>
      </Header>

      <GameOption>
        <Text>Exatas</Text>
      </GameOption>

      <GameOption onPress={() => navigation.navigate("DueloAmigo")}>
        
        <Text2>Humanas</Text2>
      </GameOption>

      <GameOption>
        <Text3>Extras</Text3>
      </GameOption>


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
