import React from 'react';
import { View, Dimensions, Image, StyleSheet } from 'react-native';
import styles from '../stylesheets'

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const Card = (props) => {
  return (
    <View style={styles.deckCardStyle}>
      {props.children}
      <Image style={{width:SCREEN_WIDTH-30, height: SCREEN_HEIGHT-120}} source={props.image} />
         </View>
  );
};


export { Card };
