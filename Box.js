/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  Component,
  Text,
  View
} from 'react-native';

import styles from './styles';

export default class Box extends Component {
  render() {
    return (
      <View style={this.props.style}>
        <Text style={styles.text}>{this.props.text}</Text>
      </View>
    );
  }
}
