import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending places</Text>
      <View style={[styles.card,styles.elevatedCard]}>
      <Image
      source={{
        uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg/1920px-East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg'
      }}
      style={styles.cardImage}
      />
      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>Hawa Mahal</Text>
        <Text style={styles.cardLabel}>Pink City,jaipur</Text>
        <Text style={styles.cardDescription}>
        Hawa Mahal: Iconic pink sandstone palace with lattice windows, Jaipur, India.</Text>
        <Text style={styles.cardFooter}>12 mins away</Text>
      </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8
    },
    card:{
        width:350,
        height:360,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:16
    },
    elevatedCard:{
        backgroundColor:'#FFFFFF',
        elevation:3,
        shadowOffset:{
            height:1,
            width:1
        }
    },
    cardImage:{
        height:180,
        marginBottom:8,
        borderTopLeftRadius:6,
        borderTopRightRadius:6
    },
    cardBody:{
        
        flex:1,
        flexGrow:1,
    },
    cardTitle:{
        // color:'#FFFFFF',
        fontSize:22,
        fontWeight:'bold',
        marginBottom:4
    },
    cardLabel:{
        // color:'#FFFFFF'
        fontSize:14,
        marginBottom:6,
    },
    cardDescription:{
        color:'#242B2E',
        fontSize:12,
        marginBottom:12,
        marginTop:6,
        flexShrink:1
    },
    cardFooter:{
        // color:'#FFFFFF'
    }
})