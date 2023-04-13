import React, {useState} from 'react';
import { StyleSheet,SafeAreaView,FlatList,Text,View,TouchableOpacity,Button} from 'react-native';
import Navegacaolink from '../navegacao/StackNavigator'

const codigos = require("../base/referencias.json");

const Item = ({item, chamada, backgroundColor, textColor,leia,navigation}) => (
  <View>
  <TouchableOpacity onPress={chamada} style={[styles.item, {backgroundColor}]}>
         <Text style={[styles.title, {color: textColor}]}>{item.nome}</Text>
         <Text style={[styles.paragrafo, {color: textColor}]}>{item.utilizacao}</Text>
    
         <Text style={styles.categoria}>{item.categoria}</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => navigation.navigate('Lista',{codigo:item.id})} style={styles.leia}>
         <Text style={[styles.paragrafo, {color: leia}]}>+Informações</Text>
  </TouchableOpacity>
  </View>
);




const Comandos = ({navigation}) => {
  const [selectedId, setSelectedId] = useState();


  const renderItem = ({item}) => {
    
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';
    const vejacolor = item.id === selectedId ? 'black' : 'white';

    return (
      <View>
      <Item
        item={item}
        chamada={() =>{ 
          setSelectedId(item.id)

          }}
      
        backgroundColor={backgroundColor}
        textColor={color}
        leia={vejacolor}
        navigation={navigation}
      />
       </View>
    );
  };

  return(
    
      <SafeAreaView style={styles.container}>
      <Navegacaolink/>
      <FlatList
        data={codigos}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
         
  )
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
   
   
  },
  item: {
    backgroundColor: '#f9c2ff',

    height: 150,
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
    
  },
  title: {
    fontSize: 24,
  },
  paragrafo: {
    fontSize: 12,
  },
   categoria: {
    fontSize: 12,
    color:'green'
  },
  leia: {
    height:10,
    marginLeft:20
   
  },
});

export default Comandos;