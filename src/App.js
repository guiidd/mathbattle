import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View, TextInput } from "react-native";
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: 'I am a useless placeholder',
            answer: '',
            numberOfEnemies: 8
        };
    }

    checkAnswer = () => {
        let correct = parseInt(this.state.answer, 10) === 2 + 2

        if (correct) {
            this.removeEnemy()
        } else {
            this.addEnemy()
        }
        this.newProblem()
    }

    removeEnemy = () => {

        this.setState({ numberOfEnemies: this.state.numberOfEnemies - 1 })
    }

    addEnemy = () => {

        this.setState({ numberOfEnemies: this.state.numberOfEnemies + 1 })
    }

    newProblem = () => {
        console.log('new problem created')
    }

    render() {
        return (

            <View style={styles.root}>
                <Text >Battle math hello</Text>
                <View style={styles.battlefield}>
                    <View style={styles.container}>
                        <View style={styles.hero} />
                    </View>
                    <View style={styles.container}>
                        {[...Array(this.state.numberOfEnemies)].map(
                            (x,i) => <View key={i} style={styles.villain} />
                        )}
                        {/*
                        <View style={styles.villain} />
                        <View style={styles.villain} />
                        */}
                    </View>
                </View>
                <View style={styles.mathContainer}>
                    <View style={styles.mathRow}>
                        <Text style={styles.mathText}>2+2=</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={(answer) => this.setState({ answer })}
                            value={this.state.answer}
                        />
                    </View>
                    <Button
                        onPress={() => {
                            console.log(`2 state.answer is ${this.state.answer}`);
                            this.checkAnswer()
                        }
                        }
                        title="purple color"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    />
                </View>
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
        height: 80,
        width: 80,
        backgroundColor: 'blue'
    },
    villain: {
        height: 80,
        width: 80,
        backgroundColor: 'red'
    },
    battlefield: {
        flex: 1,
        flexDirection: 'row',
        width: '100%'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly'

    },
    mathContainer: {
        paddingVertical: 16
    },
    mathText: {
        fontSize: 20
    },
    mathRow: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    input: {
        height: 40,
        width: 80,
        borderColor: 'gray',
        borderWidth: 1
    }

});
export default App;
