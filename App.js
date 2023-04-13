import * as React from 'react';
import { Header } from 'react-native-elements';
import { SafeAreaProvider} from 'react-native-safe-area-context';
import { Text, View,Image,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import BotaoNavegacao from './navegacao/TabNavigator'
import Lista from './screens/lista'
const Stack = createStackNavigator();

const MenuPrincipal = () => {
  return(
  <Stack.Navigator initialRouteName="Apresenta"  screenOptions={{
    headerShown: false,
    gestureEnabled: false
  }}>
    <Stack.Screen name="Apresenta" component={Apresenta} />
    <Stack.Screen name="Barra" component={BotaoNavegacao} />
    <Stack.Screen name="Lista" component={Lista} />
  </Stack.Navigator>)
}

function Apresenta({ route, navigation}) {
  return (
     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>APRESENTAÇÃO DO APP : IMAGEM SIMPÁTICA</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Barra")}>
      <Text>Consulte - COLOCAR UMA IMAGEM DE BOTAO</Text>
      </TouchableOpacity>
    </View>
  )
 
}



export default function App() {
  return (
    <SafeAreaProvider>
        <Header 
        containerStyle={{
        justifyContent: 'space-around',
        width:"100%"
               }}>  
          <Image
              style={{ width: 50, height: 50 }}
              source={require('@expo/snack-static/react-native-logo.png')}
           />
           <TouchableOpacity>
             <Text> Colocar uma icone para contato</Text>
           </TouchableOpacity>

        </Header>
      <NavigationContainer>
        <MenuPrincipal />
      </NavigationContainer>
  </SafeAreaProvider>
  );
}
