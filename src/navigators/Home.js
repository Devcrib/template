import React, { Component } from 'react'; 
import { View, Text } from 'react-native'; 
import { Button } from '../components';
import { styles } from '../styles'

class Home extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up 'src/navigators/Home.js' to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text>To add a new navigation item simply create a new file.</Text>
        <Text>Export the created file and include it in 'src/navigators/index.js'</Text>
        <Button title='Custom Button :)' onPress={() => Alert.alert('Yay!')} />
      </View>
    );
  }

}

export default Home;