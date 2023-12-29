import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function HomeScreen({navigation}){
  return (
    <View style={styles.container}>
      <Text stylr={styles.texto}>HomeScreen</Text>
      <Button title='Go to Profile' onPress={() => navigation.navigate('Profile')} />
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