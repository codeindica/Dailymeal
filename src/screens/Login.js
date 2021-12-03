/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState} from 'react';
import {
  Text,
  Image,
  StatusBar,
  View,
  TextInput,
  ImageBackground,
} from 'react-native';
import {styles} from '../design/styles';
import {useDispatch} from 'react-redux';
import * as wpActions from '../store/actions';
import ActionSheet from 'react-native-actions-sheet';
import Btn from '../components/Btn';

const Login = () => {
  const actionSheetRef = useRef(null);
  const [name, setName] = useState('');
  const [err, setErr] = useState(false);
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (name.trim().length >= 2) {
      dispatch(wpActions.saveToken(name));
      actionSheetRef.current?.setModalVisible();
    } else {
      setErr(!err);
    }
  };

  return (
    <ImageBackground
      style={styles.container}
      source={require('../assets/a.jpeg')}>
      <StatusBar hidden={true} />
      <View
        style={[
          styles.container,
          {
            backgroundColor: 'rgba(255,255,255,0.84)',
            justifyContent: 'space-around',
          },
        ]}>
        <View>
          <Text style={styles.icon}>&#127835;</Text>
          <Image
            style={styles.logoImg}
            source={require('../assets/logo.png')}
          />
        </View>
        <Btn
          title="Login"
          onPress={() => actionSheetRef.current?.setModalVisible()}
        />
      </View>
      <ActionSheet ref={actionSheetRef}>
        <View style={styles.ov}>
          <View style={styles.p}>
            <Text style={styles.md}>Please provide your name</Text>
            <TextInput
              onChangeText={text => {
                setName(text);
                setErr(false);
              }}
              value={name}
              style={styles.input}
              maxLength={14}
            />
            {err ? (
              <Text style={styles.error}>
                Your name must be having at least two or more letters.
              </Text>
            ) : null}
          </View>
          <Btn title={'Submit'} onPress={() => handleLogin()} />
        </View>
      </ActionSheet>
    </ImageBackground>
  );
};

export default Login;
