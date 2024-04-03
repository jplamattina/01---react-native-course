import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../constants/colors'
import Card from './Card'
import React from 'react'

const CategoryItem = ({category}) => {
  return (
    <Card style = {{backgroundColor: colors.teal400, borderRadius: 5}}>
       <Text style = {styles.text}>{category}</Text>
    </Card>

  )
}

export default CategoryItem

const styles = StyleSheet.create({
    text: {
        color: colors.teal900,
        textAlign: 'center',
        fontSize: 20,

    }
})