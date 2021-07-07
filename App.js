import React, { Component } from 'react';
import { Button, View, Text, Alert,TouchableOpacity,StyleSheet,Dimensions } from 'react-native';
import {Audio} from 'expo-av';

class RedButton extends Component{
  render(){
    return(
      <View style={{alignContent:"center",alignSelf:"center",justifyContent:"space-between",margin:10,padding:20}}>

      <TouchableOpacity style={touchButtons.touchOp} onPress={async ()=>{
        //Alert.alert(this.props.on,"This Button is Clicked!!");

        if(this.props.on==="Sound1"){
          Audio.setIsEnabledAsync(true);
          await Audio.Sound.createAsync({uri:"https://assets.mixkit.co/sfx/download/mixkit-short-guitar-riff-2322.wav"},{shouldPlay:true})
        }

        else if(this.props.on==="Sound2"){
          Audio.setIsEnabledAsync(true);
          await Audio.Sound.createAsync({uri:"https://assets.mixkit.co/sfx/download/mixkit-happy-guitar-chords-2319.wav"},{shouldPlay:true})
        }

        if(this.props.on==="Sound3"){
          await Audio.setIsEnabledAsync(true);
          Audio.Sound.createAsync({uri:"https://assets.mixkit.co/sfx/download/mixkit-cool-guitar-riff-2321.wav"},{shouldPlay:true})
        }

        if(this.props.on==="Sound4"){
         await Audio.setIsEnabledAsync(true);
           Audio.Sound.createAsync({uri:"https://assets.mixkit.co/sfx/download/mixkit-short-guitar-strum-2318.wav"},{shouldPlay:true})
        }         


      }}>
      <Text style={touchButtons.butn}>{this.props.text}</Text>
      </TouchableOpacity>

      </View>
    );
  }
}

const touchButtons = StyleSheet.create({
  butn: {
   // margin:10,
    //alignSelf:"center",
    //backgroundColor:"red",
    width:200,
    height:50,
    textAlign:"center",
    alignItems:"center",
    justifyContent:"center",
    color:"red",
    padding:9,
    fontSize:20,
    fontWeight:"bold"
  },

  touchOp: {
    alignItems:"center",
    justifyContent:"center",
    margin:20,
    borderRadius:40,
    width:200,
    height:40,
    borderWidth:2,
    borderColor:"#ffffff"
  }
});

export default class App extends Component {
  render() {
    return (
      <View style={{ margin: 0, backgroundColor: "#212121", width:Dimensions.get('window').width, height:Dimensions.get('window').height }}>
        <RedButton text="Sound1"   on="Sound1" />
        <RedButton text="Sound2"   on="Sound2" />
        <RedButton text="Sound3"   on="Sound3" />
        <RedButton text="Sound4"   on="Sound4" />
        <View style={{alignContent:"center",alignSelf:"center",justifyContent:"space-between",margin:10,padding:20}}>
          <TouchableOpacity style={touchButtons.touchOp} onPress={()=>{
            Audio.setIsEnabledAsync(false);
          }}>
            <Text style={touchButtons.butn}>Stop Sound</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
