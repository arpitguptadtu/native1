import { StyleSheet, Text, View, Linking } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink:string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>actionCard</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{}
})