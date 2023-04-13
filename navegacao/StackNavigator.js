import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Info from '../screens/info'
import Dados from '../screens/dados'
import Lista from '../screens/lista'
import BotaoNavegacao from './TabNavigator' 
const Stack = createNativeStackNavigator();

const  Navegacaolink = () => {
  return (
    <Stack.Navigator
      initialRouteName="Lista"
      screenOptions={{
        headerShown: true
      }}
    >
      <Stack.Screen name="Lista" component={Lista} />
      <Stack.Screen name="Dados" component={Dados} />
       <Stack.Screen name="Inicio" component={BotaoNavegacao} />
    </Stack.Navigator>
  );
};
export default Navegacaolink