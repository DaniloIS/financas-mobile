import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';

import styles from './styles';

import { Feather } from '@expo/vector-icons'; 

const HistoricList = ({ data, deleteItem }) => {
  return (
    <TouchableWithoutFeedback onLongPress={() => deleteItem(data)}>
    <View style={styles.container}>
      <View style={styles.type}>
        <View style={[styles.iconView, {backgroundColor: data.type === 'despesa' ? '#c62c36' : '#049301'}]}>
          <Feather
            name={data.type === 'despesa' ? "arrow-down" : "arrow-up"}
            size={30}
            color="#fff"
          />
          <Text style={styles.textType}>{data.type}</Text>
        </View>
      </View>
      <Text style={styles.textValue}>RS {data.value}</Text>
    </View>
    </TouchableWithoutFeedback>
  )
}

export { HistoricList };