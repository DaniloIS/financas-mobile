import React, { useContext, useState } from 'react';
import { View, Image, TouchableOpacity, Text, Platform, ActivityIndicator } from 'react-native';

import { AuthContext } from '../../contexts/auth';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import styles from './styles';

import { Feather } from '@expo/vector-icons'; 

import Logo from '../../assets/Logo.png';

const SingInSingUp = () => {
  const [mode, setMode] = useState('singin');
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  });

  const { signIn, signUp, loadingAuth } = useContext(AuthContext);

  function handlesignIn() {
    signIn(form.email, form.password)
  }

  function handleSingUp() {
    signUp(form.email, form.password, form.name)
  }

  return (
    <View style={{flex: 1}}>
      {mode === 'singup' &&
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setMode('singin')} style={styles.btnBack}>
            <Feather name="arrow-left" size={24} color="#fff" style={{marginLeft: 10}} />
            <Text style={{color: '#fff', marginLeft: 10, fontWeight: 'bold'}}>Voltar</Text>
          </TouchableOpacity>
        </View>
      }
      <View style={styles.container} behavior={Platform.OS === 'ios' && 'padding'} enabled>
        <Image source={Logo} style={styles.logo} />
        {mode === 'singup' &&
          <Input placeholder='Nome' value={form.name} onChange={e => setForm({ ...form, name: e})} />
        }
        <Input placeholder='E-mail' value={form.email} onChange={e => setForm({ ...form, email: e})} />
        <Input placeholder='Senha' value={form.password} onChange={e => setForm({ ...form, password: e})} password />
        {mode === 'singin' ? 
        
          <>
            {loadingAuth ? <ActivityIndicator size={20} color='#fff' /> : 
              <Button label='Accessar' onClick={handlesignIn} />
            }
            <TouchableOpacity
                onPress={() => setMode(mode === 'singin' ? 'singup' : 'singin')}
                style={styles.button}
            >
              <Text style={{color: '#fff'}}>Criar uma conta!</Text>
            </TouchableOpacity>
          </>
            :
          <>
            {loadingAuth ? <ActivityIndicator size={20} color='#fff' /> : 
              <Button label='Cadastra' onClick={handleSingUp} />
            }
          </>
        }
        
      </View>
    </View>
  )
}

export { SingInSingUp };