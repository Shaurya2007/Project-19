import React, { Component } from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import {Header} from 'react-native-elements'

export default class App extends Component {
  constructor(){

  super()
this.state={text:" ",displayText:""}

  }
  render(){
  return (
    <View>
      <Header backgroundColor={'#9cb210'} centerComponent={{text:'MonkeyChunkey',style:{color:'#fff',fontSize:20}}}></Header>
      <TextInput style={{marginTop:50,width:50,height:50}} onChangeText={(text)=>{
        this.setState({text:text})
      }} value={this.state.text}></TextInput>
<TouchableOpacity onPress={()=>{
  this.setState({displayText:this.state.text})
}} >
  <Text>Go</Text>
</TouchableOpacity>
<Text>{this.state.displayText}</Text>
    </View>
  );
}
}

