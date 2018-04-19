import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableOpacity} from 'react-native';

class SharePage extends Component {
  // static navigationOptions = {
  //   tabBarVisible: false
  // }
  render() {
    return (

      <View style={styles.container}>

          <Text style={styles.title}>
          Micah, you are ready for your rise to fame.
          </Text>

          <Text style={styles.subtitle}>
          Share your profile with your friends.
          </Text>

          <View style={styles.row}>

            <ImageBackground style={styles.backgroundCircle} source={require('../../../assets/Share/ellipse.png')}>
                <Image source={require('../../../assets/Share/facebook.png')} />
            </ImageBackground >

            <ImageBackground style={styles.backgroundCircle} source={require('../../../assets/Share/ellipse.png')}>
              <Image source={require('../../../assets/Share/messenger.png')} />
            </ImageBackground >

            <ImageBackground style={styles.backgroundCircle} source={require('../../../assets/Share/ellipse.png')}>
              <Image source={require('../../../assets/Share/twitter.png')} />
            </ImageBackground >

            <ImageBackground style={styles.backgroundCircle} source={require('../../../assets/Share/ellipse.png')}>
              <Image source={require('../../../assets/Share/instagram.png')} />
            </ImageBackground >
          </View>

          <View style={styles.row}>
            <Text style={styles.shareText}>Facebook</Text>
            <Text style={styles.shareText}>Messenger</Text>
            <Text style={styles.shareText}>Twitter</Text>
            <Text style={styles.shareText}>Instagram</Text>
          </View>

          <View style={styles.row}>
            <ImageBackground style={styles.backgroundCircle} source={require('../../../assets/Share/ellipse.png')}>
              <Image source={require('../../../assets/Share/whatsapp.png')} />
            </ImageBackground >
            <ImageBackground style={styles.backgroundCircle} source={require('../../../assets/Share/ellipse.png')}>
              <Image source={require('../../../assets/Share/email.png')} />
            </ImageBackground >
            <ImageBackground style={styles.backgroundCircle} source={require('../../../assets/Share/ellipse.png')}>
              <Image source={require('../../../assets/Share/text.png')} />
            </ImageBackground >
            <ImageBackground style={styles.backgroundCircle} source={require('../../../assets/Share/ellipse.png')}>
              <Image source={require('../../../assets/Share/moreDots.png')} />
            </ImageBackground >
           </View>

           <View style={styles.row}>
            <Text style={styles.shareText}>WhatsApp</Text>
            <Text style={styles.shareText}>Email</Text>
            <Text style={styles.shareText}>Messenger</Text>
            <Text style={styles.shareText}>More</Text>
          </View>

      </View>
    );
  }
}

export { SharePage };


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    // marginTop: 100,
    backgroundColor: '#180b42',
  },
  row: {
    flexDirection: 'row',
    margin: 5,
    justifyContent: 'space-around',
    transform: [{scaleX: .94}, {scaleY: .94}]
  },
  backgroundCircle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 90,
    marginRight: 1,
    transform: [{scaleX: .94}, {scaleY: .94}]
  },
  shareText: {
    color: 'white',
    margin: 10,
    justifyContent: 'space-around',
    marginRight: 25,
  },
  title: {
    color: 'rgb(179,151,171)',
    fontSize: 30,
    margin: 15,
    marginTop: -50,
    marginBottom: 30,
  },
  subtitle: {
    color: 'white',
    fontSize: 18,
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  }
});
