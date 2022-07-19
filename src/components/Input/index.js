import React from 'react';
import { View, TextInput, Text } from 'react-native';

import styles from './styles';

const Input = ({label, placeholder, value, bgColor = 'rgba(0,0,0,20)', color = 'rgba(255,255,255,0,20)', onChange, type = 'default', inputRef, size = ['100%', 36] }) => {
  return (
    <>
      {label && <Text style={[styles.label, { color: color }]}>{label}</Text>}
      <TextInput style={[styles.input, { backgroundColor: bgColor, color: color , width: size[0], height: size[1] }]} ref={inputRef} placeholder={placeholder} value={value} onChangeText={onChange} keyboardType={type} />
    </>
  )
}

export { Input };