import React, { useState, useRef } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

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
      'https://images.unsplash.com/photo-1586351012965-861624544334?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGdpcmx8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: '16',
    postimg:
      'https://images.unsplash.com/photo-1541580621-47abd5e3da8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGdpcmx8ZW58MHx8MHx8fDA%3D',
  },
];
const Post = ({navigation}) => {
  const screenWidth = Dimensions.get('window').width;
  const [selectedImage, setSelectedImage] = useState(PostData[0].postimg);
  const imageRef = useRef(null);

  const handleImagePress = (image) => {
    setSelectedImage(image);
    imageRef.current.setNativeProps({
      source: [{ uri: image }]
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#fff',
          width: '100%',
          height: 60,
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 50,
          }}
        >
          <TouchableOpacity activeOpacity={0.5} onPress={()=> navigation.goBack()}>
            <AntDesign name="close" size={25} color={'#000'} />
          </TouchableOpacity>
          <Text style={{ color: '#000', fontSize: 20, fontWeight: '900' }}>
            New Post
          </Text>
        </View>

        <TouchableOpacity activeOpacity={0.5}>
          <Text style={{ color: '#15bbed', fontSize: 18, fontWeight: '500' }}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
      <Image
        ref={imageRef}
        resizeMode="cover"
        source={{ uri: selectedImage }}
        style={{ width: screenWidth, height: 400 }}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginVertical: 20,
          paddingHorizontal: 20,
        }}
      >
        <TouchableOpacity
          activeOpacity={0.5}
          style={{ flexDirection: 'row', alignItems: 'center' }}
        >
          <Text style={{ color: '#000', fontSize: 18, fontWeight: '700' }}>
            Recents{' '}
          </Text>
          <AntDesign name="down" size={18} color={'#000'} />
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <TouchableOpacity
            activeOpacity={0.5}
            style={{
              width: 150,
              height: 30,
              backgroundColor: '#444545',
              borderRadius: 10,
              justifyContent: 'center',
              gap: 2,
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <AntDesign name="switcher" size={18} color={'#fff'} />
            <Text style={{ color: '#fff' }}> SELECT MULTIPLE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            style={{
              width: 30,
              height: 30,
              borderRadius: 15,
              backgroundColor: '#444545',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <AntDesign name="camerao" size={18} color={'#fff'} />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={PostData}
        showsVerticalScrollIndicator={false}
        numColumns={4}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View style={{ flex: 1, alignItems: 'center' }}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={{
                  width: 100,
                  height: 100,
                  backgroundColor: 'red',
                  margin: 1,
                }}
                onPress={() => handleImagePress(item.postimg)}
              >
                <Image
                  resizeMode="cover"
                  source={{ uri: item.postimg }}
                  style={{ width: 100, height: 100 }}
                />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({});
