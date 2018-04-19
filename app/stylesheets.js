import { StyleSheet, View, Animated, PanResponder, Dimensions, LayoutAnimation, UIManager} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 250;

export const styles = StyleSheet.create({
  globalContainer: {
    flex: 1,
    marginTop: 20,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#180b42',
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#180b42',
  },
  containerNoGrow: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#180b42',
  },
  mainNavigatorFullContainer: {
    flex: 1
  },
  mainNavigatorContainer: {
    flexGrow: 13,
    // bafckgroundColor: '#12092f',
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
  leaveButton: {
      // flex: 1,
      fontSize: 13,
      color: 'rgb(252,197,76)',
      fontWeight: '500',
      marginVertical: 50,
      flexDirection: 'column',
      justifyContent: 'flex-end',
  },
  deckContainer: {
    width: SCREEN_WIDTH-40,
    // flex: 1,
  },
  cardDeckStyle: {
    position: 'absolute',
    width: SCREEN_WIDTH,
    height: 500,
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deckCardStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 40,
    paddingTop: 20,
    width: .8*SCREEN_WIDTH,
    height: .8*SCREEN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    // flex: 1,
  },
  signupNavigateTextContainer: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row'

  },
  signupNavigateText: {
    fontSize: 13,
    color: 'rgb(252,197,76)',
  },
  signupNavigateButton: {
    fontSize: 13,
    fontWeight: '700',
    color: 'rgb(252,197,76)',
  },
  loginNavigateTextContainer: {
    flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'flex-start',
    paddingVertical:16,
    flexDirection:'row'
  },
  loginNavigateText: {
    fontSize: 13,
    color: 'rgb(252,197,76)',
  },
  loginNavigateButton: {
    fontSize: 13,
    fontWeight: '700',
    color: 'rgb(252,197,76)',
  },
  chooseUserTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  selectUserTypeButton: {
        fontSize: 17,
        fontWeight: '700',
        color: 'white',
        letterSpacing: 5,
    },
    // Peripheral Components
    spinnerStyle: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
});

export default styles;
