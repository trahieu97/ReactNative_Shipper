import React from 'react';
import { Text, View, Button } from 'react-native';
import Languages from '../Languages';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      language: 'vi',
    };
  }

  _onSetLanguage() {
    this.state.language = this.state.language === 'en' ? 'vi' : 'en';
    this.setState(this.state);
    Languages.setLanguage(this.state.language);
  }
  
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* other code from before here */}
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Button
          title={this.state.language}
          onPress={() => this._onSetLanguage()}
        />
        <Text>{Languages.home} Screen!</Text>
      </View>
    );
  }
}