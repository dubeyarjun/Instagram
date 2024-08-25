import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  Dimensions,
} from 'react-native';
import {useRoute} from '@react-navigation/native';

const FullScreenImage = ({navigation}) => {
  const ScreenWidth = Dimensions.get('window').width;
  const ScreenHeight = Dimensions.get('window').height;
  const route = useRoute();

  const {fullSizeImage} = route.params;
  // console.log(fullSizeImage);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        width: ScreenWidth,
        height: ScreenHeight,
      }}>
      <TouchableOpacity
        style={{
          flex: 1,
          backgroundColor: 'black',
          justifyContent: 'center',
          alignItems: 'center',
          width: ScreenWidth,
          height: ScreenHeight,
        }}
        onPress={() => navigation.goBack()}>
        <Image
          source={{uri: fullSizeImage}}
          style={{width: ScreenWidth, height: ScreenHeight}}
          resizeMode="cover"
          onError={() => console.log('Error loading image')}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default FullScreenImage;
