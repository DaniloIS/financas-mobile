import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import { Feather } from '@expo/vector-icons'; 

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback style={styles.btn} onPress={() => navigation.toggleDrawer()}>
        <Feather name="menu" size={30} color="#fff" />
      </TouchableWithoutFeedback>
    </View>
  )
}

export { Header };