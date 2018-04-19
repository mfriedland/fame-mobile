import React, { Component } from "react";
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from "react-redux";
// import VideoPlayer from './VideoPlayer'
import { Video, ScreenOrientation } from 'expo';
import VideoPlayer from '@expo/videoplayer';
import Chat from '../../components/Chat'
// import socket from "../socket";
// import { OTSession, OTPublisher, OTStreams, OTSubscriber } from "opentok-react";
import { FontAwesome } from '@expo/vector-icons';

class Competition extends Component {

  render() {
    return (
      <View style={styles.container}>

          <View style={styles.top}>
          <View style={{marginBottom: 40}}>
          <VideoPlayer
            videoProps={{  shouldPlay: true,
              resizeMode: Video.RESIZE_MODE_CONTAIN,
              source: { uri: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8' },
              isMuted: false}}
            isPortrait={true}
            playFromPositionMillis={0}
            switchToLandscape={()=>ScreenOrientation.allow(ScreenOrientation.Orientation.LANDSCAPE)}
            switchToPortrait={()=>ScreenOrientation.allow(ScreenOrientation.Orientation.PORTRAIT)}
            />
          </View>
          <View style={{flexDirection: 'row', marginBottom: 20}}>

            <TouchableOpacity style={styles.innerBackgroundCircle}>
            <FontAwesome
              name={'thumbs-o-down'}
              size={50}
              color={"purple"}
            />
            </TouchableOpacity>
            <TouchableOpacity style={styles.innerBackgroundCircle}>
           <FontAwesome
              name={'thumbs-o-up'}
              size={50}
              color={"purple"}
            />
            </TouchableOpacity>

          </View>
          </View>

          <View style={styles.bottom}>
          <Chat />
          </View>

      </View>
    );
  }
}

export { Competition };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex: 5,
    backgroundColor: '#180b42',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  bottom: {
    flex: 2,
    backgroundColor: 'lightgrey',
  },
  innerBackgroundCircle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    width: 80,
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 40,
    backgroundColor: 'lightgrey',
    margin: 10,
  }
});
