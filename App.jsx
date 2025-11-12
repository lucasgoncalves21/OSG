import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStaticNavigation } from '@react-navigation/native';
import Home from './src/assets/screens/Home';
import Cadastro from './src/assets/screens/Cadastro';
import Login from './src/assets/screens/Login';
import Menu from './src/assets/screens/Menu';
import Perfil from './src/assets/screens/Perfil';
import Game from './src/assets/screens/Game';
import { Text } from 'react-native';

const ContainerApp = styled.SafeAreaView`
flex: 1;
`

export default function App() {
  return (
    <ContainerApp>
      <StatusBar hidden />
      <Text>oi</Text>
    </ContainerApp>
  );
}
