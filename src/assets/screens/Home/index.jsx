import { useNavigation } from "@react-navigation/native";
import { LoginContainer, Title, Logo, Button, ButtonText, Text } from "./styles";
import { TouchableOpacity } from "react-native";

export default function Home(){
    const navigation = useNavigation();
    return (
        <LoginContainer>
            <Title>Seja Bem-Vindo</Title>
            <Logo source={require('../../images/icon_OSG.jpg')} />
            <Button>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <ButtonText>Fazer Login</ButtonText>
                </TouchableOpacity>
            </Button>
            <Text>OU</Text>
            <Button>
                <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
                <ButtonText>Cadastre-se</ButtonText>
                </TouchableOpacity>
            </Button>
        </LoginContainer>
    );
}
