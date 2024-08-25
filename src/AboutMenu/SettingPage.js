import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import Searchbar from '../components/Searchbar';
import logoMeta from '../pic/logoMeta1.png';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';




import AllSameBtn from '../components/AllSameBtn';

const SettingPage = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Header
        title={'Setting and activity'}
        onPress={() => navigation.goBack()}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        // style={{backgroundColor: '#fff'}}
      >
        <View style={{backgroundColor: '#fff'}}>
          <Searchbar />
          <View
            style={{
              display: 'flex',
              marginTop: 25,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
            }}>
            <Text style={{fontSize: 14, fontWeight: '500'}}>Your account</Text>

            <Image source={logoMeta} style={{width: 80, height: 30}} />
          </View>
          <TouchableOpacity
            activeOpacity={0.5}
            style={{
              marginTop: 20,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 15,
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
              }}>
              <FontAwesome name="user-circle" size={25} color={'#000'} />
              <View>
                <Text style={{color: '#000', fontSize: 18}}>
                  Account Center
                </Text>
                <Text style={{fontSize: 14}}>
                  Password, security, personal details, ad preferences
                </Text>
              </View>
            </View>
            <AntDesign name="right" size={20} color={'#000'} />
          </TouchableOpacity>
          <View style={{paddingHorizontal: 15, marginVertical: 20}}>
            <Text style={{fontSize: 12, fontWeight: '500'}}>
              Mange your connected experiences and account setting across Meta
              technologies.
              <TouchableOpacity activeOpacity={0.5}>
                <Text
                  style={{color: '#1b4066', fontSize: 12, fontWeight: '500'}}>
                  Learn more
                </Text>
              </TouchableOpacity>
            </Text>
          </View>
        </View>
        {/*========================================= how to use Instagram===================================== */}
        <View
          style={{
            backgroundColor: '#fff',
            marginTop: 5,
            paddingHorizontal: 10,
            paddingVertical: 20,
          }}>
          <Text style={{fontSize: 14, fontWeight: '500', marginBottom: 5}}>
            How you use Instagram
          </Text>
          <AllSameBtn
            iconbtn={<MaterialIcons name="bookmark-border" size={24} color={'#000'} />}
            namebtn={'Saved'}
          />
          <AllSameBtn
            iconbtn={<Entypo name="back-in-time" size={24} color={'#000'} />}
            namebtn={'Archive'}
          />
          <AllSameBtn
            iconbtn={<Feather name="activity" size={24} color={'#000'} />}
            namebtn={'Your activity'}
          />
          <AllSameBtn
            iconbtn={
              <MaterialIcons
                name="notifications-none"
                size={24}
                color={'#000'}
              />
            }
            namebtn={'notification'}
          />
          <AllSameBtn
            iconbtn={
              <MaterialIcons name="access-time" size={24} color={'#000'} />
            }
            namebtn={'Time spent'}
          />
        </View>
        {/*==================================== who can see your content============================= */}
        <View
          style={{
            backgroundColor: '#fff',
            marginTop: 5,
            paddingHorizontal: 10,
            paddingVertical: 20,
          }}>
          <Text style={{fontSize: 14, fontWeight: '500', marginBottom: 5}}>
          Who can see your content
          </Text>
          <AllSameBtn
            iconbtn={<Ionicons name="lock-closed-outline" size={24} color={'#000'} />}
            namebtn={'Account privacy'}
            namesidebtn={'Public'}
          />
          <AllSameBtn
            iconbtn={<MaterialCommunityIcons name="star-circle-outline" size={24} color={'#000'} />}
            namebtn={'Close Friends'}
            namesidebtn={'0'}
          />
          <AllSameBtn
            iconbtn={<MaterialIcons name="block-flipped" size={24} color={'#000'} />}
            namebtn={'Blocked'}
            namesidebtn={'0'}
          />
          <AllSameBtn
            iconbtn={
              <MaterialIcons
                name="hide-source"
                size={24}
                color={'#000'}
              />
            }
            namebtn={'Hide story and live'}
          />
          
        </View>
        {/*==================================== How others can interact with you============================= */}
        <View
          style={{
            backgroundColor: '#fff',
            marginTop: 5,
            paddingHorizontal: 10,
            paddingVertical: 20,
          }}>
          <Text style={{fontSize: 14, fontWeight: '500', marginBottom: 5}}>
          How others can interact with you
          </Text>
          <AllSameBtn
            iconbtn={<MaterialCommunityIcons name="android-messages" size={24} color={'#000'} />}
            namebtn={'Messages and story replies'}
          />
          <AllSameBtn
            iconbtn={<Ionicons name="pricetag-outline" size={24} color={'#000'} />}
            namebtn={'Tags and mentions'}
          />
          <AllSameBtn
            iconbtn={<Feather name="message-circle" size={24} color={'#000'} />}
            namebtn={'Comments'}
          />
          <AllSameBtn
            iconbtn={
              <Ionicons
                name="shuffle-sharp"
                size={24}
                color={'#000'}
              />
            }
            namebtn={'Sharing and remixes'}
          />
          <AllSameBtn
            iconbtn={
              <FontAwesome5 name="user-slash" size={24} color={'#000'} />
            }
            namebtn={'Restricted'}
            namesidebtn={'0'}
          />
            <AllSameBtn
            iconbtn={
              <MaterialCommunityIcons
                name="axis-arrow-info"
                size={24}
                color={'#000'}
              />
            }
            namebtn={'Limited interactions'}
          />
          <AllSameBtn
            iconbtn={
              <MaterialCommunityIcons
                name="alphabet-latin"
                size={24}
                color={'#000'}
              />
            }
            namebtn={'Hidden Words'}
          />
           <AllSameBtn
            iconbtn={
              <Feather
                name="user-plus"
                size={24}
                color={'#000'}
              />
            }
            namebtn={'Follow and Invite friends'}
          />
        </View>
        {/*==================================== What you see============================= */}
        <View
          style={{
            backgroundColor: '#fff',
            marginTop: 5,
            paddingHorizontal: 10,
            paddingVertical: 20,
          }}>
          <Text style={{fontSize: 14, fontWeight: '500', marginBottom: 5}}>
          What you see
          </Text>
          <AllSameBtn
            iconbtn={<Feather name="star" size={24} color={'#000'} />}
            namebtn={'Favorites'}
            namesidebtn={'0'}
          />
          <AllSameBtn
            iconbtn={<Ionicons name="notifications-off-outline" size={24} color={'#000'} />}
            namebtn={'Mutes accounts'}
            namesidebtn={'0'}
          />
          <AllSameBtn
            iconbtn={<Entypo name="images" size={24} color={'#000'} />}
            namebtn={'Suggested content'}
            
          />
          <AllSameBtn
            iconbtn={
              <MaterialCommunityIcons
                name="heart-off-outline"
                size={24}
                color={'#000'}
              />
            }
            namebtn={'Like and share counts'}
          />
          
        </View>
        {/*==================================== Your app and media============================= */}
        <View
          style={{
            backgroundColor: '#fff',
            marginTop: 5,
            paddingHorizontal: 10,
            paddingVertical: 20,
          }}>
          <Text style={{fontSize: 14, fontWeight: '500', marginBottom: 5}}>
          Your app and media
          </Text>
          <AllSameBtn
            iconbtn={<Ionicons name="phone-portrait-outline" size={24} color={'#000'} />}
            namebtn={'Device permissions'}
           
          />
          <AllSameBtn
            iconbtn={<MaterialIcons name="save-alt" size={24} color={'#000'} />}
            namebtn={'Archiving and downloading'}
            
          />
          <AllSameBtn
            iconbtn={<Ionicons name="accessibility" size={24} color={'#000'} />}
            namebtn={'Accessibilitiy'}
            
          />
          <AllSameBtn
            iconbtn={
              <FontAwesome
                name="language"
                size={24}
                color={'#000'}
              />
            }
            namebtn={'Language'}
          />
            <AllSameBtn
            iconbtn={
              <Feather
                name="bar-chart"
                size={24}
                color={'#000'}
              />
            }
            namebtn={'Data usage and media quality'}
          />
            <AllSameBtn
            iconbtn={
              <FontAwesome
                name="laptop"
                size={24}
                color={'#000'}
              />
            }
            namebtn={'Website permissions'}
          />
          
        </View>
         {/*==================================== For families============================= */}
         <View
          style={{
            backgroundColor: '#fff',
            marginTop: 5,
            paddingHorizontal: 10,
            paddingVertical: 20,
          }}>
          <Text style={{fontSize: 14, fontWeight: '500', marginBottom: 5}}>
          For families
          </Text>
          <AllSameBtn
            iconbtn={<Feather name="users" size={24} color={'#000'} />}
            namebtn={'Supervision'}
            
          />          
          
        </View>
          {/*====================================For professionals============================= */}
          <View
          style={{
            backgroundColor: '#fff',
            marginTop: 5,
            paddingHorizontal: 10,
            paddingVertical: 20,
          }}>
          <Text style={{fontSize: 14, fontWeight: '500', marginBottom: 5}}>
          For professionals
          </Text>
          <AllSameBtn
            iconbtn={<FontAwesome5 name="user-cog" size={24} color={'#000'} />}
            namebtn={'Creator tools and insights'}            
          />   
            <AllSameBtn
            iconbtn={<AntDesign name="barschart" size={24} color={'#000'} />}
            namebtn={'Account type and tools'}            
          />        
          
        </View>
           {/*==================================== Your order and fundraisers============================= */}
           <View
          style={{
            backgroundColor: '#fff',
            marginTop: 5,
            paddingHorizontal: 10,
            paddingVertical: 20,
          }}>
          <Text style={{fontSize: 14, fontWeight: '500', marginBottom: 5}}>
          Your order and fundraisers
          </Text>
          <AllSameBtn
            iconbtn={<Feather name="shopping-bag" size={24} color={'#000'} />}
            namebtn={'Order and payments'}
            
          />          
          
        </View>
          {/*====================================More info and support============================= */}
          <View
          style={{
            backgroundColor: '#fff',
            marginTop: 5,
            paddingHorizontal: 10,
            paddingVertical: 20,
          }}>
          <Text style={{fontSize: 14, fontWeight: '500', marginBottom: 5}}>
          More info and support
          </Text>
          <AllSameBtn
            iconbtn={<Ionicons name="help-buoy" size={24} color={'#000'} />}
            namebtn={'Help'}            
          />   
            <AllSameBtn
            iconbtn={<AntDesign name="user" size={24} color={'#000'} />}
            namebtn={'Account Status'}        
          />  
           <AllSameBtn
            iconbtn={<AntDesign name="infocirlceo" size={24} color={'#000'} />}
            namebtn={'About'}            
          />         
          
        </View>
          {/*====================================Login============================= */}
          <View
          style={{
            backgroundColor: '#fff',
            marginTop: 5,
            paddingHorizontal: 10,
            paddingVertical: 20,
          }}>
          <Text style={{fontSize: 14, fontWeight: '500', marginBottom: 5}}>
        Login
          </Text>
         <TouchableOpacity activeOpacity={.5} style={{ marginTop: 20}}>
            <Text style={{color: '#4987eb', fontSize: 18}}>Add acoount</Text>
            </TouchableOpacity>   
            <TouchableOpacity activeOpacity={.5} style={{ marginTop: 20}}>
            <Text style={{color: 'red', fontSize: 18}}>Log out</Text>
            </TouchableOpacity>    
            <TouchableOpacity activeOpacity={.5} style={{ marginTop: 20}}>
            <Text style={{color: 'red', fontSize: 18}}>Log out all account</Text>
            </TouchableOpacity>     
          
        </View>

      </ScrollView>
    </View>
  );
};

export default SettingPage;

const styles = StyleSheet.create({});
