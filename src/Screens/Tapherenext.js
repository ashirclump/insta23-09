import {StylesContext} from '@material-ui/styles';
import React , {useState} from 'react';
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
<<<<<<< HEAD
  Dimensions,
  ScrollView
=======
>>>>>>> 9989bb335f2492d40437cc39dc8e321f3276ad96
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Screen from '../Components/Screen';
import Clipboard from '@react-native-clipboard/clipboard';


const Tapherenext = ({navigation}) => {
  const [num, setNum] = useState(0); 

const [courseName, setCourseName] = useState ("")
const onChangName = (value) => {
  setCourseName(value)
}
<<<<<<< HEAD
const win = Dimensions.get('window');
const copyIt = ()=> Clipboard.setString(courseName)
  return (
    <SafeAreaView style={{height:win.height,width:win.width}}>
    <ScrollView>
    <View style={{height:win.height,width:win.width}}>
    <LinearGradient colors={['#DDCEFF', '#F8DFF0']} style={{flex: 1}}>

=======

const copyIt = ()=> Clipboard.setString(courseName)
  return (
    <SafeAreaView>
    <LinearGradient colors={['#DDCEFF', '#F8DFF0']} style={{flex: 1}}>
      <View>
>>>>>>> 9989bb335f2492d40437cc39dc8e321f3276ad96
        <View style={{top: 5, height: 58, borderWidth: 1, borderColor:'rgba(255, 255, 255, 0.32)'}}>
          <TouchableOpacity onPress={() => navigation.push('Tapherebio')}>
            <Image
              source={require('../../assets/Images/greater.png')}
              style={{top: 20, left: 15}}
            />
          </TouchableOpacity>

          <Text
            style={{
              position: 'absolute',
              alignSelf: 'center',
              fontSize: 24,
              fontFamily: 'poppins',
              top: 10,
              fontWeight: '200',
              fontStyle: 'normal',
              color: 'black',
            }}>
            Tap Hear Bio
          </Text>
        </View>

        <View
          style={{
            top: 15,
            height: 115,
            borderWidth: 1,
            borderColor:'rgba(255, 255, 255, 0.32)',
            borderRadius: 12,
            width: 370,
            left: 8,
          }}>
          <Screen bg='white'/>

          <Text
            style={{
              left: 110,
              top: 0,
              fontWeight: 'bold',
              position: 'absolute',
            }}>
            Amit Giri
          </Text>
          <Text style={{left: 110, top: 20, position: 'absolute'}}>
            @vijay_rathore
          </Text>
          <View
            style={{
              // top: 60,
              left: 110,
              borderColor:'rgba(255, 255, 255, 0.32)',
              flexDirection:'row'
            }}>
            <TextInput
              placeholder="taphere.bio/amitgiri"
              placeholderTextColor="black"
              onChangeText={onChangName}
              value = {courseName}
              style={{
                position: 'absolute',
                height: 31,
               padding:2,
                width: 250,
                borderWidth: 2,
                backgroundColor: 'rgba(255, 255, 255, 0.54)',
                borderColor: 'rgba(255, 255, 255, 0.32)',
                borderRadius: 11,
                position: 'absolute',
                bottom: 28,
              }}
              
            ></TextInput>
            
<TouchableOpacity onPress={copyIt}
// onPress={() => Clipboard.setString({courseName})}
>
<View>
<Image
source={require('../../assets/Images/copy2.png')}
style={{
  height: 15,
  width: 15,
 
left:230,
  bottom: 38,
 
}}
/>
</View>
</TouchableOpacity>
            

            
          </View>
        </View>
        <View
          style={{
            top: 15,
            height: 45,
            borderWidth: 2,
            left: 12,
            top: 30,
            borderRadius: 9,
            borderColor:'rgba(255, 255, 255, 0.32)',
            width: 360,
          }}>
          <TextInput placeholder="Title" />
        </View>
        <View
          style={{
            height: 82,
            borderWidth: 2,
            left: 12,
            top: 50,
            borderRadius: 9,
            width: 360,
            borderColor:'rgba(255, 255, 255, 0.32)',
          }}>
          <TextInput placeholder="Description" />
        </View>
        <View
          style={{
<<<<<<< HEAD
            height: 150,
=======
            height: 180,
>>>>>>> 9989bb335f2492d40437cc39dc8e321f3276ad96
            borderWidth: 2,
            left: 12,
            top: 70,
            borderRadius: 9,
            width: 360,
            borderColor:'rgba(255, 255, 255, 0.32)',
          }}>
<<<<<<< HEAD
          <TouchableOpacity style={{ alignSelf: 'center',}}>
=======
          <TouchableOpacity style={{ alignSelf: 'center', top: 30}}>
>>>>>>> 9989bb335f2492d40437cc39dc8e321f3276ad96
            <Image
              source={require('../../assets/Images/imagepicker.png')}
              style={{ alignSelf: 'center', top: 30}}
            />
<<<<<<< HEAD
            
=======
            <Screen title=" Tap to upload image"  />
>>>>>>> 9989bb335f2492d40437cc39dc8e321f3276ad96
          </TouchableOpacity>
          
            
              
           
          
        </View>
<<<<<<< HEAD
        
        <View style={{alignSelf: 'center',marginTop:'30%'}}>
        <Text style={{fontSize:15,color:'black',alignSelf:'center'}}> Follow us on</Text>
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
         
        <TouchableOpacity>
=======

        <View style={{top: 150, alignSelf: 'center'}}>
          <Text>Follow us On</Text>
        </View>
        <View style={{flexDirection: 'row', alignSelf: 'center', top: 160}}>
          <TouchableOpacity>
>>>>>>> 9989bb335f2492d40437cc39dc8e321f3276ad96
            <Image
              source={require('../../assets/Images/yt2.png')}
              style={{left: -20}}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../assets/Images/moj.png')}
              style={{left: -5}}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../assets/Images/fb.png')}
              style={{left: 10}}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../assets/Images/insta.png')}
              style={{left: 20}}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                left: 37,
                height: 47,
                width: 50,
                borderRadius: 100,
                backgroundColor: '#808080',
                borderColor: 'white',
              }}>
              <Text style={{color: 'white', top: 12, left: 3}}>Others</Text>
            </View>
          </TouchableOpacity>
        </View>
<<<<<<< HEAD
        </View>

        
        
 
        <TouchableOpacity  style={{
          marginTop:"5%",
          height: "6%",
          width: "50%",
          alignSelf: 'center',
          borderRadius: 15,
          backgroundColor: '#3672E9',
        }}>
          
=======

        <TouchableOpacity>
          <View
            style={{
              top: 230,
              height: 45,
              width: 200,
              alignSelf: 'center',
              borderRadius: 15,
              backgroundColor: '#3672E9',
            }}>
>>>>>>> 9989bb335f2492d40437cc39dc8e321f3276ad96
            <Text
              style={{
                fontSize: 20,
                alignSelf: 'center',
                top: 10,
                color: 'white',
              }}>
              Publish
            </Text>
<<<<<<< HEAD
      
        </TouchableOpacity>
      
    </LinearGradient>
    </View>
    </ScrollView>
=======
          </View>
        </TouchableOpacity>
      </View>
    </LinearGradient>
>>>>>>> 9989bb335f2492d40437cc39dc8e321f3276ad96
    </SafeAreaView>
  );
};
export default Tapherenext;
