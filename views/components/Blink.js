import React, { Component } from 'react';
import { View,Text } from 'react-native'


class Timer extends Component {
    state = {
        isShowingText:true,
        timer:null
    }
    componentDidMount() {
        this.state.timer = setTimeout(() => { 
            this.setState({
                flag:!this.state.flag
            })
        }, 3000)
    }
    render() {
        if (!this.state.flag) {
            return false
        }
        return (
        <View>
            <Text>{this.props.name}</Text>
        </View>
        
        )
    }
}

export default class Blink extends Component {
    state = {
        isShowingText:true,
        timer:null
    }
    componentDidMount() {
        this.state.timer = setTimeout(() => { 
            this.setState({
                flag:!this.state.flag
            })
        }, 3000)
    }
    render() {
        if (!this.state.flag) {
            return false
        }
        return (
        <View>
            <Timer></Timer>
            <Text>{this.props.name}</Text>
        </View>
        
        )
    }
}
