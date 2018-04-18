import React, { Component } from 'react';
import { StyleSheet, Text, Button, View, Image, TextInput,
        TouchableOpacity, AsyncStorage  ,
        Alert} from 'react-native';
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../reducers/CurrentUser'
import { Spinner } from './Spinner';

export class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
      loading: false,
      prop: props,
    }
  }

  componentDidMount() {
  }

  onEmailChange(text) {
    this.props.emailChanged(text)
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text)
  }

  onButtonPress() {
    let nav = this.state.prop.onSubmit;
      const { email, password } = this.props;
      this.props.loginUser({ email, password }, nav);
  }

  renderError() {
      if (this.props.error) {
        return (
          <View style={{backgroundColor: 'white'}}>
          <Text style={styles.errorTextStyle}>
          {this.props.error}
          </Text>
          </View>
        )
      }
    }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />
    }
    return (
      <TouchableOpacity onPress={this.onButtonPress.bind(this)}>
            <Text style={styles.loginButton} > Log in </Text>
      </TouchableOpacity>
    )
  }

  render() {

    return (
      <View style={styles.container}>
          <View>
            <Image source={require('../../assets/SignUpPage/logo.png')} />
            <Image source={require('../../assets/SignUpPage/invertedlogo.png')} />
          </View>

            <TextInput
            style={styles.inputBox}
            placeholder="Email"
            value={this.props.email}
            placeholderTextColor='lightgrey'
            // keyboardType="email-address"
            autoCorrect={false}
            onChangeText={this.onEmailChange.bind(this)}
            />
            <TextInput style={styles.inputBox}
            placeholder="Password"
            placeholderTextColor='lightgrey'
            secureTextEntry={true}
            value={this.props.password}
            autoCorrect={false}
            onChangeText={this.onPasswordChange.bind(this)}
            />

          {this.renderButton()}

          {this.renderError()}

          <View style={styles.signupButtons}>
            <Image style={styles.signupButton} source={require('../../assets/SignUpPage/facebook.png')} />
            <Image style={styles.signupButton} source={require('../../assets/SignUpPage/twitter.png')} />
            <Image style={styles.signupButton} source={require('../../assets/SignUpPage/google.png')} />
          </View>

      </View>
    );


  }
}

const mapStateToProps = ({ CurrentUser } ) => {
  const { email, password, error, loading } = CurrentUser;

  return { email, password, error, loading }
};

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginForm)

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,

  },
  inputBox: {
    width: 300,
    height: 15.3,
    // fontFamily: "WorkSans",
    fontSize: 20.7,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    marginVertical: 20,
    color: "#ffffff"
  },

  loginButton: {
    fontSize: 16,
    color: 'rgb(252,197,76)',
    fontWeight: '700',
    marginVertical: 20,
  },
  signupButtons: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginVertical: 10,
    justifyContent: 'flex-start',
  },
  signupButton: {
    flexDirection: 'column',
    marginHorizontal: 20,
    marginVertical: 20,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  }
});


// login(event) {
//           fetch('http://172.16.22.229:8081/users/login', {
//           method: 'POST',
//           headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             email : "kalo@sokum.co.uk",
//             password: ""
//           })
//         })
//           .then( response => response.data)
//           .then(loginedUser => {
//             alert("you've signed in")
//             Actions.profile()

//           })
//         }
