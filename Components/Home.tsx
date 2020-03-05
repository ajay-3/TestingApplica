import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function Home({navigation}) {
  const [value,onChangeText]=useState("")
  return (
    <View style={styles.container}>
      <Text style ={styles.heading}>ZMarket</Text>
      <View style={styles.body}>
       <TextInput 
        style = {styles.inputField}
        onChangeText={text => onChangeText(text)}
        keyboardType={"number-pad"}
        value={value} placeholder="phone number"/>
       <Button onPress={()=>navigation.navigate('OTPScreen')} title="Send OTP"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },heading:{
    flex:1,
    textAlign:"center",
    color:"black",
    fontSize:40,
    marginTop:50
  },
  body:{
    flex:3
  },
  inputField:{
    width:250,
    height:40,
    marginBottom:20,
    borderColor: 'gray',
   borderWidth: 1 
  }
});
