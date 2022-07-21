import React, { useState, createContext, useEffect } from 'react';
import firebase from '../services/firebaseConnection';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [loadingAuth, setLoadingAuth] = useState(false);

  useEffect(() => {
    async function loadStorage() {
      const storageUser = await AsyncStorage.getItem('Auth_user');

      if(storageUser) {
        console.log(JSON.parse(storageUser))
        setUser(JSON.parse(storageUser));
        setLoading(false);
      }

      setLoading(false);
    }

    loadStorage();
  }, [])

  async function signIn(email, password) {
    setLoadingAuth(true);
    await firebase.auth().signInWithEmailAndPassword(email, password)
    .then(async (res) => {
      console.log(res)
      let uid = res.user.uid;
      await firebase.database().ref('users').child(uid).once('value')
      .then(snapshot => {
        console.log('snapshot',snapshot)
        let data = {
          uid: uid,
          name: snapshot.val().name,
          email: res.user.email
        }

        setUser(data);
        storageUser(data);
        setLoadingAuth(false);
      })
    })
    .catch(err => {
      alert(err.code);
      setLoadingAuth(false);
    })
  }

  async function signUp(email, password, name) {
    setLoadingAuth(true);
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(async (res) => {
      let uid = res.user.uid;
      await firebase.database().ref('users').child(uid).set({
        saldo: 0,
        name: name
      })
      .then(() => {
        console.log(uid)
        let data = {
          uid: uid,
          name: name,
          email: res.user.email
        }
        setUser(data);
        storageUser(data);
        setLoadingAuth(false);
      })
    })
    .catch(err => {
      alert(err.code);
      setLoadingAuth(false);
    })
  }

  async function storageUser(data) {
    await AsyncStorage.setItem('Auth_user', JSON.stringify(data));
  }

  async function signOut() {
    await firebase.auth().signOut();
    await AsyncStorage.clear()
    .then(() => {
      setUser(null);
    })
  }

  return(
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signUp, signOut, loading, loadingAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider };