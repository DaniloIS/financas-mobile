import { StyleSheet } from 'react-native';
import styled from 'styled-components';
import { View } from 'react-native';

export default StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#131313'
  },

  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 20,
    gap: 20
  }
})

export const Container = styled.View`
  alignItems: 'center';
  marginHorizontal: 20;
  gap: 20;
`