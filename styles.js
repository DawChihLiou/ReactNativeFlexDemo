/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    // flexDirection: 'column',
  },
  Box: {
    justifyContent: 'center',
    // justifyContent: 'flex-end',
    alignItems: 'center',
    // alignItems: 'flex-start',
  },
  smBox: {
    flex: 1,
    backgroundColor: '#3498db',
  },
  mdBox: {
    flex: 2,
    backgroundColor: '#f39c12',
  },
  lgBox: {
    flex: 3,
    backgroundColor: '#34495e',
  },
  text: {
    color: '#fff',
  },
});

export default styles;
