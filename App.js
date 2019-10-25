import React, { Component } from 'react';
import {SafeAreaView, Text, View } from 'react-native';
import Img from './views/components/img.js';
import Greet from './views/components/greet.js';
import Blink from './views/components/Blink.js';


export default class HelloWorldApp extends Component {
  render() {
    return (
        <>
        <SafeAreaView>
            <View><Text>Hello, world!</Text></View> 
            <Greet name="hello"></Greet>
            <Greet name="world"></Greet>
            <Blink name="内容1"></Blink>
            <Blink name="内容2222"></Blink>
        
        </SafeAreaView>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <View><Text>Hello, world!</Text></View> 
            <Img></Img>
        </View>
        </>
    );
  }
}