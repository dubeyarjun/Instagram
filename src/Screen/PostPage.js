import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Animated,

} from 'react-native';
import React, { useState, useRef } from 'react';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const userData = [
  {
    id: '1',
    name: 'Tanisha',
    likes: 20,
    caption: 'hi Everyone, I am here',
    comments: 'View all 25 comments ',
    thumbnail:
      'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D',
    fullSizeImage:
      'https://images.unsplash.com/photo-1660951381925-57ac7e40c40d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGdpcmx8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: '2',
    name: 'Manisha',
    likes: 55,
    caption: 'hi Everyone, I am here',
    comments: 'View all 20 comments ',
    thumbnail:
      'https://images.unsplash.com/photo-1631947430066-48c30d57b943?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D',
    fullSizeImage:
      'https://images.unsplash.com/photo-1599457382197-820d65b8bbdc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGdpcmx8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: '3',
    name: 'Shimpi',
    likes: 25,
    caption: 'hi Everyone, I am here',
    comments: 'View all 10 comments ',
    thumbnail:
      'https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHxlbnwwfHwwfHx8MA%3D%3D',
    fullSizeImage:
      'https://images.unsplash.com/photo-1660810710775-dceb42ffaebb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGdpcmx8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: '4',
    name: 'Shalu',
    likes: 40,
    caption: 'hi Everyone, I am here',
    comments: 'View all 30 comments ',
    thumbnail:
      'https://plus.unsplash.com/premium_photo-1664442782702-8deb8ebe0dd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGdpcmx8ZW58MHx8MHx8fDA%3D',
    fullSizeImage:
      'https://images.unsplash.com/photo-1662351997685-57a21379d966?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGdpcmx8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: '5',
    name: 'Teena',
    likes: 56,
    caption: 'hi Everyone, I am here',
    comments: 'View all 25 comments ',
    thumbnail:
      'https://images.unsplash.com/photo-1592188657297-c6473609e988?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdpcmx8ZW58MHx8MHx8fDA%3D',
    fullSizeImage:
      'https://images.unsplash.com/photo-1541580621-47abd5e3da8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGdpcmx8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: '6',
    name: 'Arti',
    likes: 27,
    caption: 'hi Everyone, I am here',
    comments: 'View all 31 comments ',
    thumbnail:
      'https://images.unsplash.com/photo-1467307983825-619715426c70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdpcmx8ZW58MHx8MHx8fDA%3D',
    fullSizeImage:
      'https://images.unsplash.com/photo-1586351012965-861624544334?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGdpcmx8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: '7',
    name: 'Vaishali',
    likes: 30,
    caption: 'hi Everyone, I am here',
    comments: 'View all 25 comments ',
    thumbnail:
      'https://images.unsplash.com/photo-1635488640163-e5f6782cda6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdpcmx8ZW58MHx8MHx8fDA%3D',
    fullSizeImage:
      'https://images.unsplash.com/photo-1607062294260-e5b054f2c96b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGdpcmx8ZW58MHx8MHx8fDA%3D',
  },
];

const PostPage = () => {
  const [showHeart, setShowHeart] = useState(false);
  const [focusedImageId, setFocusedImageId] = useState(null);
  const lastTap = useRef(null);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.5)).current;

  const [data, setData] = useState(userData);
  const ScreenWidth = Dimensions.get('window').width;

  const handleLikePress = id => {
    const updatedData = data.map(item => {
      if (item.id === id) {
        const isLiked = item.isLiked || false;
        const updatedLikes = isLiked ? item.likes - 1 : item.likes + 1;
        return {...item, likes: updatedLikes, isLiked: !isLiked};
      }
      return item;
    });
    setData(updatedData);
  };

  const handleDoubleTap = (id) => {
    const now = Date.now();
    const DOUBLE_PRESS_DELAY = 300; // Adjust the double tap delay as needed
    if (lastTap.current && (now - lastTap.current) < DOUBLE_PRESS_DELAY) {
      // Double tap detected
      setShowHeart(true);
      setFocusedImageId(id);
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 175,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1.5,
          duration: 175,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setTimeout(() => {
          setShowHeart(false);
          setFocusedImageId(null);
          fadeAnim.setValue(0);
          scaleAnim.setValue(0.5);
        }, 500);
      });

      handleLikePress(id);
    } else {
      lastTap.current = now;
    }
  };

  return (
    <View style={{marginTop: 12}}>
     
      {data.map(item => {
        return (
          <View key={item.id} style={{marginTop: 10}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
                marginBottom: 8,
              }}>
              <Image
                style={{height: 30, width: 30, borderRadius: 15}}
                source={{uri: item.thumbnail}}
              />
              <Text
                style={{
                  paddingLeft: 10,
                  fontSize: 16,
                  fontWeight: '600',
                  color: '#000',
                }}>
                {item.name}
              </Text>
            </View>
            <View>
              <TouchableWithoutFeedback onPress={() => handleDoubleTap(item.id)}>
                <Image
                  style={[styles.image, { width: ScreenWidth }]}
                  source={{ uri: item.fullSizeImage }}
                />
              </TouchableWithoutFeedback>
              {showHeart && focusedImageId === item.id && (
                <Animated.View  style={[
                  styles.heartContainer,
                  {
                    opacity: fadeAnim,
                    transform: [{ scale: scaleAnim }],
                  },
                ]}>
                  <AntDesign name="heart" size={100} color={'#fff'}/>
                </Animated.View>
              )}
            </View>
            <View
              style={{
                paddingHorizontal: 12,
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
                gap: 15,
              }}>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => handleLikePress(item.id)}>
                <FontAwesome
                  name={item.isLiked ? 'heart' : 'heart-o'}
                  size={25}
                  color={item.isLiked ? 'red' : '#000'}
                />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5}>
                <FontAwesome name="comment-o" size={25} color={'#000'} />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5}>
                <Ionicons name="paper-plane-outline" size={25} color={'#000'} />
              </TouchableOpacity>
            </View>
            <Text style={styles.likeCount}>{item.likes} likes</Text>
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: 13,
                alignItems: 'center',
              }}>
              <Text style={{color: '#000', fontSize: 16, fontWeight: '500'}}>
                {item.name}{' '}
              </Text>
              <Text style={{color: '#000'}}>{item.caption}</Text>
            </View>
            <Text style={{paddingHorizontal: 13}}>{item.comments}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default PostPage;

const styles = StyleSheet.create({
  image: {
    height: 400,
  },
  heartContainer: {
    position: 'absolute',
    top: '35%',
    left: '40%',
    alignItems:'center',
    transform: [{ translateX: -25 }, { translateY: -25 }],
  },
  likeCount: {
    marginLeft: 15,
    marginTop: 5,
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
});
