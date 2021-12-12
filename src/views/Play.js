import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableHighlight,
  StatusBar,
} from 'react-native';

import CountDown from 'react-native-countdown-component';

console.disableYellowBox = true;

export default Play = ({navigation, maxScore, setMaxScore}) => {
  const [statusQuiz, setStatusQuiz] = useState({
    isStart: true,
    content: '',
  });
  const [point, setPoint] = useState(0);
  const [a, setA] = useState(randomNumber(0, 10));
  const [b, setB] = useState(randomNumber(0, 10));
  const [result, setResult] = useState();

  function randomNumber(start, end) {
    return Math.floor(Math.random() * (end - start) + start);
  }

  function handleResult() {
    const isTrue = randomNumber(0, 2);
    return isTrue === 0 ? a + b : randomNumber(0, 3) * (a + b);
  }

  useEffect(() => {
    setResult(handleResult());
  }, [point]);

  function pressAnswer(type) {
    setA(randomNumber(1, 10));
    setB(randomNumber(1, 10));
    const isTrue = a + b === result;
    if ((type === 'wrong' && isTrue) || (type === 'right' && !isTrue)) {
      if (point > maxScore) {
        setMaxScore(point);
      }
      setStatusQuiz({
        isStart: false,
        content: 'Sai rồi ! Click vào đây để chơi lại bạn nhé',
      });
      return;
    }
    if ((type === 'wrong' && !isTrue) || (type === 'right' && isTrue)) {
      return setPoint(point + 1);
    }
  }

  function pressStart() {
    setStatusQuiz({
      isStart: true,
      content: '',
    });
    if (point > maxScore) {
      setMaxScore(point);
    }
    setPoint(0);
  }

  return (
    <ImageBackground
      style={{width: '100%', height: '100%'}}
      resizeMode="stretch"
      source={require('../assets/images/background.jpg')}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{flex: 1}}>
        <View style={{width: '100%', height: '100%'}}>
          <View style={styles.header}>
            <Text style={styles.point}>
              {' '}
              Score : {point} / {maxScore}
            </Text>
            <Text style={styles.time}>Time : 30s</Text>
          </View>

          {statusQuiz.isStart ? (
            <SafeAreaView>
              <CountDown
                until={30}
                size={30}
                onFinish={() => {
                  if (point > maxScore) {
                    setMaxScore(point);
                  }
                  setStatusQuiz({
                    isStart: false,
                    content: 'Hết giờ ! Click vào đây để chơi lại bạn nhé',
                  });
                }}
                onPress={() =>
                  alert('Sau khoảng thời gian này màn chơi sẽ kết thúc')
                }
                digitStyle={styles.digitStyle}
                digitTxtStyle={{
                  color: '#ffffff',
                  textAlign: 'center',
                }}
                timeToShow={['S']}
                timeLabels={{s: ''}}
              />
            </SafeAreaView>
          ) : (
            <></>
          )}

          <View style={styles.body}>
            {statusQuiz.isStart ? (
              <Text style={styles.content}>
                {a} + {b} = {result} ?
              </Text>
            ) : (
              <View>
                <TouchableHighlight
                  style={styles.buttonStart}
                  onPress={() => pressStart()}>
                  <Text style={styles.textButton}> {statusQuiz.content} </Text>
                </TouchableHighlight>
              </View>
            )}
          </View>

          {statusQuiz.isStart ? (
            <View style={styles.footer}>
              <TouchableHighlight
                style={[styles.buttonLeft, styles.buttonFooter]}
                onPress={() => pressAnswer('right')}>
                <Text style={styles.textButton}> ĐÚNG </Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={[styles.buttonRight, styles.buttonFooter]}
                onPress={() => pressAnswer('wrong')}>
                <Text style={styles.textButton}> SAI </Text>
              </TouchableHighlight>
            </View>
          ) : (
            <View style={styles.footer}>
              {!statusQuiz.isStart ? (
                <TouchableHighlight
                  style={styles.wrapperBtnHome}
                  onPress={() => {
                    if (point > maxScore) {
                      setMaxScore(point);
                    }
                    navigation.goBack('Home');
                  }}>
                  <Text style={[styles.buttonHome, styles.textButton]}>
                    Back Home
                  </Text>
                </TouchableHighlight>
              ) : (
                <></>
              )}
            </View>
          )}
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 35,
    paddingHorizontal: 20,
  },
  point: {
    width: windowWidth / 2 - 30,
    paddingVertical: 10,
    paddingHorizontal: 10,
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#ffffff',
    textShadowColor: '#000',
    textShadowOffset: {width: 5, height: 5},
    textShadowRadius: 15,
  },
  time: {
    width: windowWidth / 2 - 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#ff4500',
    textShadowColor: '#000',
    textShadowOffset: {width: 5, height: 5},
    textShadowRadius: 15,
  },
  body: {
    width: windowWidth,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  digitStyle: {
    backgroundColor: '#ff4500',
    borderRadius: 150 / 2,
    width: 60,
    height: 60,
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
  footer: {
    width: windowWidth,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  buttonFooter: {
    width: windowWidth / 2 - 30,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 3,
    borderStyle: 'dotted',
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  buttonLeft: {
    backgroundColor: '#029911',
  },
  buttonRight: {
    backgroundColor: '#ff4500',
  },
  wrapperBtnHome: {
    width: '100%',
  },
  buttonHome: {
    flexDirection: 'column',
    width: '100%',
    paddingVertical: 10,
    textAlign: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#fff',
    backgroundColor: '#22dfbf',

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
