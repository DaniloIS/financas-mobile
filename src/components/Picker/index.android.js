import React from 'react';
import { View } from 'react-native';
import { Picker as PickerSelect } from '@react-native-picker/picker';

import styles from './styles';

const Picker = ({ onChange, type }) => {
  return (
    <View style={{width: '100%'}}>
      <PickerSelect
        style={styles.picker}
        selectedValue={type}
        onValueChange={onChange}
      >
        <PickerSelect.Item label='Selecione...' value={null} />
        <PickerSelect.Item label='Receita' value='receita' />
        <PickerSelect.Item label='Despesa' value='despesa' />
      </PickerSelect>
    </View>
  )
}

export { Picker };