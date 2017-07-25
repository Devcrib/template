import React, { Component } from 'react'; 
import { View, Text } from 'react-native'; 
import { Button } from '../components';
import { styles } from '../styles'

class Home extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Button title="Custom Button" onPress={() => Alert.alert('It worked!')} />
      </View>
    );
  }

}

export default Home;