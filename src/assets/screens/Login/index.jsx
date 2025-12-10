import { useNavigation } from "@react-navigation/native";
import { Container, Logo, Title, Input, Button, ButtonText } from "./styles";
import { useState } from "react";

export default function Login(){
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    return(
        <Container>
            <Logo source={require("../../images/icon_OSG.jpg")} />
            <Title>Faça Login</Title>
            <Input 
            placeholder="Email ou Telefone"
            placeholderTextColor="#42A4C5"
            value={email}
            onChangeText={setEmail}
            />
            <Input 
            placeholder="Senha"
            placeholderTextColor="#42A4C5"
            value={senha}
            onChangeText={setSenha}
            />
            <Button onPress={() => navigation.navigate("Menu")}>
                <ButtonText>Entrar</ButtonText>
            </Button>
        </Container>
    );
}