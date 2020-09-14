import React from 'react';
// import { Text } from 'react-native';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'
import { Wrapper, Container, Header, BalanceContainer, BalanceTitle, Balance } from './styles'
import { StatusBar } from 'react-native'; //componente para mexer no header do celular mesmo, não do app, enquanto estamos no app
import Suggestions from '../../components/Suggestions'
import Activities from '../../components/Activities'
import Tips from '../../components/Tips'
import Banner from '../../components/Banner'

export default function Home(){
     return (
        <Wrapper>
            <StatusBar barStyle="light-content" backgroundColor={'#000'}/> 
            {/*deixa o topo do celular preto e as notificações, horas e detalhes branco */}
            {/* <Text style={{color:'#fff'}}>Home</Text> */}
            <Container>
                <Header>
                    <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86e"/>
                    <BalanceContainer>
                        <BalanceTitle>Meu saldo</BalanceTitle>
                        <Balance>R$ 0,00</Balance>
                    </BalanceContainer>
                    <AntDesign name="gift" size={30} color="#10c86e"/>
                </Header>
                <Suggestions />
                <Activities />
                <Tips  />
                <Banner />
            </Container>
            
        </Wrapper>
    );
}