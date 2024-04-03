import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../constants/colors'
import React from 'react'

const Header = ({title}) => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.text}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 50,
        backgroundColor: colors.teal400,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: colors.teal900,
    }

})