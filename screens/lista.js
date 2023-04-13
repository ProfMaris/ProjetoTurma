import React from 'react';
import {
  SafeAreaView,
  View,
  VirtualizedList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';




const Lista=({ navigation,item })=>{
  return (
  
  <SafeAreaView style={styles.container}>
    <View style={styles.item}>

  <TouchableOpacity>
    <Text style={styles.title}>{item}</Text>
    <Text>item.ome</Text>
    <Text>Para que é utilizado</Text>
    <Text>Links de Referencia</Text>
    <Text>Sua</Text>
    
        </TouchableOpacity>
          <TouchableOpacity onPress={()=>{navigation.navigate('Comandos')
          }
          }>
      Voltar
      </TouchableOpacity>
  </View>
    
  
        </SafeAreaView>
  )       
}






const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
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
    fontSize: 32,
  },
});

export default Lista;