import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import NAVBAR from './component/navbar';
import IMG from './component/img';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text : ' ',
      isShowingText : true
    };
    
    // setInterval(() => {
    //   this.setState(previousState => (
    //     { isShowingText : !previousState.isShowingText }
    //   ))
    // }, 1000); // Time interval function.

  }


  render() {
    if(!this.state.isShowingText) {
      return (
        <View style={styles.container}>
        <Text>Now Loading.....</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <NAVBAR />
        <IMG />
        <TextInput
          style={{height : 40}}
          placeholder="Type here to translate"
          onChangeText={(text) => this.setState({text})}
        />
        <Text>Hello world</Text>
        <Text style={{padding : 10, fontSize : 42}}>
          {this.state.text.split(' ').map((word) => word && '🎇').join(' ')}
        </Text>
        <Text style={styles.dot}> 아 </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    backgroundColor: 'grey',
  },
});