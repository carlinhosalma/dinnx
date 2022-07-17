import styled from "styled-components/native";
import theme from "./theme.json";
import MapView from "react-native-maps";
import Pulse from "react-native-pulse"

export const Container = styled.View`
  flex: 1;
  background: ${(props) =>
    props.bgColor ? theme.colors[props.bgColor] : "transparent"};
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  justify-content: ${(props) => props.justify || "center"};
  padding: ${(props) => props.padding || 0}px;
  width: 100%;
  align-items: ${(props) => props.align || "center"};
  max-width: ${(props) => props.width?  props.width + "px" : "100%"};
  max-height: ${(props) => (props.height ? props.height + "px" : "auto")};
  position: ${(props) => props.position || "relative"};
  top: ${(props) => props.top || "0"}px;
  z-index: ${(props) => props.zIndex || "1"};
  border-radius: ${(props) => props.radius || "0"}px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  padding: ${(props) => (props.compact ? 5 : 15)}px;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  border-radius: ${(props) => props.radius || "0"}px;
  background: ${(props) =>
    props.type ? theme.colors[props.type] : theme.colors.primary};
`;
export const ButtonText = styled.Text`
  text-align: center;
  color: ${(props) => (props.color ? theme.colors[props.color] : "#000")};
`;

export const ImageLogo = styled.Image`
  height: ${(props) => (props.height ? props.height + "px" : "auto")};
  margin-bottom: ${(props) => (props.margin ? props.margin : "0")};
`;

export const Title = styled.Text`
  font-size: 20px;
  color: ${theme.colors.dark};
  font-weight: bold;
`;

export const SubTitle = styled.Text`
  font-size: ${(props) => (props.small ? 12 : 15)}px;
  opacity: 0.7;
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  color: ${(props) =>
    props.color ? theme.colors[props.color] : theme.colors.dark};
`;

export const PickerButton = styled.TouchableOpacity`
  width: 100%;
  height: 30%;
  margin-top: 1%;
  border-width: 3px;
  border-style: solid;
  justify-content: space-around;
  align-items: center;
  border-color: ${(props) =>
    props.active ? theme.colors.primary : theme.colors.muted50};
  background-color: ${(props) =>
    props.active ? theme.colors.primary + "80" : theme.colors.muted50};
`;

export const Input = styled.TextInput`
  background-color: ${theme.colors.light};
  border: 1px solid ${theme.colors.muted};
  width: 100%;
  padding: 7px 15px;
`;

export const Spacer = styled.View`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "10"}px;
  background: ${(props) =>
    props.bgColor ? theme.colors[props.bgColor] : "transparent"};
 
`;

export const AddressList = styled.FlatList`
  flex: 1;
  width: 100%;
  padding-top: 10px;
  background: #f90;
`;

export const AddressItem = styled.TouchableOpacity`
  padding: 5px 0;
  align-items: flex-start;
`;

export const Map = styled(MapView)`
    flex:1 ;
    width:100% ;
    height: 100% ;
    opacity: ${props => props.disabled ? 0.2: 1} ;

`;

export const Avatar =styled.Image.attrs({
    elevation:50,
})`
    width: ${props => props.small? 35: 50}px ;
    height: ${props => props.small? 35: 50}px ;
    box-shadow: 0px 4px rgba(0,0,0,0.25) ;
    background: ${theme.colors.muted} ;
    border-radius: ${props => props.small? 35: 50}px ;

`;

export const VerticalSeparator = styled.View`
width:1px ;
height: 100% ;
background:${theme.colors.muted} ;
`;

export const Bullet = styled.View`
width: 10px ;
height:10px ;
border-radius:10px ;
background: ${props => props.destination ? '#FF2929':'#00Eb56'} ;
`;

export const PulseCircle = styled(Pulse).attrs({
    color:  theme.colors.primary 

})``;