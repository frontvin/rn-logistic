import React from "react";
import {View, Text, StyleSheet, ScrollView, SafeAreaView, Dimensions} from "react-native";
import {Search} from "../../components/Search";
import {Divider} from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';
import {Paragraph, List, Title, Avatar} from "react-native-paper";
import {Constants} from "expo/build/globals.web";
import { SliderBox } from 'react-native-image-slider-box';
import MapComponent from "../../components/Geolocation";
import {Header} from "../../components/Header";

export const Page2: React.FC<any> = ({navigation, geolocation}) => {
  const images = [
      "https://source.unsplash.com/1024x768/?nature",
      "https://source.unsplash.com/1024x768/?water",
      "https://source.unsplash.com/1024x768/?girl",
      "https://source.unsplash.com/1024x768/?tree"
  ];

  return (
      <SafeAreaView style={styles.container} >
          <View>
              <Header />
              {/*<Header*/}
              {/*    placement="left"*/}
              {/*    leftComponent={{ icon: 'menu', size: 35, color: '#fff', onPress: () => navigation.openDrawer() }}*/}
              {/*    centerComponent={<Search />}*/}
              {/*    containerStyle={{*/}
              {/*        backgroundColor: '#3D6DCC',*/}
              {/*        justifyContent: 'space-around',*/}
              {/*        paddingTop: 0,*/}
              {/*        margin:0,*/}
              {/*        height:60*/}
              {/*    }}*/}
              {/*/>*/}
              <ScrollView style={{flex: 1, paddingBottom: Dimensions.get('window').height - Constants.statusBarHeight-80}}>
                  <View style={{flexDirection: "column"}}>
                      <View style={{flexDirection: "row"}}>
                          <View style={{padding: 20, width: "60%",}}>
                              <View>
                                  <View style={{flexDirection: 'row', justifyContent: "space-between", paddingBottom: 20}}>
                                      <View>
                                          <Text style={{fontSize: 16, fontWeight: "bold"}}>KN Airfreight Center</Text>
                                          <Text style={{fontSize: 16, color: "#3D6DCC", fontWeight: "bold"}}>Munich (MUC)</Text>
                                      </View>
                                      <View style={{alignSelf: "center"}}>
                                          <Icon name={"star"} color={"#3D6DCC"} size={24}></Icon>
                                      </View>
                                  </View>

                                  <View style={{paddingBottom: 15}}>
                                      <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Paragraph>
                                  </View>
                              </View>

                              <View style={{paddingBottom: 15}}>
                                  <Text style={{fontWeight: "bold", paddingBottom: 5}}>Unique Selling Points</Text>
                                  <View style={{backgroundColor: "#F9F9F7"}}>
                                      <List.Item
                                          title="First Item"
                                          description="Item description"
                                          left={props => <List.Icon {...props} icon="check" color={"#3D6DCC"}/>}
                                      />
                                      <Divider style={styles.divider} />
                                      <List.Item
                                          title="Second Item"
                                          description="Item description"
                                          left={props => <List.Icon {...props} icon="check" color={"#3D6DCC"}/>}
                                      />
                                      <Divider style={styles.divider} />
                                      <List.Item
                                          title="Third Item"
                                          description="Item description"
                                          left={props => <List.Icon {...props} icon="check" color={"#3D6DCC"}/>}
                                      />
                                  </View>
                              </View>

                              <View style={{paddingBottom: 15}}>
                                  <Text style={{fontWeight: "bold", paddingBottom: 5}}>Services</Text>
                                  <View style={{backgroundColor: "#F9F9F7"}}>
                                      <Paragraph style={{padding: 10}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Paragraph>
                                  </View>
                              </View>

                              <View style={{paddingBottom: 15}}>
                                  <Text style={{fontWeight: "bold", paddingBottom: 5}}>Business Hours</Text>
                                  <View style={{backgroundColor: "#F9F9F7"}}>
                                      <Paragraph style={{padding: 10}}>Mo - Fr: 8.00 - 17:00h</Paragraph>
                                  </View>
                              </View>
                          </View>

                          <View style={{width: "40%", backgroundColor: "#F5F5EF"}}>
                              <SliderBox
                                  images={images}
                                  sliderBoxHeight={200}
                                  dotColor="#FFEE58"
                                  nactiveDotColor="#90A4AE"
                                  paginationBoxVerticalPadding={20}
                                  autoplay
                                  circleLoop
                              />

                              <View
                                  style={{
                                      flexDirection: "row",
                                      alignItems: "center",
                                      justifyContent: "space-around",
                                      paddingTop: 10,
                                      paddingBottom: 10,
                                      margin: 10,
                                      borderBottomColor: "#000",
                                      borderTopWidth: 1,
                                      borderBottomWidth: 1

                                  }}>
                                  <Paragraph>Suedalee 8, 85452 Munich, Germany</Paragraph>
                                  <Icon name={"globe"} color={"#3D6DCC"} size={24}></Icon>
                              </View>

                              <View style={{paddingHorizontal: 10}}>
                                  <View style={{flexDirection: "row", paddingBottom: 20}}>
                                      <View>
                                          <Avatar.Image size={90} source={require('../../../assets/47.jpg')} />
                                      </View>
                                      <View style={{paddingHorizontal: 10}}>
                                          <Text>John Smith</Text>
                                          <Text>Head of Operation</Text>
                                          <Text>+38 89 - 1545 02 48</Text>
                                          <Text>johnsmith@gmail.com</Text>
                                      </View>
                                  </View>
                                  <View style={{flexDirection: "row"}}>
                                      <View>
                                          <Avatar.Image size={90} source={require('../../../assets/47.jpg')} />
                                      </View>
                                      <View style={{paddingHorizontal: 10}}>
                                          <Text>John Smith</Text>
                                          <Text>Head of Operation</Text>
                                          <Text>+38 89 - 1545 02 48</Text>
                                          <Text>johnsmith@gmail.com</Text>
                                      </View>
                                  </View>
                              </View>

                          </View>
                      </View>

                      <View>
                          <MapComponent />
                      </View>
                  </View>

              </ScrollView>
          </View>
      </SafeAreaView>
  )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    divider: {
        backgroundColor: 'grey',
        marginLeft: 10,
        marginRight: 10
    },
});
