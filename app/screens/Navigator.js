import React, {Component} from 'react';
import { HomePage, ChooseUserType, Login, Signup, Trending, SharePage, Profile, EditProfile, Discover, Likes, NavBar, MenuBar} from './index';
import {View, StyleSheet, Image, Button } from 'react-native'
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';



const deleteLikes = () =>  store.dispatch(clearLikes());

const Navigator =
// StackNavigator({
  // HOME: { screen: HomePage,
  //         navigationOptions: ({ navigation }) => ({
  //           title: 'fame',
  //           headerStyle: {
  //             backgroundColor: 'white',
  //             tintColor:'rgb(252,197,76)',
  //           },
  //           headerLeft: <Button title='Share' color='white' onPress={() => navigation.navigate('share')} />,
  //           headerTintColor: 'rgb(252,197,76)',
  //          }),
  //         },
    // main: {
      // screen: TabNavigator(
      TabNavigator({
      welcome: { screen: HomePage},
      choose: { screen: ChooseUserType},
      signup: { screen: Signup},
      login: { screen: Login},
      main: {
        screen: TabNavigator(
        {
          profile: {
            screen: StackNavigator({
              profile: { screen: Profile, path: 'profile/:name',
              navigationOptions: ({ navigation }) => ({
                title: 'Profile',
                headerStyle: {
                  backgroundColor: '#12092f',
                  tintColor:'rgb(252,197,76)',
                },
                headerRight: <Button title='Edit' color='white' onPress={() => navigation.navigate('editProfile')} />,
                headerLeft: <Button title='Share' color='white' onPress={() => navigation.navigate('share')} />,
                headerTintColor: 'rgb(252,197,76)',
              }),
              },
              editProfile: { screen: EditProfile, path: 'profile/:name/edit', navigationOptions: ({ navigation }) => ({
                headerStyle: {
                  backgroundColor: '#12092f',
                  tintColor:'white',
                }
              }),
            },
              share: { screen: SharePage, navigationOptions: ({ navigation }) => ({
                headerStyle: {
                  backgroundColor: '#12092f',
                  tintColor:'rgb(252,197,76)',
                }
              }),
            },
            })
          },
          explore: {
            screen: StackNavigator({
              explore: { screen: Discover, navigationOptions: ({ navigation }) => ({
                title: 'Discover',
                  headerStyle: {
                    backgroundColor: '#12092f',
                    tintColor:'rgb(252,197,76)',
                  },
                  headerRight: <Button title='Likes' color='white' onPress={() => navigation.navigate('likes')} />,
                  headerTintColor: 'rgb(252,197,76)',
              })},
                likes: { screen: Likes, path: 'discover/:likes', navigationOptions: ({ navigation }) => ({
                  title: 'likes',
                  headerStyle: {
                    backgroundColor: '#12092f',
                    tintColor:'rgb(252,197,76)',
                  },
              }),
            },
            })
          },
          trending: { screen: Trending },

        },
        {
          navigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'home') {
              iconName = require('../../assets/MenuBar/home.png');
            } else if (routeName === 'explore') {
              iconName = require('../../assets/MenuBar/discover.png');
            } else if (routeName === 'trending') {
              iconName = require('../../assets/MenuBar/trending.png');
            } else if (routeName === 'profile') {
              iconName = require('../../assets/MenuBar/profile.png');
            }
            return <Image source={iconName} style={{height:17, width:17}} color={tintColor} />;
            },
          }),
            tabBarOptions: {
              activeTintColor: 'tomato',
              inactiveTintColor: 'gray',
              style: {
                backgroundColor: 'black',
                height: 40,
                borderTopColor: 'lightgrey',
                borderTopWidth: .5,
                  },
            },
            tabBarComponent: TabBarBottom,
            tabBarPosition: 'bottom',
            animationEnabled: false,
            swipeEnabled: false,
            lazyLoad: true
        //     labelStyle: { fontSize: 12 }
          },
    )}
  },  {
    navigationOptions: {tabBarVisible: false},
      lazyLoad: true
   })


// });

export default Navigator;
