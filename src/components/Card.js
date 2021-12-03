/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {colors} from '../design/colors';
import {styles} from '../design/styles';

export default function Card({onPress, title, show}) {
  return (
    <View
      style={[
        styles.row,
        styles.btw,
        {
          borderBottomColor: '#999',
          borderBottomWidth: 0.5,
          paddingHorizontal: 10,
          borderRadius: 5,
        },
      ]}>
      <Text style={styles.lg}>🍳 {title}</Text>
      {show ? (
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.sm}>Add item</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
}
