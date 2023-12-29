import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';


export default function ProfileScreen({ navigation }) {
  return (

    


    < View style = { styles.container } >
      <Text stylr={styles.texto}>ProfileScreen</Text>
      <Button title='Go to Home' onPress={() => navigation.navigate('Settings')} />
    </View >

  );
  function Voltar() {
    let casa = navigation.navigate('Settings');
    if (casa === 'Settings') {
      casa.HomeScreen
      alert('foi pra Home')
    }
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})