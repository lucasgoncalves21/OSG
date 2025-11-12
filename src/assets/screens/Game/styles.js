import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #1f0236;
  align-items: center;
  padding-top: 50px;
`;

export const Header = styled.View`
  width: 90%;
  margin-bottom: 30px;
`;

export const BackButton = styled.TouchableOpacity`
  margin-bottom: 10px;
  margin-left: -10px;
  margin-top: -15px;
`;

export const Title = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
  margin-left: 35px;
  margin-top: 20px;
`;

export const GameOption = styled.TouchableOpacity`
  background-color: #2a0d4d;
  border-radius: 20px;
  width: 90%;
  padding: 20px;
  margin: 10px 0;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const OptionText = styled.Text`
  color: #fff;
  font-size: 18px;
  margin-left: 15px;
`;

export const BottomMenu = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  background-color: #2a0d4d;
  padding: 10px 0;
  margin-bottom: 30px;
`;

export const MenuButton = styled.TouchableOpacity`
  align-items: center;
`;

export const MenuText = styled.Text`
  color: #c67afc;
  font-size: 15px;
`;

export const Text = styled.Text`
color: white;
font-size: 20px;
margin-left: 37px;
`

export const Text2 = styled.Text`
margin-left: 99px;
font-size: 20px;
color: white;
`

export const Text3 = styled.Text`
margin-left: 15px;
font-size: 20px;
color: white;
`
export const BottomImage = styled.Image`
width: 10%;
height: 10%;
`