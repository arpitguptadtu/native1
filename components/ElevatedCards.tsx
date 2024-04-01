import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card , styles.cardElevated]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card , styles.cardElevated]}>
            <Text>me</Text>
        </View>
        <View style={[styles.card , styles.cardElevated]}>
            <Text>to</Text>
        </View>
        <View style={[styles.card , styles.cardElevated]}>
            <Text>scroll</Text>
        </View>
        <View style={[styles.card , styles.cardElevated]}>
            <Text>through</Text>
        </View>
        <View style={[styles.card , styles.cardElevated]}>
            <Text>XD</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8
    },
    container:{
        flex:1,
        flexDirection:'row',
        padding:8
    },
    card:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:100,
        height:100,
        borderRadius:4,
        margin:8,
        color:'#000000'
    },
    cardElevated:{
        backgroundColor:'#CAD5E2',
        elevation:4,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor:'#333',
        shadowOpacity:0.4,
        shadowRadius:2
    }
})