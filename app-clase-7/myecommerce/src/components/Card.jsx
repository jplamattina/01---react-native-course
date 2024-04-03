import { StyleSheet, View } from 'react-native'
import { colors } from '../constants/colors'
import React from 'react'

const Card = ({children, style}) => {
  return (
    <View style = {{...styles.container, ...style}}>
      {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.teal400,
        width: 200,
        height: 40,
        shadowColor: "#000",
        shadowOffset:{
        width: 0,
        height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        marginBottom: 10,
        marginTop:10,
    }
})