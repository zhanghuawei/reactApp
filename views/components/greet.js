import React, { Component } from 'react';
import { View,Text} from 'react-native';

export default class Greet extends Component {
  render() {
    return (
      
      <View>
          <Text>{this.props.name}</Text>
      </View>
    );
  }
}
