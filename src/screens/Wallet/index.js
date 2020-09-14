import React, { useState } from 'react';
import { Feather, MaterialCommunityIcons, AntDesign, FontAwesome } from '@expo/vector-icons';

import { Wrapper,
        Container,
        Header, 
        HeaderContainer, 
        Title, 
        BalanceContainer,
        Value,
        Bold,
        EyeButton,
        Info,
        Actions,
        Action,
        ActionLabel,
        UseBalance,
        UseBalanceTitle,
        PaymentMethods,
        PaymentMethodsTitle,
        Card,
        CardBody,
        CardDetails,
        CardTitle,
        CardInfo,
        Img,
        AddButton,
        AddLabel,
        UseTicketContainer,
        UseTicketButton,
        UseTicketLabel } from './styles';
import { Switch } from 'react-native';
import { StatusBar } from 'react-native';

import creditCard from '../../images/credit-card.png';

export default function Wallet(){
    const [ isVisible, setIsVisible ] = useState(true);
    const [ useBalance, setUseBalance ] = useState(true);

    function handleToggleVisibility(){
        setIsVisible((prevState) => !prevState);
        //prevState é o status atual do isVisible (true ou false)
        //e retorna a negação dela (!prevState) sendo setada pelo setIsVisible, invertando o valor do estado isVisible 
        //poderia ser assim setIsVisible(!isVisible), mas é recomendado pelo autor do video fazer do jeito que está descomentado
    }

    function handleToggleUseBalance(){
        setUseBalance((prevState) => !prevState);
    }

    return (
        <Wrapper>
            <Container>
                <Header 
                    colors={
                        useBalance
                            ? ['#52e78c', '#1ab563']
                            : ['#d3d3d3', '#868686']
                        } 
                    >

                    <HeaderContainer>
                        <Title>Saldo PicPay</Title>
                        <BalanceContainer>
                            <Value>
                                R$ <Bold>{isVisible ? '0,00' : '----' }</Bold>
                            </Value>
                            <EyeButton onPress={handleToggleVisibility} >
                                <Feather name={isVisible ? "eye" : 'eye-off'} size={28} color={'#fff'} />
                            </EyeButton>
                        </BalanceContainer>

                        <Info>
                            Seu saldo está rendendo 100% do CDI
                        </Info>

                        <Actions>
                            <Action>
                                <MaterialCommunityIcons name="cash" size={26} color={'#fff'} />
                                <ActionLabel>Adicionar</ActionLabel>
                            </Action>

                            <Action>
                                <FontAwesome name="bank" size={20} color={'#fff'} />
                                <ActionLabel>Retirar</ActionLabel>
                            </Action>                        
                        </Actions>
                    </HeaderContainer>
                </Header>

                <UseBalance>
                    <UseBalanceTitle>
                        Usar saldo ao pagar
                    </UseBalanceTitle>

                    <Switch 
                        value={useBalance} 
                        onValueChange={handleToggleUseBalance} 
                    />
                </UseBalance>

                <PaymentMethods>
                    <PaymentMethodsTitle>
                        Formas de pagamento
                    </PaymentMethodsTitle>

                    <Card>
                        <CardBody>
                            <CardDetails>
                                <CardTitle>
                                    Cadastre seu cartão de crédito
                                </CardTitle>
                                <CardInfo>
                                    Cadastre seu cartão de crédito para poder fazer pagamentos mesmo quando não tiver saldo no seu PicPay
                                </CardInfo>
                            </CardDetails>
                        
                            <Img source={creditCard} resizeMode="contain" />
                            {/* diferente da web se tu coloca width no Img ele corta a imagem, por isso
                            colocamos a propriedade resizeMode, mas também colocamos o width no estilo */}
                        </CardBody>
                        
                        <AddButton>
                            <AntDesign name="pluscircleo" size={30} color="#0db060" />
                            <AddLabel>
                                Adicionar cartão de crédito
                            </AddLabel> 
                        </AddButton>
                    </Card>

                    <UseTicketContainer>
                        <UseTicketButton>
                            <MaterialCommunityIcons name="ticket-outline" color="#0db060" size={20} />
                            <UseTicketLabel>
                                Usar código promocional    
                            </UseTicketLabel>   
                        </UseTicketButton>
                    </UseTicketContainer>
                    
                </PaymentMethods>
            </Container>
        </Wrapper>
    );
}