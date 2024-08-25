import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';



const tag = () => {
  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <View style={{width:100, height:100, borderWidth:2.5, borderColor:'#000', borderRadius:50, alignItems:'center', justifyContent:'center'}}>
        <FontAwesome name="user-circle-o" size={50} color={'#000'} />
        </View>
      <Text style={{color:'#000', fontSize:20, fontWeight:'900', marginTop:10}}>Photos and video of you</Text>
      <Text style={{fontSize:15, textAlign:'center', fontWeight:'500', width:320, marginTop:10}}>When people tag you in photos and videos, they'll appear here.</Text>
    </View>
  )
}

export default tag

const styles = StyleSheet.create({})