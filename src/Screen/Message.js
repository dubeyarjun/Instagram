import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Image,
} from 'react-native';
import React, {useRef} from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Searchbar from '../components/Searchbar';

const dummyData = [
  {
    id: '1',
    name: 'Your note',
    thumbnail:
      'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D',
    note: 'Note...',
  },
  {
    id: '2',
    name: 'Manisha',
    thumbnail:
      'https://images.unsplash.com/photo-1631947430066-48c30d57b943?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D',
    note: 'hello',
  },
  {
    id: '3',
    name: 'Shimpi',
    thumbnail:
      'https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHxlbnwwfHwwfHx8MA%3D%3D',
    note: 'hey...',
  },
  {
    id: '4',
    name: 'Shalu',
    thumbnail:
      'https://plus.unsplash.com/premium_photo-1664442782702-8deb8ebe0dd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGdpcmx8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: '5',
    name: 'Sapna',
    thumbnail:
      'https://images.unsplash.com/photo-1592188657297-c6473609e988?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdpcmx8ZW58MHx8MHx8fDA%3D',
  },
];
const dataMessage = [
  {
    id: '1',
    name: 'Manisha Dubey',
    ProfilePic:
      'https://images.unsplash.com/photo-1631947430066-48c30d57b943?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: '2',
    name: 'Sapna singh',
    ProfilePic:
      'https://images.unsplash.com/photo-1592188657297-c6473609e988?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdpcmx8ZW58MHx8MHx8fDA%3D',
  },
  {
  id: '3',
  name: 'Shimpi',
  ProfilePic:
    'https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHxlbnwwfHwwfHx8MA%3D%3D',

},
{
  id: '4',
  name: 'Shalu',
  ProfilePic:
    'https://plus.unsplash.com/premium_photo-1664442782702-8deb8ebe0dd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGdpcmx8ZW58MHx8MHx8fDA%3D',
},
];

const Message = ({navigation}) => {
  const statusIndicatorRef = useRef(null);

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
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
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 25,
          }}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={25} color={'#000'} />
          </TouchableOpacity>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 2}}>
            <Text style={{color: '#000', fontSize: 20, fontWeight: '600'}}>
              arjundubey5911
            </Text>

            <TouchableOpacity activeOpacity={0.5}>
              <AntDesign name="down" size={18} color={'#000'} />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity activeOpacity={0.5}>
          <Entypo name="new-message" size={22} color={'#000'} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <Searchbar />
        <FlatList
          data={dummyData}
          horizontal
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity activeOpacity={0.5} style={{marginTop: 30}}>
                <View style={styles.profileContainer}>
                  <Image
                    source={{uri: item.thumbnail}}
                    style={styles.profileImage}
                  />
                  {item.note ? (
                    <View
                      style={styles.statusIndicator}
                      ref={statusIndicatorRef}>
                      <Text style={styles.noteSign}>{item.note}</Text>
                    </View>
                  ) : null}
                  {index !== 0 && <View style={styles.greenDot} />}
                </View>
                <View style={styles.nameBox}>
                  <Text style={styles.userName}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            marginTop: 20,
          }}>
          <View>
            <Text style={{color: '#000', fontSize: 16, fontWeight: '500'}}>
              Messages
            </Text>
          </View>
          <TouchableOpacity activeOpacity={0.5}>
            <Text style={{color: '#15bbed', fontSize: 16, fontWeight: '500'}}>
              Request
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={dataMessage}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginHorizontal: 20,
                  marginTop: 20,
                }}>
                <TouchableOpacity activeOpacity={.5}
                  style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
                  <Image
                    source={{uri: item.ProfilePic}}
                    style={styles.ProfilePic}
                  />
                  <View>
                    <Text style={styles.userNameProfile}>{item.name}</Text>
                    <Text style={styles.userNameProfileinner}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.5}>
                <AntDesign name='camerao' size={30} color={'gray'}/>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </ScrollView>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  profileContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    position: 'relative',
  },
  nameBox: {marginHorizontal: 15, alignSelf: 'center'},
  userName: {
    fontSize: 12,
    marginTop: 5,
    color: '#000',
  },
  userNameProfile: {
    fontSize: 16,
    color: '#000',
  },
  userNameProfileinner: {
    fontSize: 14,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  ProfilePic: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  statusIndicator: {
    position: 'absolute',
    top: -20,
    left: -2,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: '#fff',
    backgroundColor: '#fff',
  },
  noteSign: {
    fontSize: 14,
    color: '#000',
  },
  greenDot: {
    position: 'absolute',
    bottom: 0,
    right: 1,
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: 'green',
    borderWidth: 2,
    borderColor: '#fff',
  },
});
