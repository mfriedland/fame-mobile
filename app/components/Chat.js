import React, { Component } from 'react';
import { View, Platform, Text } from 'react-native';
// import PropTypes from 'prop-types';
import { GiftedChat } from 'react-native-gifted-chat';
import emojiUtils from 'emoji-utils';

import SlackMessage from './SlackMessage';

class Chat extends Component {
  state = {
    messages: [],
  }

  componentDidMount() {
    this.setState({
      messages: [
        {
          _id: 4,
          text: 'I didn"t feel prepared, but everyone was so nice, so I think it went well',
          createdAt: new Date(),
          user: {
            _id: 1,
            name: 'User4',
            avatar: 'https://facebook.github.io/react/img/logo_og.png',
          },
        },
        {
          _id: 3,
          text: 'Pretty good actually.',
          createdAt: new Date(),
          user: {
            _id: 1,
            name: 'User4',
            avatar: 'https://facebook.github.io/react/img/logo_og.png',
          },
        },
        {
          _id: 2,
          text: 'Did you feel good about it?',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'User3',
            avatar: 'https://facebook.github.io/react/img/logo_og.png',
          },
        },
        {
          _id: 1,
          text: 'Hey, how was your interview?',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'User3',
            avatar: 'https://facebook.github.io/react/img/logo_og.png',
          },
        },


      ],
    })
  }

  renderMessage(currText) {
    // const { currentMessage: { text: currText } } = props;

    let messageTextStyle;

    // Make "pure emoji" messages much bigger than plain text.
    // if (currText && emojiUtils.isPureEmojiString(currText)) {
    //   messageTextStyle = {
    //     fontSize: 28,
    //     // Emoji get clipped if lineHeight isn't increased; make it consistent across platforms.
    //     lineHeight: Platform.OS === 'android' ? 34 : 30,
    //   };
    // }
    console.log('current Text XXXXXX', currText)
    let time = currText.currentMessage.createdAt.toString().slice(15,24)
    return (
      <View>
        {/* {currentMessage && */}
        {/* <SlackMessage messageTextStyle={messageTextStyle} /> */}
        <Text>
        {time} {currText.currentMessage.user.name} {currText.currentMessage.text}
        </Text>
        {/* } */}
        </View>
    );
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        renderMessage={this.renderMessage}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}

      />
    );
  }

}

export default Chat;
