import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const AllSameBtn = ({iconbtn, namebtn,namesidebtn}) => {
  return (
    <View>
       <TouchableOpacity
            activeOpacity={0.5}
            style={{
              marginTop: 20,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 15,
              }}>
              
              {iconbtn}
              <View>
                <Text style={{color: '#000', fontSize: 18}}>
                  {namebtn}
                </Text>
             
              </View>
            </View>
           <View  style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
              }}>
            <Text >{namesidebtn}</Text>
           <AntDesign name="right" size={20} color={'#5d5e5e'} />
           </View>
          </TouchableOpacity>
    </View>
  )
}

export default AllSameBtn

const styles = StyleSheet.create({})