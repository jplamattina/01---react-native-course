import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { colors } from '../constants/colors'
import CategoryItem from '../components/CategoryItem'
import categories from '../data/categories.json'

const Home = () => {
  return (
    <View style = {styles.flatListContainer}>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item}
        data = {categories.sort()}
        renderItem = {({item}) => <CategoryItem category={item}/>}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  flatListContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.teal900,
    flexDirection: 'column',
    justiifyContent: 'center',
    alignItems: 'center',
    //overflow: 'hidden',
  }
})