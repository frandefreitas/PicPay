import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import Navigation from './Navigation';
//import { StatusBar } from 'react-native'; //componente para mexer no header do celular mesmo, não do app, enquanto estamos no app

export default function App() {
  return (
    <>
      {/* <StatusBar barStyle="light-content" />  */}
      {/*deixa o topo do celular preto e as notificações, horas e detalhes branco */}
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </>
  );
}

