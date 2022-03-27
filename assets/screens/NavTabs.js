import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, StatusBar} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

// import Home from './botnav/HomeScreen';
import Home from './TabBar/Home';
import Lainnya from './TabBar/Lainnya';
import Pesanan from './TabBar/Pesanan';
import Pembatalan from './TabBar/Pembatalan';

const Tab = createBottomTabNavigator();

const Tabs = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        // tabBarIconStyle: {display: 'none'},
        tabBarStyle: {
          backgroundColor: '#105263',
          borderRadius: 10,
          height: 80,
          elevation: 3,
          position: 'absolute',
          bottom: -10,
          left: 0,
          right: 0,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon
                name="home"
                size={30}
                color={focused ? '#ffffff' : '#cccccc'}
              />
              <Text
                style={{color: focused ? '#ffffff' : '#cccccc', fontSize: 12}}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Pesanan"
        component={Pesanan}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Icon
                name="book"
                size={30}
                color={focused ? '#ffffff' : '#cccccc'}
              />
              <Text
                style={{color: focused ? '#ffffff' : '#cccccc', fontSize: 12}}>
                Pesanan Saya
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Pembatalan"
        component={Pembatalan}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 12,
              }}>
              <Icon
                name="phonelink-erase"
                size={30}
                color={focused ? '#ffffff' : '#cccccc'}
              />
              <Text style={{color: focused ? '#ffffff' : '#cccccc'}}>
                Pembatalan
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Lainnya"
        component={Lainnya}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Icon
                name="reorder"
                size={30}
                color={focused ? '#ffffff' : '#cccccc'}
              />
              <Text
                style={{color: focused ? '#ffffff' : '#cccccc', fontSize: 12}}>
                Lainnya
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
