import { StyleSheet, Text, View ,Button} from 'react-native'
import React from 'react'

export default function SettingsScreen({navigation}){
  return (
    <View style={styles.container}>
      <Text stylr={styles.texto}>SettingsScreen</Text>
      <Button title='Go to Home' onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }
})