import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const PostData = [
  {
    id: '1',
    postimg:
      'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: '2',
    postimg:
      'https://images.unsplash.com/photo-1631947430066-48c30d57b943?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: '3',
    postimg:
      'https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: '4',
    postimg:
      'https://plus.unsplash.com/premium_photo-1664442782702-8deb8ebe0dd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGdpcmx8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: '5',
    postimg:
      'https://images.unsplash.com/photo-1592188657297-c6473609e988?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdpcmx8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: '6',
    postimg:
      'https://images.unsplash.com/photo-1467307983825-619715426c70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdpcmx8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: '7',
    postimg:
      'https://images.unsplash.com/photo-1635488640163-e5f6782cda6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdpcmx8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: '8',
    postimg:
      'https://images.unsplash.com/photo-1660951381925-57ac7e40c40d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGdpcmx8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: '9',
    postimg:
      'https://images.unsplash.com/photo-1607062294260-e5b054f2c96b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGdpcmx8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: '10',
    postimg:
      'https://images.unsplash.com/photo-1586351012965-861624544334?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGdpcmx8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: '11',
    postimg:
      'https://images.unsplash.com/photo-1541580621-47abd5e3da8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGdpcmx8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: '12',
    postimg:
      'https://images.unsplash.com/photo-1662351997685-57a21379d966?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGdpcmx8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: '13',
    postimg:
      'https://images.unsplash.com/photo-1660810710775-dceb42ffaebb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGdpcmx8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: '14',
    postimg:
      'https://images.unsplash.com/photo-1599457382197-820d65b8bbdc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGdpcmx8ZW58MHx8MHx8fDA%3D',
  },
 
  {
    id: '15',
    postimg:
      'https://images.unsplash.com/photo-1541580621-47abd5e3da8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGdpcmx8ZW58MHx8MHx8fDA%3D',
  },
];

const Vedio = () => {
  return (
    <ScrollView  
    contentContainerStyle={{alignItems:'center', flex:1, justifyContent:'center'}}>
      <FlatList data={PostData} numColumns={3} showsVerticalScrollIndicator={false} renderItem={({item,index})=>{
        return(
            <TouchableOpacity activeOpacity={.5} style={{height:200, width:130, margin:2}}>
              <Image source={{uri:item.postimg}} style={{height:200, width:130, margin:2}}/>


            </TouchableOpacity>
        );
      }}/>
    </ScrollView>
  )
}

export default Vedio

const styles = StyleSheet.create({})