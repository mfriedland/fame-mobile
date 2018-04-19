import React, { Component } from 'react';
import { Text, View, StatusBar, Button, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux'
import firebase from 'firebase';
import styles from '../../stylesheets'

class Profile extends Component {
    static navigationOptions = {
            title: 'fame',
            headerStyle: {
              backgroundColor: 'white',
              tintColor:'rgb(252,197,76)',
            },
            headerLeft: <Button title='Share' color='white' />,
            headerTintColor: 'rgb(252,197,76)',
           }

    edit() {
        var userId = firebase.auth().currentUser.uid;
        firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
        var userInfo = (snapshot.val() && snapshot.val()) || 'Anonymous';
       })
    }

    onButtonPress() {

    }

    render() {
        return (
            <View style = { styles.container } >
                <ImageBackground
                    source={require('../../../assets/ArtistProfile2/ArtistProfile2.png')}
                    // style = {{transform: [{scaleX: .9}, {scaleY: .9}]}}
                    style={{flexGrow: 1,
                            width: 370,
                            height: 700,
                            // flexDirection: 'row',
                            // justifyContent: 'center',
                            alignItems: 'stretch',}}
                    >
                </ImageBackground>
             </View>
        );
    }
}

export { Profile };
