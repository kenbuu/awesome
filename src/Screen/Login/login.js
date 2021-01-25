/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import action from '../../Redux/Action/action';

const screen = Dimensions.get('window');

const App = (props) => {
  const dispatch=useDispatch();
  const countReducer = useSelector((state)=>state.CountReducer);
  const [abc, setAbc] = useState({
    a: 1,
    b: 2
  });
  console.log('countReducer', countReducer);
  return (
    <View
      style={
        {
          backgroundColor: 'white',
          height: '100%'
        }
      }
    >
      <View
        style={
          {
            backgroundColor: 'red',
            height: '40%'
          }
        }
      />
      <View
        style={
          {
            height: '75%',
            width: screen.width - 32,
            backgroundColor: 'tan',
            position: 'absolute',
            left: 16,
            top: 130,
            borderRadius: 18,
          }
        }
      >
        <ImageBackground
          imageStyle={
            {
              backgroundColor: 'blue',
              height: 150,
              width: screen.width - 32,
              borderTopLeftRadius: 18,
              borderTopRightRadius: 18,
            }
          }
          style=
          {
            {
              width: screen.width - 32,
              height: 150,
            }
          }

          source={{ uri: "https://hicksartgallery.com/wp-content/uploads/2020/02/gai-xonh-toc-ngan-1.jpg" }}>
          <Text
            style=
            {
              {
                textAlign: 'center',
                width: screen.width - 32,
                fontSize: 30,
                marginTop: 100,
              }
            }
          >Welcome to TTOS111111111</Text>
        </ImageBackground>
        <View style={{ display: 'flex', flexDirection: 'column', marginLeft: 10, marginRight: 10, marginTop: '40%', alignItems: "center" }}>
          <TextInput
            style={{ height: 50, width: "100%", borderColor: 'gray', borderWidth: 1, borderRadius: 10, marginBottom: 10 }}
            onChangeText={text => setAbc({
              ...abc,
              a: text,
            })}
            placeholder={"Tài khoản"}
          // value={value}
          />
          <TextInput
            style={{ height: 50, width: "100%", borderColor: 'gray', borderWidth: 1, borderRadius: 10 }}
            onChangeText={text => setAbc({
              ...abc,
              b: text
            })}
            placeholder={"Mật khẩu"}
          // value={value}
          />

          <TouchableOpacity
            style={{
              backgroundColor: "wheat",
              width: "20%",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 10,
              borderRadius: 4,
              paddingVertical: 12
            }}
            onPress={() => {
              // props.navigation.navigate("Home")
              dispatch({
                type: action.LOGIN,
                a: abc.a,
                b: abc.b,
              })
            }}>
            <Text>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
