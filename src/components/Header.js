import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Header = ({title, icon,iconRight, onPress}) => {
  return (
    <View
      style={{
        
        flexDirection: 'row',
        backgroundColor: '#fff',
        width: '100%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        
      }}>
      <View style={{ display:'flex',flexDirection:'row',  alignItems:'center', gap:25}}>
        <TouchableOpacity activeOpacity={0.5}  onPress={onPress}>
          <AntDesign name="arrowleft" size={25} color={'#000'} />
        </TouchableOpacity>
        <Text style={{color:'#000', fontSize:20, fontWeight:'600'}}>{title}</Text>
        <TouchableOpacity activeOpacity={0.5}>
        {/* <AntDesign name="down" size={25} color={'#000'} /> */}
        {icon}
        </TouchableOpacity>
      </View>
      {/* <AntDesign name="arrowleft" size={25} color={'#000'} /> */}
      <TouchableOpacity activeOpacity={0.5}>
        {/* <AntDesign name="down" size={25} color={'#000'} /> */}
        {iconRight}
        </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
