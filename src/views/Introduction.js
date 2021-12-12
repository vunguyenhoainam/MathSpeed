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

export default Introduction = ({navigation}) => {
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
                fontSize: 16,
              }}>
              ▸{' '}
              <Text style={{fontWeight: 'bold', fontSize: 20}}>Math Speed</Text>{' '}
              là một trò chơi trí não rất đơn giản mà lại vô cùng hiệu quả.
              {'\n'}▸ Giúp bạn học toán và có thể rèn luyện được tư duy phản xạ
              với những con số.
              {'\n'}▸ Hãy cố gắng dành được nhiều điểm nhất trước khi thời gian
              kết thúc để lọt top nhé.
              {'\n'}▸ Ứng dụng hiện đang trong quá trình phát triển, rất mong
              nhận được sự ủng hộ cũng như góp ý của các bạn để ứng dụng trở lên
              ngày một tốt hơn (❁´◡`❁)
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
