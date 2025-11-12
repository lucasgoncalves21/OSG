import { Image } from "react-native";
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
  Text3
} from "./styles";

export default function Game({ navigation }) {
  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <OptionText style={{ color: "#C67AFC" }}>Voltar</OptionText>
        </BackButton>
        <Title>Escolha o Modo que deseja jogar</Title>
      </Header>

      <GameOption>
        <Image source={require("../../images/quiz_icon.jpg")} />
        <Text>Quiz diário</Text>
      </GameOption>

      <GameOption>
        
        <Text2>Duelo Aleatório</Text2>
      </GameOption>

      <GameOption>
        <Image source={require("../../images/duelo_amigos.jpg")} />
        <Text3>Duelo com Amigos</Text3>
      </GameOption>

      <GameOption>
        <Image source={require("../../images/treino_icon.jpg")} />
        <Text>Treino</Text>
      </GameOption>

      <BottomMenu>
        <MenuButton>
          <BottomImage source={require("../../images/home.jpg")} />
          <MenuText>Home</MenuText>
        </MenuButton>
        <MenuButton>
          <MenuText>Game</MenuText>
        </MenuButton>
        <MenuButton>
          <MenuText>Matérias</MenuText>
        </MenuButton>
        <MenuButton>
          <MenuText>Perfil</MenuText>
        </MenuButton>
      </BottomMenu>
    </Container>
  );
}
