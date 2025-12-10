import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import Home from './src/assets/screens/Home';
import Cadastro from './src/assets/screens/Cadastro';
import Login from './src/assets/screens/Login';
import Menu from './src/assets/screens/Menu';
import Perfil from './src/assets/screens/Perfil';
import Game from './src/assets/screens/Game';
import QuimicaOrganica from './src/assets/screens/Grupo Quimica Organica';
import Economia from './src/assets/screens/Grupo Economia';
import ChatList from './src/assets/screens/Lista Mensagens';
import SolicitacaoMensagens from './src/assets/screens/Solicitacao Mensagens';
import FiltroRanking from './src/assets/screens/Ranking';
import RankRegional from './src/assets/screens/Ranking Regional';
import RankGlobal from './src/assets/screens/Ranking Global';
import RankAmigos from './src/assets/screens/Ranking Amigos';
import CommunityScreen from './src/assets/screens/Comunidade';
import ConviteDuelo from './src/assets/screens/Convite Duelo';
import ThemeSelection from './src/assets/screens/Tema Quiz';
import Treino from './src/assets/screens/Treino';
import DueloAmigo from './src/assets/screens/Duelo Amigo';
import FiltroEstudo from './src/assets/screens/Filtro de Estudo';
import FiltroExatas from './src/assets/screens/Filtro de materia exatas';
import FiltroHumanas from './src/assets/screens/Filtro de materia humanas';
import FiltroExtras from './src/assets/screens/Filtro de materia extras';
import FiltroMatematica from './src/assets/screens/Filtro de materia matemática';
import FiltroHistoria from './src/assets/screens/Filtro de materia historia';
import FiltroQuimica from './src/assets/screens/Filtro de materia quimica';
import FiltroFilosofia from './src/assets/screens/Filtro de materia filosofia';
import FiltroAstronomia from './src/assets/screens/Filtro de materia astronomia';
import FiltroSociologia from './src/assets/screens/Filtro de materia sociologia';
import FiltroInformatica from './src/assets/screens/Filtro de materia informatica';
import FiltroAntropologia from './src/assets/screens/Filtro de materia antropologia';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const ContainerApp = styled.SafeAreaView`
flex: 1;
`
const RootStack = createNativeStackNavigator({
  screenOptions: {headerShown: false},
  initialRouteName: "Home" ,
  screens: {
    Home: Home,
    Login: Login,
    Cadastro: Cadastro,
    Menu: Menu,
    QuimicaOrganica: QuimicaOrganica,
    Economia: Economia,
    FiltroEstudo: FiltroEstudo,
    FiltroExatas: FiltroExatas,
    FiltroHumanas: FiltroHumanas,
    FiltroExtras: FiltroExtras,
    CommunityScreen: CommunityScreen,
    FiltroMatematica: FiltroMatematica,
    FiltroQuimica: FiltroQuimica,
    FiltroAstronomia: FiltroAstronomia,
    FiltroInformatica: FiltroInformatica,
    FiltroHistoria: FiltroHistoria,
    FiltroFilosofia: FiltroFilosofia,
    FiltroSociologia: FiltroSociologia,
    FiltroAntropologia: FiltroAntropologia,
    Game: Game,
    ConviteDuelo: ConviteDuelo,
    DueloAmigo: DueloAmigo,
    Treino: Treino,
    ThemeSelection: ThemeSelection,
    Perfil: Perfil,
    ChatList: ChatList,
    SolicitacaoMensagens: SolicitacaoMensagens,
    FiltroRanking: FiltroRanking,
    RankAmigos: RankAmigos,
    RankGlobal: RankGlobal,
    RankRegional: RankRegional
  }
})

const Navigation = createStaticNavigation(RootStack)

export default function App() {
  return (
    <ContainerApp>
      <StatusBar hidden/>
      <Navigation />
    </ContainerApp>
  );
}
