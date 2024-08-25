import React, { useRef, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
  Dimensions,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const { height } = Dimensions.get('window');

const ModalScreen = ({ navigation }) => {
  const slideAnim = useRef(new Animated.Value(height)).current; // Initial position off screen

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: height * 0.28, // Slide to 72% of the screen height
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [slideAnim]);

  const closeModal = () => {
    Animated.timing(slideAnim, {
      toValue: height, // Slide back down to bottom
      duration: 500,
      useNativeDriver: true,
    }).start(() => navigation.goBack());
  };

  return (
    <View style={styles.modalBackground}>
      <TouchableOpacity style={styles.touchableBackground} onPress={closeModal} activeOpacity={1} />
      <Animated.View
        style={[styles.modalContent, { transform: [{ translateY: slideAnim }] }]}
      >
        <TouchableOpacity activeOpacity={0.5} onPress={closeModal} style={styles.closeButton}>
          <Feather name="x" size={20} color={'#fff'} />
        </TouchableOpacity>
        <Text style={styles.modalText}>Create</Text>
        <View style={styles.divider}></View>
        <TouchableOpacity
          style={styles.option}
          activeOpacity={0.5}
        >
          <Feather name="video" size={20} color={'#000'} />
          <Text style={styles.optionText}>Reel</Text>
        </TouchableOpacity>
        <View style={styles.divider}></View>
        <TouchableOpacity
          style={styles.option}
          activeOpacity={0.5}
        >
          <MaterialIcons name="grid-on" size={20} color={'#000'} />
          <Text style={styles.optionText}>Post</Text>
        </TouchableOpacity>
        <View style={styles.divider}></View>
        <TouchableOpacity
          style={styles.option}
          activeOpacity={0.5}
        >
          <Feather name="plus-circle" size={20} color={'#000'} />
          <Text style={styles.optionText}>Story</Text>
        </TouchableOpacity>
        <View style={styles.divider}></View>
        <TouchableOpacity
          style={styles.option}
          activeOpacity={0.5}
        >
          <FontAwesome name="heart-o" size={18} color={'#000'} />
          <Text style={styles.optionText}>Story Highlight</Text>
        </TouchableOpacity>
        <View style={styles.divider}></View>
        <TouchableOpacity
          style={styles.option}
          activeOpacity={0.5}
        >
          <MaterialIcons name="wifi-tethering" size={18} color={'#000'} />
          <Text style={styles.optionText}>Live</Text>
        </TouchableOpacity>
        <View style={styles.divider}></View>
        <TouchableOpacity
          style={styles.option}
          activeOpacity={0.5}
        >
          <FontAwesome name="magic" size={18} color={'#000'} />
          <Text style={styles.optionText}>Made for you</Text>
        </TouchableOpacity>
        <View style={styles.divider}></View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    // justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Semi-transparent background
  },
  touchableBackground: {
    flex: 1,
    width: '100%',
  },
  modalContent: {
    height: '80%',
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  modalText: {
    alignSelf: 'center',
    fontSize: 18,
    marginBottom: 20,
    color: '#000',
    fontWeight: 'bold',
  },
  closeButton: {
    alignSelf: 'center',
    position: 'absolute',
    top: -20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 20,
  },
  divider: {
    width: '100%',
    borderWidth: 0.3,
    borderColor: '#dadada',
    marginVertical: 10,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  optionText: {
    color: '#000',
    fontSize: 18,
  },
});

export default ModalScreen;
