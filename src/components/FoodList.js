/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../design/styles';

export default function FoodList({keys, it, remove, bg, cal}) {
  return (
    <View key={keys} style={[styles.row, styles.btw, styles.listItem]}>
      <View>
        <View style={styles.row}>
          <View style={[styles.veg, {backgroundColor: bg}]} />
          <Text style={[styles.sm, {textTransform: 'capitalize'}]}>
            {it.itemName}
          </Text>
        </View>
        <View>
          <Text style={[{color: '#999', fontSize: 12, paddingLeft: 22}]}>
            {it.cal} Calories
          </Text>
        </View>
      </View>
      <TouchableOpacity onPress={remove}>
        <Text style={styles.sm}>&#10006;</Text>
      </TouchableOpacity>
    </View>
  );
}
