import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient';

//o certo é criar ele
//export const Button = styled.div``;   na web
//export const Button = styled.View``;   no native

export const Button = styled(LinearGradient)`
    width: 60px;
    height: 60px;
    border-radius: 30px;  /*quando a gente passa o radius metado do width e do height ele fica redondo aos 100%, vira uma bolinha */
    align-items: center;
    justify-content: center;
`;

export const Label = styled.Text`
    font-size: 12px;
    color: ${({focused}) => focused ? '#000' : '#fff' };
`
