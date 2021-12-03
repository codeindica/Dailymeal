import {Platform, StyleSheet} from 'react-native';
import {colors} from './colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    position: 'relative',
  },
  // Type CSS
  icon: {
    fontSize: 150,
    textAlign: 'center',
  },
  iconText: {
    fontSize: 100,
  },
  lg: {
    fontFamily: 'Poppins-Black',
    fontSize: 20,
    color: colors.dark,
    textTransform: 'capitalize',
  },
  md: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: colors.dark,
  },
  sm: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  },
  white: {
    color: colors.white,
  },
  caps: {
    textTransform: 'uppercase',
  },
  ctr: {
    textAlign: 'center',
    alignSelf: 'center',
  },
  // Flex CSS
  row: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  btw: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  end: {
    justifyContent: 'flex-end',
    textAlign: 'right',
  },
  ard: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  // Margin and Padding CSS
  p: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  // content css
  logoImg: {
    width: 300,
    height: 150,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  input: {
    backgroundColor: colors.grey,
    fontSize: 20,
    padding: 10,
    borderRadius: 4,
    marginVertical: 10,
    color: colors.dark,
  },
  ov: {
    height: '95%',
    width: '100%',
    paddingVertical: 20,
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  header: {
    padding: 20,
    backgroundColor: colors.white,
  },
  abs: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 30 : 10,
    left: 0,
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'center',
    justifyContent: 'center',
    paddingVertical: 2,
    backgroundColor: colors.white,
  },
  day: {
    width: 35,
    height: 35,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
  },
  dayText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: 'Roboto-Black',
    textAlign: 'center',
  },
  circle: {
    width: 25,
    height: 25,
    borderRadius: 20,
    borderWidth: 8,
  },
  veg: {
    width: 12,
    height: 12,
    borderRadius: 10,
    marginRight: 10,
  },
  error: {
    fontSize: 15,
    paddingVertical: 10,
    color: 'red',
    marginTop: 20,
    fontFamily: 'Poppins-Black',
  },
  listItem: {
    padding: 10,
    paddingBottom: 0,
    width: '96%',
    backgroundColor: '#fff',
  },
  single: {
    paddingHorizontal: 10,
    width: '100%',
    alignSelf: 'center',
    borderRadius: 4,
    marginVertical: 10,
  },
});
