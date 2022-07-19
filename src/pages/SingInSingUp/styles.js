import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    width: '100%',
    height: 50,
    borderBottomWidth: 3,
    color: '#fff',
    borderBottomColor: '#00b94a',
    backgroundColor: '#131313'
  },

  btnBack: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  container: {
    flex: 1,
    backgroundColor: '#131313',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
    gap: 20
  },

  logo: {
    width: 75,
    height: 75
  },

  button: {
    color: '#fff'
  }
})