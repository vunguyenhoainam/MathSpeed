import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  StatusBar,
} from 'react-native';

console.disableYellowBox = true;

export default Home = ({navigation, user, maxScore}) => {
  return (
    <ImageBackground
      style={{width: '100%', height: '100%'}}
      resizeMode="stretch"
      source={require('../assets/images/background.jpg')}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{flex: 1}}>
        <View style={{width: '100%', height: '100%'}}>
          {/* User and Score */}
          <View
            style={{
              marginTop: 20,
              marginHorizontal: 20,
              padding: 10,
              borderColor: '#fff',
              borderWidth: 2,
              borderRadius: 10,
              overflow: 'hidden',
            }}>
            <View>
              <Text style={styles.textUser}>User : {user}</Text>
            </View>
            <View>
              <Text style={styles.textUserScore}>Score : {maxScore}</Text>
            </View>
          </View>

          {/* Intro */}
          <View style={styles.intro}>
            <Text style={styles.textIntro}>Math Speed</Text>
          </View>

          {/* Button List */}
          <View style={styles.body}>
            <View>
              <TouchableHighlight
                style={styles.buttonStart}
                onPress={() => {
                  navigation.navigate('Play');
                }}>
                <Text style={styles.textButton}> START NOW ! </Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={styles.buttonStart}
                onPress={() => {
                  navigation.navigate('Rank');
                }}>
                <Text style={styles.textButton}> RANK </Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={styles.buttonStart}
                onPress={() => {
                  navigation.navigate('Introduction');
                }}>
                <Text style={styles.textButton}> INTRODUCTION </Text>
              </TouchableHighlight>
            </View>
          </View>
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
  digitStyle: {
    backgroundColor: '#ff4500',
    borderRadius: 150 / 2,
    width: 60,
    height: 60,
  },
  intro: {
    width: '100%',
    marginTop: 90,
  },
  textIntro: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 55,
    fontWeight: 'bold',
    textShadowColor: '#ff0000',
    textShadowOffset: {width: 5, height: 5},
    textShadowRadius: 15,
  },

  textUser: {
    textAlign: 'left',
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    textShadowColor: '#ff0000',
    textShadowOffset: {width: 5, height: 5},
    textShadowRadius: 15,
  },

  textUserScore: {
    flexDirection: 'column',
    textAlign: 'left',
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    textShadowColor: '#ff0000',
    textShadowOffset: {width: 5, height: 5},
    textShadowRadius: 15,
  },

  content: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 50,
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: {width: 5, height: 5},
    textShadowRadius: 15,
  },

  buttonStart: {
    backgroundColor: '#f86086',
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
    fontSize: 20,
    color: '#ffffff',
    textAlign: 'center',
  },
});
