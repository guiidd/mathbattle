import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View, TextInput } from "react-native";
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { text: 'I am a useless placeholder' };
    }

    render() {
        return (

            <View style={styles.root}>
                <View style={styles.battlefield}>
                    <View style={styles.container}>
                        <View style={styles.hero} />
                    </View>
                    <View style={styles.container}>
                        <View style={styles.villain} />
                        <View style={styles.villain} />
                        <View style={styles.villain} />
                    </View>
                </View>
                <Text>Battle math hello</Text>
                <TextInput
                    style={{ height: 40, width: 250, borderColor: 'gray', borderWidth: 1, }}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                />
                <Button
                    onPress={() => console.log(this.state.text)}
                    title="submit box of purple color"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        //flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    hero: {
        height: 40,
        width: 40,
        backgroundColor: 'blue'
    },
    villain: {
        height: 40,
        width: 40,
        backgroundColor: 'red'
    },
    battlefield: {
        flexDirection: 'row'
    }
});
export default App;
