import React from 'react';
import { View, Text, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import SearchBar from './src/Components/SearchBar';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: '#F6F5EF',
          flex: 1,
        }}
      >
        <View
          style={{
            backgroundColor: 'teal',
            height: '20%',
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            paddingHorizontal: 20,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 25,
              width: '100%',
            }}
          >
            <Animatable.View
              animation="fadeInLeft"
              duration={1000}
              style={{ width: '50%' }}
            >
              <Text
                style={{
                  fontSize: 28,
                  color: '#FFF',
                  fontWeight: 'bold',
                }}
              >
                What's Your Favourite Place ?{' '}
              </Text>
            </Animatable.View>
            <View style={{ width: '50%', alignItems: 'flex-end' }}>
              <Image
                source={require('./images/w2.jpg')}
                style={{
                  height: 60,
                  width: 60,
                  borderRadius: 30,
                }}
              />
            </View>
          </View>
        </View>
        <SearchBar />
        <Animatable.View
          animation="fadeInLeft"
          duration={1000}
          style={{
            flexDirection: 'row',
            paddingHorizontal: 20,
            width: '100%',
            alignItems: 'center',
            marginTop: 15,
          }}
        >
          <View style={{ width: '50%' }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 17,
                color: '#585a61',
              }}
            >
              Recommended Tours
            </Text>
          </View>
          <View style={{ width: '50%', alignItems: 'flex-end' }}>
            <View
              style={{
                backgroundColor: '#00a46c',
                paddingHorizontal: 20,
                paddingVertical: 5,
                borderRadius: 15,
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate('TourScreens')}
              >
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 13,
                    color: '#FFF',
                  }}
                >
                  More
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Animatable.View>
        <Animatable.View
          animation="fadeInLeft"
          duration={1000}
          style={{ marginRight: 10 }}
        >
          <ScrollView
            // upper part pics
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ height: 400, width: '100%' }}
          >
            <LinearGradient
              colors={['rgba(0,164,109,0.09)', 'transparent']}
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                height: 100,
                marginTop: 220,
                top: 0,
              }}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate('DetailsScreenLahore')}
              style={{
                height: 250,
                elevation: 2,
                backgroundColor: '#FFF',
                marginLeft: 20,
                marginTop: 20,
                borderRadius: 15,
                marginBottom: 10,
                width: 160,
              }}
            >
              <Image
                style={{ height: 180, width: 160, overflow: 'hidden' }}
                source={require('./images/fort.jpg')}
              />
              <View
                style={{
                  flexDirection: 'row',
                  paddingTop: 10,
                  paddingHorizontal: 10,
                }}
              >
                <Text
                  style={{
                    fontWeight: 'bold',
                  }}
                >
                  Lahore{' '}
                </Text>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: '#00a46c',
                    paddingLeft: 50,
                  }}
                >
                  $400
                </Text>
              </View>
              <Text
                style={{
                  paddingHorizontal: 10,
                  fontWeight: 'bold',
                  color: '#b1e5d3',
                  paddingTop: 3,
                }}
              >
                Pakistan
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </Animatable.View>
        <Animatable.View
          animation="fadeInLeft"
          duration={1000}
          style={{
            flexDirection: 'row',
            paddingHorizontal: 20,
            width: '100%',
            alignItems: 'center',
            marginTop: -80,
          }}
        >
          <View style={{ width: '50%' }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 17,
                color: '#585a61',
              }}
            >
              Featured Hotels
            </Text>
          </View>
          <View style={{ width: '50%', alignItems: 'flex-end' }}>
            <View
              style={{
                backgroundColor: '#00a46c',
                paddingHorizontal: 20,
                paddingVertical: 5,
                borderRadius: 15,
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate('HotelsScreens')}
              >
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 13,
                    color: '#FFF',
                  }}
                >
                  More
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Animatable.View>
        <Animatable.View
          animation="fadeInLeft"
          duration={1000}
          style={{ height: 300, marginRight: 10 }}
        >
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginBottom: -100 }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate('DetailsScreenLahore')}
            >
              <Image
                source={require('./images/minar.jpeg')}
                style={{
                  marginTop: 20,
                  borderRadius: 10,
                  height: 200,
                  marginHorizontal: 20,
                }}
              />
            </TouchableOpacity>
          </ScrollView>
        </Animatable.View>
      </View>
    </ScrollView>
  );
};
export default HomeScreen;
