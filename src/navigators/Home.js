import React, { Component } from 'react'; 
import { View, Text } from 'react-native'; 
import { Button } from '../components';
import { styles } from '../styles'

class Home extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>
          <Button title="Custom Button" 
              onPress={() => Alert.alert('Yay! It worked!')} />
        </Text>
      </View>
    );
  }

}

export default Home;