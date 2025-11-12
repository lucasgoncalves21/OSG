import { LoginContainer, Title, Logo, Button, ButtonText, Text } from "./styles";

export default function Home(){
    return (
        <LoginContainer>
            <Title>Seja Bem-Vindo</Title>
            <Logo source={require('../../images/icon_OSG.jpg')} />
            <Button>
                <ButtonText>Fazer Login</ButtonText>
            </Button>
            <Text>OU</Text>
            <Button>
                <ButtonText>Cadastre-se</ButtonText>
            </Button>
        </LoginContainer>
    );
}