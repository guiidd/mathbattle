import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View, TextInput } from "react-native";
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { text: 'saya adalah useless placeholder' };
  }

  render() {
    return (
      <View style={styles.root}>
        <Text>Battle math hello</Text>
        <TextInput
          style={{ height: 40, width: 250, borderColor: 'gray', borderWidth: 1, }}
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
        />
        <Button
          onPress={() => console.log(this.state.text)}
          title="submit To Me and only me only me"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
export default App;
