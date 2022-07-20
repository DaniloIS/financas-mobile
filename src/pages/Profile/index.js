import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../../contexts/auth';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';

import styles from './styles';

const Profile = () => {
  const navigation = useNavigation();
  const { user, signOut } = useContext(AuthContext);

  return (
    <View style={styles.background}>
      <Header />
      <View style={styles.container}>
        
        <Text style={styles.text}>{user && user.name}</Text>
        <Button label='Registar gastos' color='#fff' onClick={() => navigation.navigate('Register')} />
        <Button label='Sair' color='#fff' bgColor='#c62c36' onClick={() => signOut()} />
      </View>
    </View>
  )
}

export { Profile };