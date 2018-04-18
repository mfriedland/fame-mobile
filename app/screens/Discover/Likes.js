import React, { Component } from "react";
import { FlatList, ScrollView, Text, View, Image, Platform, TouchableOpacity } from "react-native";
import { List, ListItem, Avatar, Button } from "react-native-elements";
import { connect } from 'react-redux';
import Swipeout from 'react-native-swipeout';
import { Ionicons } from '@expo/vector-icons'

import styles from '../../stylesheets'
import { musicians } from '../../../assets/SeedImages'
import { fetchLikes, clearLikes, removeLike } from '../../reducers/LikeArtist'
import store from '../../store'

let likes;
class Likes extends Component {
  constructor() {
    super()
    this.state = store.getState();
  }
  static navigationOptions = {
    title: 'likes',
    headerStyle: {
      backgroundColor: 'white',
      tintColor:'rgb(252,197,76)',
    },
    headerRight: <Button title='delete' color='white' onPress={() => store.dispatch(clearLikes())} />, //this.deleteLikes} />,
    headerTintColor: 'rgb(252,197,76)',
   }

  componentDidMount () {
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
  }

  componentWillUnmount () {
    this.unsubscribe();
  }

  deleteLikes() {
    () => store.dispatch(clearLikes);
   }

  renderLikes() {
    let swipeBtns = [{
      backgroundColor: 'rgb(252,197,76)',
      underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
      onPress: (artist) => store.dispatch(removeLike(artist))
    }];

    return likes.map(like => {
      return (
        <Swipeout
              right={[{
                text: 'Delete',
                backgroundColor: 'rgb(252,197,76)',
                underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
                onPress: () => store.dispatch(removeLike(like))
              }]}
              autoClose='true'
              backgroundColor= 'transparent'>
          <View>
            <Image style={{height: 150}} id={like.id} key={like.id} source={{uri: like.image }} />
          </View>
        </Swipeout>
      )
    })
  }

  render() {
    likes = this.state.Likes
    return (
      <View style={{flex:1}}>
        <ScrollView
          bounce="false"
          alwaysBounceVertical="false">
          {this.renderLikes()}
        </ScrollView>
      </View>
    );
  }
}


{/* <View style={{height:24}}> */}
{/* <TouchableOpacity> */}
    {/* <Ionicons
      name="ios-trash-outline"
      size={22}
      color="#555" /> */}
  {/* </TouchableOpacity> */}
{/* </View> */}
{/* <View>
  <Button title="Clear Likes" large icon={{ name: 'delete=forever'}} backgroundColor='rgb(252,197,76)'
  onPress={this.props.clearLikes  }
  />
</View> */}
// mapStateToProps = (state, props) => ({
//   Likes: navigation.state.params.Likes

// })
// const mapDispatch = dispatch => ({
//   findLikes: () => dispatch(fetchLikes()),
// })

// export default connect(mapStateToProps)(Likes)

export { Likes }
