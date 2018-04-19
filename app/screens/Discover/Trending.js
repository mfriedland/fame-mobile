
import React, { Component } from 'react';
import { FlatList, View, StyleSheet, Button, Dimensions, Image, Text, TouchableHighlight, Modal } from 'react-native';
import store from '../../store.js'
import { fetchUsers } from '../../reducers/AllUsers'
import { ModalView } from '../../components/ModalView'
import { musicians, dancers, models, comedians } from '../../../assets/SeedImages'
const ITEM_WIDTH = Dimensions.get('window').width
const artists = [ musicians, dancers, models, comedians ]

class Trending extends Component {
  constructor(props) {
    super(props)
    this.state = {
      columns: 3,
      key: 1,
      array: [],
      modalVisible: false,
      id: 2,
      type: null,
    }
  }

_setModalVisible(visible, item, type) {
  if (item) {
    id = item - 1
    this.setState({ modalVisible: visible, id: id, type});
  } else  this.setState({ modalVisible: visible })
}

_renderItem = ({item}, type) => (
    <TouchableHighlight id={item.id} onPress={() => this._setModalVisible(true, item.id, item.type)} >
       <Image style={styles.trendingImage} source={{ uri: item.image }} />
     </TouchableHighlight>
)

 render() {
    const { columns, key, array } = this.state
    const itemWidth=((ITEM_WIDTH - (10*columns)) / columns)

    return (
      <View style={styles.container}>
        <View style={styles.headingTextContainer}>
            <Text style={styles.headingText}> Musicians </Text>
            <Text style={styles.headingText}> Dancers </Text>
            <Text style={styles.headingText}> Models </Text>
        </View>

        <View style={styles.flatlistContainer}>

          <FlatList
            keyExtractor= {(item, index) => index }
            data={artists}
            horizontal={true}
            renderItem={({ item }) => (
            <View style={styles.flatlistStyle}>
              <FlatList
                  keyExtractor= {(item, index) => index }
                  data={item}
                  renderItem={(item) => this._renderItem(item, 'musicians')}

                />
            </View>
             )}
          />
          </View>

        <ModalView
            modalVisible={ this.state.modalVisible }
            type = { this.state.type }
            setModalVisible={ (vis) => { this._setModalVisible(false) }}
            id={ this.state.id }
            style={{display:'flex',height:800, width:800, alignItems: 'center', justifyContent: 'center'}}
            />
      </View>
   )
 }
}

export { Trending };


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#180b42',
    justifyContent: 'flex-end',
    alignItems: 'center',
},
  headingTextContainer: {
    // flex: 1,
    // alignItems:'center',
    marginTop: 20,
    justifyContent :'space-between',
    height: 20,
    flexDirection:'row'
  },
  headingText: {
    fontSize: 15,
    color: 'lightgrey',
    marginRight : 23,
    marginLeft : 23,
    // justifyContent :'space-around',
  },
  flatlistContainer: {
    flex: 1,
    flexDirection: 'row',
    // width: 100,
    // height: 100,
    // marginLeft: 10,
    // marginRight: 10,
  },
  flatlistStyle: {
    // width: 100,
    // height: 100,
    flex: 1,
  },
  trendingImage: {
    width: 100,
    height: 100,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  }
})

 // <View style={styles.flatlistStyle}>
          // <FlatList
          //     keyExtractor= {(item, index) => index }
          //     data={musicians}
          //     renderItem={(item) => this._renderItem(item, 'musicians')}
          //   />
          // </View>
          // <View style={styles.flatlistStyle}>
          // <FlatList
          //   keyExtractor= {(item, index) => index }
          //   data={dancers}
          //   renderItem={(item) => this._renderItem(item, 'dancers')}
          //   />
          // </View>
          // <View style={styles.flatlistStyle}>
          // <FlatList
          //   keyExtractor= {(item, index) => index }
          //   data={models}
          //   renderItem={(item) => this._renderItem(item, 'models')}
          //   />
          // </View>

//  <Button
//       onPress={() => {
//         let {columns, key} = this.state
//         columns = columns === 3? 1 : 3
//         this.setState({columns: columns, key: key+1})
//       }}
//       title='Toggle Layout' />


// this.getImageData = this.getImageData.bind(this)
// componentDidMount() {
//   // store.dispatch(fetchUsers())
//   let dataToRender = store.getState()
//   console.log(dataToRender.AllUsers)
//   // this.getImageData()
// }

// getImageData = () => {
//  axios.get('/users')
//    .then(res => {
//     console.log('line 35', res)
//     return res.data
//    })
//    .then(users => {
//     this.setState({data: users})
//    })
// };
// // import Icon from 'react-native-vector-icons/FontAwesome';
// // const myIcon = (<Icon name="rocket" size={30} color="#900" />)

// class Trending extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       loading: false,
//       data: [],
//       page: 1,
//       seed: 1,
//       error: null,
//       refreshing: false
//     };
//   }

//   componentDidMount() {
//     this.makeRemoteRequest();
//   }


//  makeRemoteRequest = () => {
//    axios.get('/api/users')
//      .then(res => {
//       console.log('line 35', res)
//       return res.data
//      })
//      .then(users => {
//       this.setState({data: users})
//      })
//  };

//   handleRefresh = () => {
//     this.setState(
//       {
//         page: 1,
//         seed: this.state.seed + 1,
//         refreshing: true
//       },
//       () => {
//         this.makeRemoteRequest();
//       }
//     );
//   };

//   handleLoadMore = () => {
//     this.setState(
//       {
//         page: this.state.page + 1
//       },
//       () => {
//         this.makeRemoteRequest();
//       }
//     );
//   };

//   renderSeparator = () => {
//     return (
//       <View
//         style={{
//           height: 1,
//           width: "100%",
//           backgroundColor: "#CED0CE",
// //          marginLeft: "14%"
//         }}
//       />
//     );
//   };

//   renderHeader = () => {
//     return <SearchBar placeholder="Type Here..." lightTheme round />;
//   };

//   renderFooter = () => {
//     if (!this.state.loading) return null;

//     return (
//       <View
//         style={{
//           paddingVertical: 20,
//           borderTopWidth: 1,
//           borderColor: "#CED0CE"
//         }}
//       >
//         <ActivityIndicator animating size="large" />
//       </View>
//     );
//   };

//   render() {
//     console.log('104', this.state.data)
//     return (
// //            <View style={{flexDirection: 'row', flex: 1}}>

//             <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
//         <FlatList
//           data={this.state.data}
//           renderItem={({ item }) => (
//              <ListItem
//             image src={item.photo}
//               containerStyle={{ borderBottomWidth: 0 }}
//             />
//           )}
//           keyExtractor={item => item.email}
//           ItemSeparatorComponent={this.renderSeparator}
//           ListHeaderComponent={this.renderHeader}
//           ListFooterComponent={this.renderFooter}
//           onRefresh={this.handleRefresh}
//           refreshing={this.state.refreshing}
//           onEndReached={this.handleLoadMore}
//           onEndReachedThreshold={1}
//              horizontal={false}
//             numColumns={3}

//         />
//       </List>
// //            </View>
//     );
//   }
// }
