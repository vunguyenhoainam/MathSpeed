import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableHighlight,
} from 'react-native';

console.disableYellowBox = true;

export default Rank = ({navigation}) => {
  return (
    <ImageBackground
      style={{width: '100%', height: '100%'}}
      resizeMode="stretch"
      source={require('../assets/images/background.jpg')}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{flex: 1}}>
        <View style={{width: '100%', height: '100%', paddingVertical: 30}}>
          {/* Content Introduction */}
          <View
            style={{
              paddingHorizontal: 30,
            }}>
            <Text
              style={{
                paddingVertical: 15,
                paddingHorizontal: 15,
                borderRadius: 10,
                backgroundColor: '#f86086',
                borderColor: '#fff',
                borderWidth: 3,
                color: '#fff',
                fontSize: 18,
              }}>
              Phần bảng xếp hạng hiện vẫn đang trong quá trình phát triển, mời
              bạn quay lại sau...
            </Text>
          </View>
          {/* Buttons Back Home */}
          <View
            style={{
              width: '100%',
              height: '20%',
              alignItems: 'center',
            }}>
            <TouchableHighlight
              onPress={() => {
                navigation.goBack('Home');
              }}
              style={{
                width: 200,
                marginTop: 30,
                paddingTop: 5,
                paddingBottom: 5,
                paddingHorizontal: 10,
                backgroundColor: '#f86086',
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 1,
                shadowColor: '#000',
                shadowOpacity: 0.34,
                shadowRadius: 6.27,
                elevation: 10,
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 24,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                Back Home
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
