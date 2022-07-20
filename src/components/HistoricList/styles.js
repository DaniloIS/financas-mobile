import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    marginBottom: 5,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.02'
  },

  type: {
    flexDirection: 'row'
  },

  iconView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#049301',
    paddingBottom: 3,
    paddingTop: 3,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 7
  },

  textType: {
    color: '#fff',
    fontSize: 16,
    fontStyle: 'italic'
  },

  textValue: {
    color: '#222',
    fontSize: 22,
    fontWeight: 'bold'
  }
})