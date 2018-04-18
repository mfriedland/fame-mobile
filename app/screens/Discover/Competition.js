import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import LiveVideo from '../../components/LiveVideo'
class Competition extends Component {

  render() {
    return (
      <View>
        <LiveVideo />
        {/* <Chat> */}
      </View>
    )
  }

}
