/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ScrollView,
} from 'react-native';
import * as Progress from 'react-native-progress';
import {styles} from '../design/styles';
import {useSelector, useDispatch} from 'react-redux';
import * as wpActions from '../store/actions';
import moment from 'moment';
import {Days} from '../assets/data/days';
import {colors} from '../design/colors';
import Card from '../components/Card';
import ActionSheet from 'react-native-actions-sheet';
import Btn from '../components/Btn';
import FoodList from '../components/FoodList';

export default function Dashboard({navigation}) {
  const dispatch = useDispatch();
  const totalData = useSelector(state => state.appData.data);
  const name = useSelector(state => state.appData.token);
  const [currDay, setCurrDay] = useState(moment().weekday());
  const lan = useSelector(state => state.appData.lang);
  const actionSheetRef = useRef(null);
  const [itemName, setItemName] = useState('');
  const [code, setCode] = useState(null);
  const [err, setError] = useState(false);
  const [dishFor, setDishFor] = useState('');
  const [cal, setCal] = useState(null);
  const exact = moment().weekday();

  const todayData = totalData && totalData.filter(it => it.currDay === currDay);
  const breakData =
    todayData && todayData.filter(it => it.dishFor === lan.break);
  const dinnerData =
    todayData && todayData.filter(it => it.dishFor === lan.dinner);
  const lunchData =
    todayData && todayData.filter(it => it.dishFor === lan.lunch);
  const calData = todayData && todayData.map(it => it.cal).map(Number);
  const totalCal = calData && calData.reduce((a, b) => a + b, 0) / 4000;

  const updateList = () => {
    if (itemName.trim().length !== 0 && cal !== null && code !== null) {
      const obj = {
        currDay,
        itemName,
        code,
        cal,
        dishFor,
        time: moment().unix(),
      };
      dispatch(wpActions.saveData(obj));
      setItemName('');
      setCal(null);
      setError('');
      setCode(null);
      actionSheetRef.current?.setModalVisible();
    } else {
      setError(!err);
    }
  };

  const removeItem = ids => {
    dispatch(wpActions.removeItem(ids));
  };

  const num =
    currDay === 1
      ? lan.Monday
      : currDay === 2
      ? lan.Tuesday
      : currDay === 3
      ? lan.Wednesday
      : currDay === 4
      ? lan.Thursday
      : currDay === 5
      ? lan.Friday
      : currDay === 6
      ? lan.Saturday
      : lan.Sunday;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={[styles.row, styles.btw]}>
          <Text style={styles.lg}>
            {lan.hi} {name},
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <Text style={styles.lg}>Settings</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.md}>
            {lan.foodPlan} {num}
          </Text>
        </View>
      </View>
      {totalCal !== 0 ? (
        <View style={{marginBottom: 20}}>
          <View
            style={[
              styles.row,
              styles.btw,
              {margin: 10, alignSelf: 'center', width: '90%'},
            ]}>
            <Text style={styles.sm}>Total Calories Gained</Text>
            <Text style={styles.sm}>{(totalCal * 4000).toFixed(0)}</Text>
          </View>
          <Progress.Bar
            progress={totalCal}
            width={300}
            color={totalCal > 0.8 ? 'red' : totalCal > 0.6 ? 'orange' : '#0c9'}
            style={styles.ctr}
            borderRadius={60}
            height={10}
          />
        </View>
      ) : null}
      <ScrollView contentContainerStyle={{paddingBottom: 200}}>
        <View style={styles.single}>
          <Card
            show={breakData.length < 2}
            title={lan.break}
            onPress={() => {
              setDishFor(lan.break);
              actionSheetRef.current?.setModalVisible();
            }}
          />
          {breakData.length !== 0
            ? breakData.map(it => (
                <FoodList
                  keys={it.time}
                  it={it}
                  remove={() => removeItem(it.time)}
                  bg={it.code === 0 ? '#0c9' : 'red'}
                />
              ))
            : null}
        </View>
        <View style={styles.single}>
          <Card
            show={lunchData.length < 2}
            title={lan.lunch}
            onPress={() => {
              setDishFor(lan.lunch);
              actionSheetRef.current?.setModalVisible();
            }}
          />
          {lunchData.length !== 0
            ? lunchData.map(it => (
                <FoodList
                  keys={it.time}
                  it={it}
                  remove={() => removeItem(it.time)}
                  bg={it.code === 0 ? '#0c9' : 'red'}
                />
              ))
            : null}
        </View>
        <View style={styles.single}>
          <Card
            show={dinnerData.length < 2}
            title={lan.dinner}
            onPress={() => {
              setDishFor(lan.dinner);
              actionSheetRef.current?.setModalVisible();
            }}
          />
          {dinnerData.length !== 0
            ? dinnerData.map(it => (
                <FoodList
                  keys={it.time}
                  it={it}
                  remove={() => removeItem(it.time)}
                  bg={it.code === 0 ? '#0c9' : 'red'}
                  cal={it.cal}
                />
              ))
            : null}
        </View>
        {todayData.length === 0 ? (
          <Text style={[styles.md, {paddingTop: 100, paddingHorizontal: 20}]}>
            Welcome to Daily Meal Planning Application. Press the Add item
            button which will prompt you to add dish name and average calorie to
            check the calorie consumed through out the day.You can at most add
            two items in the meal chart for breakfast,lunch and dinner
            respectively.
          </Text>
        ) : null}
      </ScrollView>

      <View style={styles.abs}>
        {Days.map(it => (
          <TouchableOpacity
            key={it.id}
            onPress={() => setCurrDay(it.id)}
            style={[
              styles.day,
              {
                backgroundColor:
                  it.id === currDay
                    ? '#0c9'
                    : it.id === exact
                    ? colors.dark
                    : colors.bg,
              },
            ]}>
            <Text style={styles.dayText}>{it.abbr}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <ActionSheet ref={actionSheetRef} defaultOverlayOpacity={0.75}>
        <View style={styles.ov}>
          <View style={styles.p}>
            <Text style={styles.md}>Dish Name </Text>
            <TextInput
              onChangeText={text => {
                setItemName(text);
                setError(false);
              }}
              value={itemName}
              style={[styles.input, styles.p]}
              maxLength={16}
            />
            <View style={[styles.row, styles.btw]}>
              <Text style={[styles.md, {marginTop: 10}]}>Average Calorie </Text>
              <TextInput
                onChangeText={text => {
                  setCal(text);
                  setError(false);
                }}
                value={cal}
                style={[
                  styles.input,
                  {width: 100, textAlign: 'right', marginTop: 20},
                ]}
                keyboardType="phone-pad"
                maxLength={3}
              />
            </View>

            <View style={{marginTop: 20}}>
              <View style={[styles.row, styles.btw]}>
                <Text style={styles.md}>Veg</Text>
                <TouchableOpacity
                  style={[
                    styles.circle,
                    {borderColor: code === 0 ? '#0c9' : colors.grey},
                  ]}
                  onPress={() => setCode(0)}
                />
              </View>
              <View style={[styles.row, styles.btw, {marginTop: 20}]}>
                <Text style={styles.md}>Non-Veg</Text>
                <TouchableOpacity
                  style={[
                    styles.circle,
                    {borderColor: code === 1 ? 'tomato' : colors.grey},
                  ]}
                  onPress={() => setCode(1)}
                />
              </View>
            </View>
            {err ? (
              <Text style={styles.error}>All fields are required.</Text>
            ) : null}
          </View>
          <Btn title="Submit" onPress={() => updateList()} />
        </View>
      </ActionSheet>
    </SafeAreaView>
  );
}
