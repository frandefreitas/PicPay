import styled from 'styled-components/native';

//showsHorizontalScrollIndicator propriedade para remover a barrinha inferior no scrool
export const Container = styled.ScrollView.attrs(() => ({
    horizontal: true, 
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {
        alignItems: 'center',
        paddingLeft: 16
    },
}))`
    background-color: #1e222b;
    height: 130px;
    /*align-items: center;  não para aplicar na ScrollView este tipo de estilização que dá tela de erro, para resolver isso precisa
    aplicar  no componente que fica envolvendo todos os filhos da ScroolView, por isso fazemos aquelas modificações na linha 3 */
`;



export const Option = styled.TouchableOpacity`
    width: 80px;
    margin-right: 16px;
    align-items: center;
`;

export const Img = styled.Image``;

export const Label = styled.Text`
    color: #fff;
    font-weight: bold;
    margin-top: 8px;
    font-size: 14px;
`;