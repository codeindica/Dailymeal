import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function TextBtn({onPress, title}) {
  return (
    <TouchableOpacity onPress={onPress} style={inlineStyles.btn}>
      <Text style={inlineStyles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
}

const inlineStyles = StyleSheet.create({
  btn: {
    width: '90%',
    margin: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    padding: 14,
    borderRadius: 40,
  },
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
