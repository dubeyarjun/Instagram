import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import PostPage from './PostPage';

const WIDTH = Dimensions.get('window').width;

const dummyData = [
  {
    id: '1',
    name: 'Your story',
    thumbnail:
      'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D',
    fullSizeImage: 'https://images.unsplash.com/photo-1660951381925-57ac7e40c40d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGdpcmx8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: '2',
    name: 'Manisha',
    thumbnail:
      'https://images.unsplash.com/photo-1631947430066-48c30d57b943?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D',
    fullSizeImage: 'https://images.unsplash.com/photo-1599457382197-820d65b8bbdc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGdpcmx8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: '3',
    name: 'Shimpi',
    thumbnail:
      'https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHxlbnwwfHwwfHx8MA%3D%3D',
    fullSizeImage: 'https://images.unsplash.com/photo-1660810710775-dceb42ffaebb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGdpcmx8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: '4',
    name: 'Shalu',
    thumbnail:
      'https://plus.unsplash.com/premium_photo-1664442782702-8deb8ebe0dd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGdpcmx8ZW58MHx8MHx8fDA%3D',
    fullSizeImage: 'https://images.unsplash.com/photo-1662351997685-57a21379d966?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGdpcmx8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: '5',
    name: 'Teena',
    thumbnail:
      'https://images.unsplash.com/photo-1592188657297-c6473609e988?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdpcmx8ZW58MHx8MHx8fDA%3D',
    fullSizeImage: 'https://images.unsplash.com/photo-1541580621-47abd5e3da8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGdpcmx8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: '6',
    name: 'Arti',
    thumbnail:
      'https://images.unsplash.com/photo-1467307983825-619715426c70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdpcmx8ZW58MHx8MHx8fDA%3D',
    fullSizeImage: 'https://images.unsplash.com/photo-1586351012965-861624544334?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGdpcmx8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: '7',
    name: 'Vaishali',
    thumbnail:
      'https://images.unsplash.com/photo-1635488640163-e5f6782cda6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdpcmx8ZW58MHx8MHx8fDA%3D',
    fullSizeImage: 'https://images.unsplash.com/photo-1607062294260-e5b054f2c96b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGdpcmx8ZW58MHx8MHx8fDA%3D',
  },
];

const Home = ({navigation}) => {
  const handleImagePress = fullSizeImage => {
    navigation.navigate('FullScreenImage', {fullSizeImage});
  };
  return (
    <View style={{flex: 1}}>
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
        <View style={{flexDirection: 'row', alignItems: 'flex-end', gap: 5}}>
          <Text style={{color: '#000', fontSize: 20, fontWeight: 'bold'}}>
            Instagram
          </Text>
          <TouchableOpacity activeOpacity={0.5}>
            <AntDesign name="down" size={18} color={'#000'} />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 15}}>
          <TouchableOpacity activeOpacity={0.5}>
            <AntDesign name="hearto" size={20} color={'#000'} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5} onPress={()=> navigation.navigate('Message')} >
            <AntDesign name="message1" size={20} color={'#000'} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{backgroundColor:'#fff', flex:1}}>
      <ScrollView style={{marginTop: 10}}>
        <FlatList
          data={dummyData}
          horizontal
          renderItem={({item, index}) => {
            const borderColor = item.id === '1' ? 'transparent' : 'green';
            return (
              <TouchableOpacity
                onPress={() => handleImagePress(item.fullSizeImage)}>
                <View style={[styles.profileContainer, { borderColor }]}>
                  <Image
                    source={{uri: item.thumbnail}}
                    style={styles.profileImage}
                  />
                            
                  {index === 0 && (
                    <View style={styles.statusIndicator}>
                      <Text style={styles.plusSign}>+</Text>
                    </View>
                  )}
                  
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
        <PostPage/>
      </ScrollView>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  profileContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,  
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4, 
    
  },
  nameBox:{marginHorizontal: 15,
    alignSelf:'center',
  },
  userName: {
    fontSize: 12, // Adjust the font size as needed
    marginTop: 5, // Adjust the margin as needed
    color:'#000',
  },
  profileImage: {
    width: 64, // Adjusted width to accommodate the border width
    height: 64, // Adjusted height to accommodate the border width
    borderRadius: 32, // Adjusted border radius to match the smaller image size
  },
  statusIndicator: {
    position: 'absolute',
    bottom: 0,
    right: -3,
    height: 25,
    width: 25,
    borderRadius: 12.5,
    borderWidth: 3,
    borderColor: '#fff',
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusSign: {
    fontSize: 20,
    color: '#fff',
    lineHeight: 20,
  },
});
