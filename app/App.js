import React, { Component } from 'react';
import { Alert } from 'react-native'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { View, StatusBar } from 'react-native';
import firebase from 'firebase';
import Routes from './screens/Routes';
import {persistor, store} from './store'
import styles from './stylesheets'
console.disableYellowBox = true;
// import registerForNotifications from './services/pushNotifications'

export default class myapp extends Component {

  state = { loggedIn: null} // or start w true?

  componentDidMount() {
    // registerForNotifications();
    // Notifications.addListener((notification) => {
      // const {data : {text}, origin } = notification;
      // if (origin === 'received && text) {
      //   Alert.alert('New Push Notofication',
      //   text, [{ text: 'Ok.'}]
      // )
  // }
    // })


    firebase.auth().onAuthStateChanged(user => {
      // if (this.  ) return;
      if (user) this.setState({loggedIn: true});
      else this.setState({ loggedIn: false});
      // this.setState({ loggedIn: !loggedIn })
    })
  }

  // componentWillUnmount() {
    // this.cancelled = true;
  // }


  render() {

    return (
      <Provider store={ store }>
        <View style={styles.globalContainer}>
          <PersistGate persistor={persistor}>
            <Routes />
          </PersistGate>
        </View>
      </Provider>
    );
  }
}




