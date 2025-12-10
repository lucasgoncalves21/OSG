import { useNavigation } from "@react-navigation/native";
import { Container, Logo, Title, Input, Button, ButtonText } from "./styles";
import { useState } from "react";


export default function Cadastro(){
    const navigation = useNavigation();
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmar, setConfirmar] = useState("");

    return(
        <Container>
            <Logo source={require('../../images/icon_OSG.jpg')}/>
            <Title>Faça seu Cadastro</Title>
            <Input 
            placeholder="Nome Completo"
            placeholderTextColor="#42A4C5"
            value={nome}
            onChangeText={setNome}
            />
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
            <Input 
            placeholder="Confirmar Senha"
            placeholderTextColor="#42A4C5"
            value={confirmar}
            onChangeText={setConfirmar}
            />
            <Button onPress={() => navigation.navigate("Login")}>
                <ButtonText>Enviar</ButtonText>
            </Button>
        </Container>
    );
}
