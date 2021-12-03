import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {colors} from '../design/colors';

export default function Btn({onPress, title}) {
  return (
    <TouchableOpacity onPress={onPress} style={inlineStyles.btn}>
      <Text style={inlineStyles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
}

const inlineStyles = StyleSheet.create({
  btn: {
    backgroundColor: colors.dark,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 50,
  },
  btnText: {
    fontSize: 16,
    letterSpacing: 1.4,
    fontWeight: 'bold',
    color: colors.white,
    textTransform: 'uppercase',
  },
});
