import React from 'react'
import { View, Text } from 'react-native'
import styles from '../Style/styles'

function ShowStatus(status) {
    if (status.data === "Alive") {
        return (
            <View>
          <Text style={styles.statusAlive}></Text>
        </View>
      )
    } else if (status.data === "Dead") {
        return (
            <View>
          <Text style={styles.statusDead}></Text>
        </View>
      )
    } else {
        return (
            <View>
          <Text style={styles.statusUnknown}></Text>
        </View>
      )
    }
}
export default ShowStatus;
