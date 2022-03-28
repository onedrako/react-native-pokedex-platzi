import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { map, capitalize } from 'lodash'

const Stats = (props) => {
  const { stats } = props

  const barStyles = (statNumber) => {
    return {
      backgroundColor: statNumber > 50 ? '#54e254' : '#ff0000',
      width: `${statNumber}%`
    }
  }

  return (
    <View style={styles.content}>
      <Text style={styles.title} >Base Stats</Text>
      {map(stats, (item, index) => (
        <View key={index} style={styles.block}>
          <View style={styles.blockTitle}>
            <Text style={styles.statName}>{capitalize(item.stat.name)}</Text>
          </View>
          <View style={styles.blockInfo} >
            <Text style={styles.number} >{item.base_stat}</Text>
            <View style={styles.bgBar}>
              <View style={[styles.bar, barStyles(item.base_stat)]} />
            </View>
          </View>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    marginTop: 40,
    marginBottom: 80
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 5
  },
  block: {
    flexDirection: 'row',
    paddingVertical: 5
  },
  blockTitle: {
    width: '40%'
  },
  statName: {
    fontSize: 12,
    color: '#6B6B6B'
  },
  blockInfo: {
    width: '60%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  number: {
    width: '12%',
    fontSize: 12
  },
  bgBar: {
    backgroundColor: '#DEDEDE',
    width: '88%',
    height: 5,
    borderRadius: 20,
    overflow: 'hidden'
  },
  bar: {
    height: 5,
    borderRadius: 20
  }
})

export { Stats }
