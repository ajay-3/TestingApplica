import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
//import OtpInputs from 'react-native-otp-inputs'

export default class OTPScreen extends Component {
constructor(props){
    super(props)
    this.state={
        otpValue:[]
    }
} 


focusNext(index){
 // implement the next focusing Element here
}

focusPrevious(keyStroke,index){
  if(keyStroke=="back-Space"){
      //implement the back focus here
  }
}

render() {
    return (
      <View style={styles.container}>
         <Text style={styles.heading}>Enter the OTP sent to your Mobile Number</Text>
         <View style={styles.mainBlock}>
             {[].map((element,i)=>(
                 <TextInput  
                 style={{height:40,width:50,borderColor:"grey",borderWidth:1,marginRight:10}}
                 keyboardType={"numeric"}
                 onChangeText={value=> this.focusNext(i)}
                 onKeyPress={e => this.focusPrevious(e.nativeEvent.key, i)}
                 maxLength={1}
                 key={i}
                 />
             ))}
         </View>
         <Text style={styles.resubmit}>resend OTP in x sec</Text> 
         <Button title = "Submit OTP" onPress={()=>{alert("Registered successfully")}} />
      </View>
    )
  }
}


const styles = StyleSheet.create({
 container:{
     flex:1
 },
 heading:{
     flex:1,
     textAlign:"center",
     marginTop:40,
     fontSize:20,

 },
 mainBlock:{
     flexDirection:"row",
     flex:1,
     justifyContent:"center"
 },
 resubmit:{
     flex:1,
     textAlign:"center"
 }
})