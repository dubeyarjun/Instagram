import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React, { useState } from 'react';
const WIDTH = Dimensions.get('window').width;
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Grid from '../About/Grid';
import Vedio from '../About/Vedio';
import Tag from '../About/Tag';




const About = ({navigation}) => {
   const [selectedTab, setSelectedTab] = useState('grid');
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <View
        style={{
          width: WIDTH,
          height: 70,
          backgroundColor: '#fff',
          paddingHorizontal: '5%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
          <TouchableOpacity activeOpacity={0.5}>
            <AntDesign name="lock" size={18} color={'#000'} />
          </TouchableOpacity>
          <Text style={{color: '#000', fontSize: 20, fontWeight: 'bold'}}>
            arjundubey5911
          </Text>
          <TouchableOpacity activeOpacity={0.5}>
            <AntDesign name="down" size={18} color={'#000'} />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 25}}>
          <TouchableOpacity activeOpacity={0.5}>
            <Text style={{fontSize: 25, color: '#000', fontWeight: 'bold'}}>
              @
            </Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}  onPress={() => navigation.navigate('ModalScreen')}>
            <Octicons name="diff-added" size={25} color={'#000'} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5} onPress={()=> navigation.navigate('SettingPage')}>
            <AntDesign name="bars" size={25} color={'#000'} />
          </TouchableOpacity>
        </View>
      </View>
      {/*================================== uhser info========================== */}
      <View
        style={{
          backgroundColor: '#fff',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <View
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
           
            marginHorizontal: 10,
            marginLeft: -10,
          }}>
            <Image source={{uri:'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D'}}
            style={{width: 70,
              height: 70,
              borderRadius: 35}}/>
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              right: -3,
              height: 25,
              width: 25,
              borderRadius: 15,
              borderWidth: 3,
              borderColor: '#fff',
              backgroundColor: 'blue',
            }}>
            <Text
              style={{
                fontSize: 25,
                color: '#fff',

                alignSelf: 'center',
                marginTop: -5,
              }}>
              +
            </Text>
          </View>
          <View
            style={{
              position: 'absolute',
              elevation: 5,
              top: -10,
              height: 30,
              width: 50,
              left: -2,
              borderRadius: 15,
              borderWidth: 3,
              borderColor: '#fff',
              backgroundColor: '#fff',
            }}>
            <Text
              style={{
                color: '#000',

                alignSelf: 'center',
              }}>
              Note...
            </Text>
          </View>
        </View>

        <View>
          <Text
            style={{
              color: '#000',
              fontWeight: 'bold',
              fontSize: 18,
              alignSelf: 'center',
            }}>
            5
          </Text>
          <Text style={{fontSize: 15, color: '#403d3d'}}>Posts</Text>
        </View>
        <View>
          <Text
            style={{
              color: '#000',
              fontWeight: 'bold',
              fontSize: 18,
              alignSelf: 'center',
            }}>
            55
          </Text>
          <Text style={{fontSize: 15, color: '#403d3d'}}>followers</Text>
        </View>
        <View>
          <Text
            style={{
              color: '#000',
              fontWeight: 'bold',
              fontSize: 18,
              alignSelf: 'center',
            }}>
            155
          </Text>
          <Text style={{fontSize: 15, color: '#403d3d'}}> following</Text>
        </View>
      </View>
      <View style={{marginHorizontal: 20, marginTop: 5}}>
        <Text style={{color: '#000', fontWeight: 'bold'}}>Arjun Dubey</Text>
        <Text style={{color: '#000', fontWeight: '500'}}>1% CLUB 😎</Text>
      </View>
      {/*========================= profile button============================== */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          marginTop: 15,
          gap:10
        }}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={{borderRadius: 10, overflow: 'hidden'}}>
          <Text
            style={{
              height: 35,
              width: 170,
              color: '#000',
              backgroundColor: '#dadada',
              textAlign: 'center',
              lineHeight: 35, // Ensures text is vertically centered
              borderRadius: 10, // Match the TouchableOpacity borderRadius
            }}>
            Edit profile
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={{borderRadius: 10, overflow: 'hidden'}}>
          <Text
            style={{
              height: 35,
              width: 170,
              color: '#000',
              backgroundColor: '#dadada',
              textAlign: 'center',
              lineHeight: 35, // Ensures text is vertically centered
              borderRadius: 10, // Match the TouchableOpacity borderRadius
            }}>
            Share profile
          </Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={.5}   style={{borderRadius: 10, overflow: 'hidden'}}>
             <Text
            style={{
              height: 35,
              width: 50,
              color: '#000',
              backgroundColor: '#dadada',
              textAlign: 'center',
              lineHeight: 35, // Ensures text is vertically centered
              borderRadius: 10, // Match the TouchableOpacity borderRadius
            }}>
            <AntDesign name="adduser" size={18} color={'#000'} />
          </Text>

        </TouchableOpacity>
      </View>

      {/* =========================================story save ============================================ */}
      <View>
        <FlatList
          data={[1]}
          renderItem={() => {
            return (
              <View style={{marginTop: 20, marginHorizontal: 10}}>
                <TouchableOpacity
                  activeOpacity={0.5}
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: 35,
                    borderColor: '#000',
                    borderWidth: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <AntDesign name="plus" size={25} color={'#000'} />
                </TouchableOpacity>
                <View style={{marginLeft: 20}}>
                  <Text
                    style={{color: '#000', fontSize: 15, fontWeight: '600'}}>
                    New
                  </Text>
                </View>
              </View>
            );
          }}
        />
      </View>

      {/*=========================== capture the moment with a friend =====================*/}
      <View
        style={{
          marginTop: 30,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={{
            borderBottomWidth: selectedTab === 'grid' ? 1 : 0,
            borderBottomColor: '#000',
            width: 80,
            alignItems: 'center',
            paddingBottom: 10,
          }}
          onPress={() => {
            setSelectedTab('grid');
            
          }}>
           
          
          <MaterialCommunityIcons name="grid" size={30} color={selectedTab === 'grid' ? '#000' : 'gray'} />
          
        </TouchableOpacity >
        
        <TouchableOpacity activeOpacity={0.5} style={{
          borderBottomWidth: selectedTab === 'video' ? 1 : 0,
            borderBottomColor: '#000',
            width: 80,
            alignItems: 'center',
            paddingBottom: 10,
          }}
           onPress={() => setSelectedTab('video')}>
          <MaterialIcons name="video-library" size={30} color={selectedTab === 'video' ? '#000' : 'gray'} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}style={{
            borderBottomWidth: selectedTab === 'user' ? 1 : 0,
            borderBottomColor: '#000',
            width: 80,
            alignItems: 'center',
            paddingBottom: 10,
          }} onPress={() => setSelectedTab('user')}>
          <FontAwesome name="user-circle-o" size={30} color={selectedTab === 'user' ? '#000' : 'gray'} />
        </TouchableOpacity>
      </View>
       {/* Components */}
       <View style={{ flex: 1, marginTop: 20 }}>
        {selectedTab === 'grid' && <Grid />}
        {selectedTab === 'video' && <Vedio />}
        {selectedTab === 'user' && <Tag />}
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({});
