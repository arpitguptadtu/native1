import React from 'react';

import {
View,
SafeAreaView,
ScrollView
} from 'react-native'
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';
function App(){
 return (
 <SafeAreaView>
  <ScrollView>
  <FlatCards /> 
  <View>

  <ElevatedCards/>
  </View>
  <FancyCard/>
  <ContactList/>
  <ActionCard/>
  </ScrollView>
 </SafeAreaView>
 )
}

export default App;