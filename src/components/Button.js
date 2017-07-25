import React, { Component } from 'react'; 
import { TouchableNativeFeedback, Platform, View, Text } from 'react-native'; 
import { styles } from '../styles';

class Button extends Component {

  render() {
    return (
      <TouchableNativeFeedback
          onPress={this.props.onPress}
          background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{ this.props.title }</Text>
        </View>
      </TouchableNativeFeedback>
    );
  }

}

export default Button;