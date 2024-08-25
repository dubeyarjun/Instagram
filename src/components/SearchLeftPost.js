import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const imgData = [
  {
    id: '1',
    img: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D',
    ImageInner:
      'https://images.unsplash.com/photo-1660951381925-57ac7e40c40d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGdpcmx8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: '2',
    img: 'https://images.unsplash.com/photo-1631947430066-48c30d57b943?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D',
    ImageInner:
      'https://images.unsplash.com/photo-1599457382197-820d65b8bbdc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGdpcmx8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: '3',
    img: 'https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHxlbnwwfHwwfHx8MA%3D%3D',
    ImageInner:
      'https://images.unsplash.com/photo-1660810710775-dceb42ffaebb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGdpcmx8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: '4',
    img: 'https://plus.unsplash.com/premium_photo-1664442782702-8deb8ebe0dd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGdpcmx8ZW58MHx8MHx8fDA%3D',
    ImageInner:
      'https://images.unsplash.com/photo-1662351997685-57a21379d966?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGdpcmx8ZW58MHx8MHx8fDA%3D',
  },
];

const imgDataTwo = [
  {
    id: '1',
    imgtwo:
      'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D',
    ImageInnertwo:
      'https://images.unsplash.com/photo-1660951381925-57ac7e40c40d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGdpcmx8ZW58MHx8MHx8fDA%3D',
  },
];

const SearchLeftPost = () => {
  const screenWidth = Dimensions.get('window').width;
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView style={{marginTop: 1}} showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: screenWidth,
          }}>
          <FlatList
            data={imgData}
            numColumns={2}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.5}
                  style={{
                    width: 140,
                    height: 150,
                    margin: 1,
                  }}>
                  <Image
                    source={{uri: item.img}}
                    style={{height: 150, width: 140}}
                  />
                </TouchableOpacity>
              );
            }}
          />

          <View>
            <FlatList
              data={imgDataTwo}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.5}
                    style={{
                      width: 140,
                      height: 303,                      
                      margin: 2,
                    }}>
                    <Image
                      source={{uri: item.imgtwo}}
                      style={{height: 303, width: 140}}
                    />
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SearchLeftPost;

const styles = StyleSheet.create({});
