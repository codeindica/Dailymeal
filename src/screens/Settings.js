/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Linking,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from '../design/styles';
import {useDispatch, useSelector} from 'react-redux';
import * as wpActions from '../store/actions';
import {languages} from '../assets/lang';
import {colors} from '../design/colors';
import Btn from '../components/Btn';
import TextBtn from '../components/TextBtn';

export default function Settings({navigation}) {
  const dispatch = useDispatch();
  const lan = useSelector(state => state.appData.lang);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={[styles.row, styles.btw]}>
          <Text style={styles.lg}>{lan.settings}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
            <Text style={styles.lg}>Home</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text style={[styles.md, {paddingLeft: 20, padding: 10}]}>
          Change Language Preference
        </Text>
        <View style={styles.p}>
          <View style={[styles.row, styles.btw, styles.p]}>
            <Text style={styles.md}>French</Text>
            <TouchableOpacity
              style={[
                styles.circle,
                {borderColor: lan.hi === 'Salut' ? '#0c9' : colors.grey},
              ]}
              onPress={() =>
                dispatch(wpActions.selectLanguage(languages.french))
              }
            />
          </View>
          <View style={[styles.row, styles.btw, styles.p]}>
            <Text style={styles.md}>English</Text>
            <TouchableOpacity
              style={[
                styles.circle,
                {borderColor: lan.hi === 'Hi' ? '#0c9' : colors.grey},
              ]}
              onPress={() =>
                dispatch(wpActions.selectLanguage(languages.english))
              }
            />
          </View>
        </View>
      </View>
      <View style={[styles.row, styles.btw, {width: '95%'}]}>
        <Text style={[styles.md, {paddingLeft: 20, padding: 10}]}>
          Calorie Calculator
        </Text>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              'https://www.uncledavesenterprise.com/file/health/Food%20Calories%20List.pdf',
            )
          }>
          <Text>Click Here</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.row, styles.btw, {width: '95%'}]}>
        <Text style={[styles.md, {paddingLeft: 20, padding: 10}]}>
          Know your food
        </Text>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              'https://cdn1.sph.harvard.edu/wp-content/uploads/sites/30/2012/10/healthy-eating-pyramid-huds-handouts.pdf',
            )
          }>
          <Text>Click Here</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.abs}>
        <TextBtn title={lan.ref} onPress={() => navigation.push('Dashboard')} />
        <TextBtn
          title={lan.del}
          onPress={() => dispatch(wpActions.resetStore())}
        />
        <Btn
          title={lan.logout}
          onPress={() => dispatch(wpActions.saveToken(''))}
        />
      </View>
    </SafeAreaView>
  );
}
