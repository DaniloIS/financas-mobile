import React, { useState, useContext } from 'react';
import { Alert, Keyboard, SafeAreaView, TouchableWithoutFeedback, View } from 'react-native';
import { format } from 'date-fns';
import { useNavigation } from '@react-navigation/native';

import firebase from '../../services/firebaseConnection';
import { AuthContext } from '../../contexts/auth';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Picker } from '../../components/Picker/index.android';

import styles, { Container } from './styles';

const Register = () => {
  const navigation = useNavigation();

  const [form, setForm] = useState({
    value: '',
    type: ''
  });

  const { user: userLogged } = useContext(AuthContext)

  function handleSubmit() {
    Keyboard.dismiss();

    if(isNaN(parseFloat(form.value)) || !form.type) {
      alert('Preencha todos os campos!');
      return
    }

    Alert.alert(
      'Confirmando dados',
      'Tipo ' + form.type + ' - Valor: ' + parseFloat(form.value),
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Continuar',
          onPress: () => handleAdd()
        }
      ]
    )
  }

  async function handleAdd() {
    let uid = userLogged.uid;

    let key = await firebase.database().ref('historic').child(uid).push().key;
    await firebase.database().ref('historic').child(uid).child(key).set({
      type: form.type,
      value: parseFloat(form.value),
      date: format(new Date(), 'dd/MM/yyyy')
    })

    let user = firebase.database().ref('users').child(uid);

    await user.once('value').then(snapshot => {
      let saldo = parseFloat(snapshot.val().saldo);

      form.type === 'despesa' ? saldo -= parseFloat(form.value) : saldo += parseFloat(form.value);

      user.child('saldo').set(saldo)
    })

    Keyboard.dismiss();
    setForm({ ...form, value: ''});
    navigation.navigate('Home');
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={styles.background}>
      <Header />

      <Container style={styles.container}>
        <Input placeholder='Valor desejado' bgColor='rgba(255,255,255,0.9)' type='numeric' color='#222' value={form.value} onChange={e => setForm({ ...form, value: e })} />
        <Picker onChange={value => setForm({ ...form, type: value})} type={form.type} />
        <Button label='Registrar' onClick={handleSubmit} />
      </Container>
    </View>
    </TouchableWithoutFeedback>
  )
}

export { Register };
