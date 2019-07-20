import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View, TextInput, Picker } from "react-native";
import './App.css';
import { isBreakStatement } from "@babel/types";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: 'I am a useless placeholder',
            answer: '',
            numberOfEnemies: 3,
            value1: 1,
            value2: 1,
            won: false,
            operator: '+',
            mode: 'addition'
        };
    }

    randomNum = (max) => {
        return Math.floor(Math.random() * Math.floor(max))
    }

    checkAnswer = (operator) => {

        let correct
        switch (operator) {
            case 'addition':
                //console.log(`from checkAnswer is ${operator}`)
                //hate spelling errors 
                //console.log(parseInt(this.state.answer, 10),this.state.value1,this.state.value2,parseInt(this.state.answer, 10) === this.state.value1 + this.state.value2)
                correct = parseInt(this.state.answer, 10) === this.state.value1 + this.state.value2
                //console.log(`correct is ${correct}`)
                this.setState({ operator: '+' })
                break;
            case 'substraction':
                correct = parseInt(this.state.answer, 10) === this.state.value1 - this.state.value2
                this.setState({ operator: '-' })
                break;
            case 'multiplication':
                correct = parseInt(this.state.answer, 10) === this.state.value1 * this.state.value2
                this.setState({ operator: '*' })
                break;
            case 'division':
                //division error when divided by 0, need to limit decimal point
                correct = parseInt(this.state.answer, 10) === this.state.value1 / this.state.value2
                this.setState({ operator: '/' })
                break;
            default:
                console.log('sorry not an option')
        }
        //var expr = 'Papayas';
        //switch (expr) {
        //  case 'Oranges':
        //    console.log('Oranges are $0.59 a pound.');
        //    break;
        //case 'Mangoes':
        //case 'Papayas':
        //  console.log('Mangoes and papayas are $2.79 a pound.');
        // expected output: "Mangoes and papayas are $2.79 a pound."
        //break;
        //default:
        //  console.log('Sorry, we are out of ' + expr + '.');
        //}

        //let correct = parseInt(this.state.answer, 10) === this.state.value1 + this.state.value2

        if (correct) {
            this.removeEnemy()

        } else {
            this.addEnemy()
        }
        this.newProblem()
    }

    removeEnemy = () => {
        this.setState(
            prev => ({ numberOfEnemies: prev.numberOfEnemies - 1 }),
            () => {
                if (this.state.numberOfEnemies === 0) {
                    this.youWon()
                }
            }
        )
        //this.setState({ numberOfEnemies: this.state.numberOfEnemies - 1 })
        //console.log(`correct enemies is ${this.state.numberOfEnemies}`)
        //this.setState(prevState => {
        //if(this.state.numberOfEnemies===1){
        //console.log(`correct enemies is ${this.state.numberOfEnemies}`)
        //this.youWon()
        //}
        //})

    }

    addEnemy = () => {
        if (this.state.numberOfEnemies <= 8) {
            this.setState({ numberOfEnemies: this.state.numberOfEnemies + 1 })
        }

    }

    newProblem = () => {
        console.log('new problem created')
        this.setState({
            value1: this.randomNum(10),
            value2: this.randomNum(10)
        })
    }

    youWon = () => {
        this.setState({
            won: true
        })
    }

    componentDidMount = () => {
        this.newProblem()
    }

    handleSubmit = () => {
        console.log(`from handle submit ${this.state.mode}`)
        this.checkAnswer(this.state.mode)
    }

    handleModePicker = val => {
        switch (val) {
            case 'addition':
                this.setState({ mode: val, operator: '+' })
                break;
            case 'substraction':

                this.setState({ mode: val, operator: '-' })
                break;
            case 'multiplication':

                this.setState({ mode: val, operator: '*' })
                break;
            case 'division':

                this.setState({ mode: val, operator: '/' })
                break;
            default:
                console.log('sorry not an option')
        }
    }

    render() {
        const { mode, answer, numberOfEnemies, value1, value2, won, operator } = this.state
        return (

            <View style={styles.root}>
                <Picker
                    selectedValue={mode}
                    style={{ height: 50, width: 100 }}
                    onValueChange={(itemValue, itemIndex) =>
                        //this.setState({ mode: itemValue.mode, operator: itemValue.operator })
                        this.handleModePicker(itemValue)
                    }>
                    <Picker.Item label="addition" value={"addition"} />
                    <Picker.Item label="substraction" value={"substraction"} />
                    <Picker.Item label="multiplication" value={"multiplication"} />
                    <Picker.Item label="division" value={"division"} />
                </Picker>
                <Text >Battle math hello</Text>
                <View style={styles.battlefield}>
                    <View style={styles.container}>
                        <View style={styles.hero} />
                    </View>
                    <View style={styles.container}>
                        {[...Array(numberOfEnemies)].map(
                            (x, i) => <View key={i} style={styles.villain} />
                        )}
                        {/*
                        <View style={styles.villain} />
                        <View style={styles.villain} />
                        */}
                    </View>
                </View>
                {won ? <Text>u waon VVICTORY</Text> :
                    <View style={styles.mathContainer}>
                        <View style={styles.mathRow}>
                            <Text style={styles.mathText}>{value1}{operator}{value2}=</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={(answer) => this.setState({ answer })}
                                value={answer}
                            />
                        </View>
                        <Button
                            onPress={() => {
                                console.log(`2 state.answer is ${answer}`);
                                this.handleSubmit()
                            }
                            }
                            title="purple color"
                            color="#841584"
                            accessibilityLabel="Learn more about this purple button"
                        />
                    </View>
                }
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
