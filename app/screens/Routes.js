import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../reducers/AllUsers'
import { fetchLikes } from '../reducers/LikeArtist'
import Navigator from './Navigator'
import store from '../store'
import styles from '../stylesheets'
import {View, StyleSheet, Image, Button } from 'react-native'
import {  NavBar} from './index';


let currentUser;
export class Routes extends Component {
  constructor() {
    super()
    this.state = store.getState();

  }

  componentDidMount () {
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
  }

  componentWillUnmount () {
    this.unsubscribe();
  }

  render() {
    return(
      <View style={styles.mainNavigatorFullContainer}>
        <View style={styles.mainNavigatorContainer}>
          <Navigator />
        </View>
      </View>
    )
  }
}


const mapStateToProps = (state) => {
  return { likes: state.Likes }
}

export default connect(null, {fetchUsers, fetchLikes} )(Routes);


// const MainNavigator = TabNavigator(
//   {
//   welcome: { screen: HomePage}, //, navigationOptions: {tabBarVisible: false}},
//   choose: { screen: ChooseUserType}, //, navigationOptions: {tabBarVisible: false} },
//   signup: { screen: Signup}, //, navigationOptions: {tabBarVisible: false} },
//   login: { screen: Login}, //, navigationOptions: {tabBarVisible: false} },
//   main: {
//     screen: TabNavigator(
//     {
//       profile: {
//         screen: StackNavigator({
//           profile: { screen: Profile, path: 'profile/:name',
//           navigationOptions: ({ navigation }) => ({
//             title: 'Profile',
//             headerRight: <Button title='Edit' onPress={() => navigation.navigate('editProfile')} />,
//             headerLeft: <Button title='Share' onPress={() => navigation.navigate('share')} />
//            }),
//           },
//           editProfile: { screen: EditProfile, path: 'profile/:name/edit' },
//           share: { screen: SharePage },
//         })
//       },
//       explore: {
//         screen: StackNavigator({
//           explore: { screen: Discover, navigationOptions: ({ navigation }) => ({
//             title: 'Discover',
//             headerRight: <Button title='Likes' onPress={() => navigation.navigate('likes', {likes: this.props.likes })} />
//            })},
//           likes: { screen: Likes, path: 'discover/:likes' }
//         })
//       },
//       trending: { screen: Trending },

//     },
//     {
//       navigationOptions: ({ navigation }) => ({
//       tabBarIcon: ({ focused, tintColor }) => {
//         const { routeName } = navigation.state;
//         let iconName;
//         if (routeName === 'home') {
//           iconName = require('../../assets/MenuBar/home.png');
//         } else if (routeName === 'explore') {
//           iconName = require('../../assets/MenuBar/discover.png');
//         } else if (routeName === 'trending') {
//           iconName = require('../../assets/MenuBar/trending.png');
//         } else if (routeName === 'profile') {
//           iconName = require('../../assets/MenuBar/profile.png');
//         }

//         // You can return any component that you like here! We usually use an
//         // icon component from react-native-vector-icons
//         return <Image source={iconName} size={25} color={tintColor} />;
//         },
//       }),
//         tabBarOptions: {
//           activeTintColor: 'tomato',
//           inactiveTintColor: 'gray',
//           tabBarVisible: false,
//           height: 30,
//         },
//         tabBarComponent: TabBarBottom,
//         tabBarPosition: 'bottom',
//         tabBarVisible: false,
//         animationEnabled: false,
//         swipeEnabled: false,
//         lazyLoad: true
//     //     labelStyle: { fontSize: 12 }
//       },
//   )},
// },
// {
//   tabBarOptions: {
//     tabBarVisible: false
//   },
//   lazyLoad: true
// });
