import React, { Component } from 'react';
import { StyleSheet, Button, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import { updateUser } from '../reducers/CurrentUser'; //firstNameChanged, lastNameChanged, emailChanged, passwordChanged,
import { Spinner } from './Spinner'
import { Signup } from '../screens';


export class EditForm extends Component {

    constructor(props) {
      super(props);
      const { firstName, lastName, email, password } = this.props.user

      this.state = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      }
    }

    onButtonPress() {
      let { firstName, lastName, email, password } = this.state;

      firstName = firstName.length ? firstName : this.props.user.firstName
      lastName = lastName.length ? lastName : this.props.user.lastName
      email = email.length ? email : this.props.email
      password = password.length ? password : this.props.password

      this.props.updateUser({ firstName, lastName, email, password, userId: this.props.userId })
    }

  render() {
    let user = this.props.user
    return (
      <View style={styles.container}>
          <View>
            <Text style={styles.title}> Update Profile </Text>
          </View>
          <TextInput style={styles.inputBox}
          placeholder= {user.firstName || "First Name"}
          placeholderTextColor='lightgrey'
          // onChangeText={this.onFirstNameChange.bind(this)}
          onChangeText={text => this.setState({ firstName : text })}
          />
          <TextInput style={styles.inputBox}
          placeholder= {user.lastName || "Last Name" }
          placeholderTextColor='lightgrey'
          // onChangeText={this.onLastNameChange.bind(this)}
          onChangeText={text => this.setState({ lastName : text })}
          />
          <TextInput style={styles.inputBox}
          placeholder= { user.email || "Email Address " }
          placeholderTextColor='lightgrey'
          autoCapitalize= 'none'
          // onChangeText={this.onEmailChange.bind(this)}
          onChangeText={text => this.setState({ email : text })}
          />
          <TextInput style={styles.inputBox}
          placeholder= { user.password || "Password" }
          placeholderTextColor='lightgrey'
          autoCapitalize='none'
          secureTextEntry='true'
          // onChangeText={this.onPasswordChange.bind(this)}
          onChangeText={text => this.setState({ password : text })}
          />

          {this.renderButton()}

          {this.renderError()}

      </View>
    );
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />
    }
    return (
      <TouchableOpacity onPress={this.onButtonPress.bind(this)}>
            <Text style={styles.buttonText} > UPDATE </Text>
      </TouchableOpacity>
    )
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
}

const mapStateToProps = ({ CurrentUser } ) => {
  const { email, password, firstName, lastName, error, loading } = CurrentUser;

  return { email, password, firstName, lastName, error, loading }
};

// export {EditForm}

export default connect(mapStateToProps, { updateUser})(EditForm) //firstNameChanged, lastNameChanged, emailChanged, passwordChanged,

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 100,
  },
  inputBox: {
    width: 300.3,
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

  buttonText: {
    fontSize: 16,
    color: 'rgb(252,197,76)',
    fontWeight: '700',
    marginVertical: 20,
  },
  title: {
    // flex: 1,
    fontSize: 20,
    color: 'rgb(252,197,76)',
    fontWeight: '500',
    marginVertical: 50,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  }
});

  // onFirstNameChange(text) {
  //     this.props.firstNameChanged(text)
  //   }

  //   onLastNameChange(text) {
  //     this.props.lastNameChanged(text)
  //   }
  //   onEmailChange(text) {
  //     this.props.emailChanged(text)
  //   }

  //   onPasswordChange(text) {
  //     this.props.passwordChanged(text)
  //   }
