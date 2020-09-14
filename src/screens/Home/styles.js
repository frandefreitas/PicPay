import styled from 'styled-components/native'


//SafeAreaView por que quero trabalhar na area segura do meu app abaixo do header do celular, onde fica o horario e notificações até acima da seta, bolinha e quadrado no rodapé
export const Wrapper = styled.SafeAreaView`
    background: #000;
    flex: 1;
`;

//o react native não é inteligente pra saber que todos os componente não cabem na tela
//para dar o scroll é necessário utilizar o scrollview.
export const Container = styled.ScrollView` `;

//View é a div do react-native
export const Header = styled.View` 
    height: 50px;
    padding: 0 16px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const BalanceContainer = styled.View`

`;

//diferente do react.js se poe .div, que equivale a .View ele dá erro, precisa ser .Text porque tem texto/número/algarismos dentro
export const BalanceTitle = styled.Text`
    color: rgba(255, 255, 255, 0.8);
    font-size: 14px;
    text-align: center;
`;

export const Balance = styled.Text`
    color: #fff;
    font-size: 20px;
    text-align: center;
    font-weight: bold;
`;