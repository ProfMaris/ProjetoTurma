
import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, View,Image,TouchableOpacity,StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Comandos from '../screens/listacomandos'
import Info from '../screens/info'



function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>INFORMAÇÕES DOS NOVOS COMANDOS CADASTRADOS</Text>
    </View>
  );
}

function Cadastro() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Cadastro de novos comandos no banco de dados</Text>
    </View>
  );
}

function Home({navigation}) {
  return (
    <View style={styles.container}>
     <View style={styles.controlSpace}>
    
        <View style={styles.buttonView}>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastros')}>
          <Image source={require("../imagens/botao_1.png")} style={styles.btimage}/>
           <Text>Tratar Imagens</Text>
        </TouchableOpacity>
        </View>
        
        <View style={styles.buttonView}>
        
        
        <TouchableOpacity onPress={() => navigation.navigate('Cadastros')}>
         <Image source={require("../imagens/botao_1.png")} style={styles.btimage}/>
          <Text style={{marginTop:0}}>Entrada de Dados </Text>
        </TouchableOpacity>
        </View>
        <View style={styles.buttonView}>
                <TouchableOpacity onPress={() => navigation.navigate('Cadastros')}>
         <Image source={require("../imagens/botao_1.png")} style={styles.btimage}/>
          <Text>Entrada de Dados </Text>
        </TouchableOpacity>
        </View>
            <View style={styles.buttonView}>
                <TouchableOpacity onPress={() => navigation.navigate('Cadastros')}>
         <Image source={require("../imagens/botao_1.png")} style={styles.btimage}/>
          <Text>Entrada de Dados </Text>
        </TouchableOpacity>
        </View>
    
    </View>
    </View>
  )
 
}


const Tab = createMaterialBottomTabNavigator();

function BotaoNavegacao({navigation}) {
  return (
    <Tab.Navigator
      initialRouteName="HOME"
      activeColor="#e91e63"
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="FeeAAAd"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
       <Tab.Screen
        name="Informações"
        component={Info}
        options={{
          tabBarLabel: 'Info',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="info" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Comandos"
        component={Comandos}
        options={{
          tabBarLabel: 'Comandos',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book" color={color} size={26} />
          ),
        }}
      />
        <Tab.Screen
        name="Cadastros"
        component={Cadastro}
        options={{
          tabBarLabel: 'Cadastro',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="album" color={color} size={26} />
          ),
        }}
      />
      
     
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
 container :{
    height:'100%',
    marginTop:30,
    flex: 0.75,
    justifyContent:"center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
    alignItems:'center',
    marginLeft:10
  },
  controlSpace: {
    flexDirection: 'row',
    flexWrap: 'wrap',   
    marginLeft:5,
  },
  buttonView: {
    width: '50%',
    padding: 10,
  },
  btimage:{
    width:150,
    height:150,
    
  }
  
});

export default BotaoNavegacao