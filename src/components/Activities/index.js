import React from 'react';
import { Feather, AntDesign ,MaterialCommunityIcons } from '@expo/vector-icons'

import { Container, 
    Header, 
    Title, 
    Card, 
    CardHeader, 
    Avatar, 
    Description, 
    Bold,
    CardBody,
    UserName,
    CardFooter,
    Details,
    Value,
    Divider,
    Date,
    Actions,
    Option,
    OptionLabel,
} from './styles';

import avatar from '../../images/avatar.png';
//por ser só um export default dentro de uma função, não precisamos por {} na hora de chamar ele no screen (equivalente a página, o screen)
//agora se aparecesse no final de tudo export { parara, perere, piriri } seria necessário quando invocar ele na screen colocar entre chaves 
export default function Activities(){
    return (
        <Container>
            <Header>
                <Title>Atividades</Title>
            </Header>
            <Card>
                <CardHeader>
                    <Avatar source={avatar} />
                    <Description>
                        <Bold>Você</Bold> pagou a <Bold>@meninoney</Bold>
                    </Description>
                </CardHeader>
                
                <CardBody>
                    <UserName>Francisco Kemle</UserName>
                </CardBody>

                <CardFooter>
                    <Details>
                        <Value>R$ 21,00</Value>

                        <Divider />

                        <Feather name="lock" color="#fff" size={14} />
                        <Date>há 2 anos</Date>

                    </Details>

                    <Actions>
                        <Option>
                            <MaterialCommunityIcons name="comment-outline" size={14} color="#fff" />
                            <OptionLabel>0</OptionLabel>
                        </Option>

                        <Option>
                            <AntDesign name="hearto" size={14} color="#fff" />
                            <OptionLabel>0</OptionLabel>
                        </Option>
                    </Actions>
                </CardFooter>
            </Card>
        </Container>
    );
}