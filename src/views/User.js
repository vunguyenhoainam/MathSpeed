import React, {useState} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  StatusBar,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

console.disableYellowBox = true;

export default Home = ({navigation, setUser}) => {
  const [handleUser, setHandleUser] = useState('');
  return (
    <ImageBackground
      style={{width: '100%', height: '100%'}}
      resizeMode="stretch"
      source={require('../assets/images/background.jpg')}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{flex: 1}}>
        <View style={{width: '100%', height: '100%'}}>
          {/* User */}
          <View
            style={{
              width: '100%',
              height: '40%',
              marginTop: '40%',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: '80%',
                height: 45,
                flexDirection: 'column',
                alignItems: 'flex-start',
                marginTop: 40,
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 22,
                  fontWeight: 'bold',
                  textShadowColor: '#ff0000',
                  textShadowOffset: {width: 5, height: 5},
                  textShadowRadius: 15,
                }}>
                Username:{' '}
              </Text>
              <TextInput
                style={{
                  width: '100%',
                  height: '100%',
                  marginTop: 10,
                  borderColor: 'gray',
                  borderWidth: 1,
                  borderRadius: 5,
                  fontSize: 18,
                  color: 'gray',
                  paddingHorizontal: 20,
                  backgroundColor: '#fff',
                  shadowColor: '#000',
                  shadowOpacity: 0.34,
                  shadowRadius: 6.27,
                  elevation: 10,
                }}
                // secureTextEntry={true}
                onChangeText={txt => setHandleUser(txt)}
              />
            </View>
          </View>

          {/* Button Next */}
          {handleUser !== '' ? (
            <View style={styles.body}>
              <View>
                <TouchableHighlight
                  style={styles.buttonStart}
                  onPress={() => {
                    setUser(handleUser);
                    navigation.navigate('Home');
                  }}>
                  <Text style={styles.textButton}> NEXT </Text>
                </TouchableHighlight>
              </View>
            </View>
          ) : (
            <></>
          )}
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  body: {
    width: '100%',
    alignItems: 'center',
    marginTop: 50,
  },

  buttonStart: {
    backgroundColor: 'green',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },

  textButton: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#ffffff',
    textAlign: 'center',
  },
});
