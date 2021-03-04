import React from 'react'
import { View, Text } from 'react-native'
import styles from '../Style/styles'

function ShowStatus(status) {
    if (status.data === "Alive") {
        return (
        <View style={styles.statusAlive}>
          <View ></View>
        </View>
        
      )
    } else if (status.data === "Dead") {
        return (
          <View style={styles.statusDead}>
          <View ></View>
        </View>
      )
    } else {
        return (
          <View style={styles.statusUnknown}>
          <View ></View>
        </View>
      )
    }
}
export default ShowStatus;
