import React, { Component } from 'react';
import {  StyleSheet, Text, View, ImageBackground, StatusBar, Image, TouchableOpacity } from 'react-native';
import connect from 'react-redux'
import EditForm from '../../components/EditForm';
import styles from '../../stylesheets'
import store from '../../store'

let user;
class EditProfile extends Component {

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
    user = this.state.CurrentUser

    return (
      <View style={styles.containerNoGrow}>
          <EditForm type="edit" user={user} userId={user.id} />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.CurrentUser }
};

// const mapDispatch = dispatch => ({
//   // like: (artist) => dispatch(swipeRightArtist(artist)),
// })

// export default connect(mapStateToProps)(EditProfile)


export { EditProfile };
