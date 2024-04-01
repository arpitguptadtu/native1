import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
            uid: 1,
            name: 'Anurag Saxena',
            status: 'Making your joints smooth',
            imageUrl: 'https://avatars.githubusercontent.com/u/29447452?v=4',
        },
        {
            uid: 2,
            name: 'Sanskarrr',
            status: 'Making your thinking smooth',
            imageUrl: 'https://avatars.githubusercontent.com/u/29747352?v=4',
        },
        {
            uid: 3,
            name: 'Sanket Singh',
            status: 'Making your GPay smooth',
            imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
        }
    ]
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView
      style={styles.container}
      scrollEnabled={false}
      >
        {contacts.map(({uid,name,status,imageUrl})=>(
            <View key={uid} style={styles.userCard}>
                <Image
                source={{
                    uri:imageUrl
                }}
                style={styles.userImage}
                />
                <View>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userStatus}>{status}</Text>
                </View>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8
      },
    container:{
        paddingHorizontal:16,
        marginBottom:4
    },
    userCard:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:3,
        backgroundColor:'#f2dfea',
        padding:4,
        borderRadius:14
    },
    userImage:{
        width:60,
        height:60,
        borderRadius:60/2,
        marginRight:14
    },
    userName:{
        fontSize:16,
        fontWeight:'600',
       
    },
    userStatus:{
        fontSize:12
    }
})