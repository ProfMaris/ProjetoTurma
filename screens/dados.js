import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import { Avatar, ListItem, Icon } from 'react-native-elements';
import {
  BiInfoCircle,
  BiUserPlus,
  BiArrowBack,
  BiHome,
  BiLogIn,
} from 'react-icons/bi';
import Constants from 'expo-constants';

export default class Dados extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
         <View style={{fontSize:20,marginBottom:20}}>
            
            INFORMAÇÕES DETALHADAS DOS comandos
            
            
         </View>

    

          <ListItem bottomDivider>
           
           
            <ListItem.Content>
              <ListItem.Title>Maristela Borges</ListItem.Title>
              <ListItem.Subtitle>Prof</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
           <ListItem bottomDivider>
            <Avatar
              rounded
              source={{
                uri: 'https://media.licdn.com/dms/image/C4E03AQHzUCeKOtFq1w/profile-displayphoto-shrink_200_200/0/1654017232488?e=1684368000&v=beta&t=FF8uj3jYCV1wDjeixRTZjVgJ83RWSw_b6l6K9zCNGOk',
              }}
            />
            <ListItem.Content>
              <ListItem.Title>Aluno 1</ListItem.Title>
              <ListItem.Subtitle>Prof</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
            <ListItem bottomDivider>
           
            <ListItem.Content>
              <ListItem.Title>Aluno 2</ListItem.Title>
              <ListItem.Subtitle>Prof</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem bottomDivider>
         
            <ListItem.Content>
              <ListItem.Title>Aluno 3</ListItem.Title>
              <ListItem.Subtitle>Prof</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
         
        </View>
 
       

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    marginBottom: 30,
    marginTop:20
  },
});
