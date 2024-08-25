import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Video from 'react-native-video';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

const Reel = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={[
          require('../pic/vedio1.mp4'),
          require('../pic/vedio2.mp4'),
          require('../pic/vedio3.mp4'),
          require('../pic/vedio4.mp4'),
        ]}
        onScroll={e => {
          setSelectedIndex(
            e.nativeEvent.contentOffset.y.toFixed(0) / ScreenHeight,
          );
        }}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <View style={{width: ScreenWidth, height: ScreenHeight}}>
              <Video
                paused={selectedIndex == index ? false : true}
                style={{width: ScreenWidth, height: ScreenHeight}}
                resizeMode={'cover'}
                source={item}
              />
              <TouchableOpacity
                activeOpacity={0.5}
                style={{
                  width: ScreenWidth,
                  height: ScreenHeight,
                  position: 'absolute',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'rgba(0,0,0,.1)',
                  top: 0,
                }}
                onPress={() => {
                  if (selectedIndex == -1) {
                    setSelectedIndex(index);
                  } else {
                    setSelectedIndex(-1);
                  }
                }}>
                {selectedIndex == -1 ? (
                  <MaterialIcons
                    name={'pause-circle'}
                    size={40}
                    color={'#000'}
                  />
                ) : null}
                <View
                  style={{width: '100%', position: 'absolute', bottom: '10%'}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 10,

                      marginLeft: 10,
                    }}>
                    <TouchableOpacity
                      activeOpacity={0.5}
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: 15,
                        borderWidth: 2,
                        borderColor: 'green',
                      }}>
                      <Image
                        source={require('../pic/blackheart.png')}
                        style={{width: 30, height: 30, alignSelf: 'center'}}
                      />
                    </TouchableOpacity>
                    <Text
                      style={{
                        color: '#fff',
                        fontSize: 16,
                        fontWeight: '600',
                        marginLeft: 10,
                      }}>
                      demo_funny_01
                    </Text>
                    <TouchableOpacity
                      activeOpacity={0.5}
                      style={{
                        display:'flex',
                        width: 80,
                        height: 30,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 8,
                        borderWidth: 1,
                        marginLeft: 10,
                        borderColor: '#fff',
                      }}>
                      <Text
                        style={{
                          color: '#fff',
                          fontSize: 16,
                          fontWeight: '600',
                         
                         
                        }}>
                        Follow
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 16,
                      fontWeight: '600',
                      marginLeft: 10,
                    }}>
                    like kro 😍....
                  </Text>
                </View>
                <View style={{position: 'absolute', right: 10, bottom: '10%'}}>
                  <TouchableOpacity activeOpacity={0.5}>
                    <AntDesign
                      name={'hearto'}
                      size={30}
                      color={'#fff'}
                      style={{marginTop: 10}}
                    />
                  </TouchableOpacity>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 16,
                      fontWeight: '600',
                    }}>
                    25k
                  </Text>

                  <TouchableOpacity activeOpacity={0.5}>
                    <FontAwesome
                      name={'comment-o'}
                      size={30}
                      color={'#fff'}
                      style={{marginTop: 20}}
                    />
                  </TouchableOpacity>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 16,
                      fontWeight: '600',
                    }}>
                    2.5k
                  </Text>
                  <TouchableOpacity activeOpacity={0.5}>
                    <Ionicons
                      name={'paper-plane-outline'}
                      size={30}
                      color={'#fff'}
                      style={{marginTop: 20}}
                    />
                  </TouchableOpacity>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 16,
                      fontWeight: '600',
                    }}>
                    2.5k
                  </Text>
                  <TouchableOpacity activeOpacity={0.5}>
                    <Entypo
                      name={'dots-three-vertical'}
                      size={30}
                      color={'#fff'}
                      style={{marginTop: 20}}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={0.5}
                    style={{
                      width: 40,
                      height: 40,
                      marginTop: 20,
                      borderWidth: 2,
                      borderColor: '#fff',
                      borderRadius: 10,
                    }}>
                    <Image
                      source={require('../pic/blackheart.png')}
                      style={{width: 40, height: 40, alignSelf: 'center'}}
                    />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Reel;

const styles = StyleSheet.create({});
