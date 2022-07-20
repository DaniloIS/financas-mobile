import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#131313'
  },
  
  container: {
    flex: 1,
    paddingHorizontal: 15,
    gap: 20
  },

  textName: {
    fontSize: 18,
    color: '#fff',
    fontStyle: 'italic'
  },

  saldo: {
    marginTop: 5,
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold'
  },

  title: {
    color: '#00b94a'
  },

  list: {
    paddingTop: 15,
    backgroundColor: '#fff',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },

  area: {
    flexDirection: 'row',
    alignItems: 'baseline'
  }
})