import React, { useContext, useState, useEffect } from 'react';
import { View, Text, FlatList, Alert, TouchableOpacity } from 'react-native';
import { format, isBefore } from 'date-fns';

import firebase from '../../services/firebaseConnection';
import { AuthContext } from '../../contexts/auth';

import { Header } from '../../components/Header';
import { HistoricList } from '../../components/HistoricList';
import { DatePicker } from '../../components/DatePicker';

import styles from './styles';
import { Feather } from '@expo/vector-icons';

const Home = () => {
  const [historic, setHistoric] = useState([]);
  const [saldo, setSaldo] = useState(0);

  const { user } = useContext(AuthContext);
  const uid = user && user.uid;

  const [newDate, setNewDate] = useState(new Date);
  const [show, setShow] = useState(false);

  useEffect(() => {
    async function loadList() {
      await firebase.database().ref('users').child(uid).on('value', snapshot => {
        setSaldo(snapshot.val().saldo);
      })

      await firebase.database().ref('historic').child(uid).orderByChild('date').equalTo(format(new Date, 'dd/MM/yyyy')).limitToLast(10).on('value', snapshot => {
        setHistoric([]);
        
        snapshot.forEach(childItem => {
          let list = {
            key: childItem.key,
            type: childItem.val().type,
            value: childItem.val().value,
            date: childItem.val().date
          };
          console.log(list)
          setHistoric(oldHistoric => [...oldHistoric, list].reverse());
        })
      })
    }

    loadList();
  }, [])

  function handleDelete(data) {
    const [diaItem, mesItem, anoItem] = data.date.split('/');
    const dateItem = new Date(`${anoItem}/${mesItem}/${diaItem}`)

    const formatDiaHoje = format(new Date(), 'dd/MM/yyyy');
    const [diaHoje, mesHoje, anoHoje] = formatDiaHoje.split('/');
    const dateHoje = new Date(`${anoHoje}/${mesHoje}/${diaHoje}`)

    if(isBefore(dateItem, dateHoje)) {
      alert('Você não pode excluir um registro antigo!')
      return
    }

    Alert.alert(
      'Cuidado Atenção',
      `Você deseja excluir ${data.type} - Valor ${data.value}`,
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Continuar',
          onPress: () => handleDeleteSuccess(data)
        }
      ]
    )
  }

  async function handleDeleteSuccess(data) {
    await firebase.database().ref('historic').child(uid).child(data.key).remove()
    .then( async () => {
      let saldoAtual = saldo;
      data.type === 'despesa' ? saldoAtual += parseFloat(data.saldo) : saldoAtual -= parseFloat(data.saldo);

      await firebase.database().ref('users').child(uid).child('saldo').set(saldoAtual);
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <View style={styles.background}>
      <Header />
      <View style={styles.container}>
        <Text style={styles.textName}>{user.name}</Text>
        <Text style={styles.saldo}>R$ {saldo.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</Text>
        <View style={styles.area}>
          <TouchableOpacity onPress={() => setShow(true)}><Feather name="calendar" color='#fff' size={30} /></TouchableOpacity>
          <Text style={styles.title}>Ultimas movimentações</Text>
        </View>

        <FlatList
          showsVerticalScrollIndicator={false}
          style={styles.list}
          data={historic}
          keyExtractor={item => item.key}
          renderItem={({item}) => <HistoricList data={item} deleteItem={handleDelete} />}
        />
        {show && <DatePicker />}
      </View>
    </View>
  )
}

export { Home };