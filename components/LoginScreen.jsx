import { View, Text, StyleSheet, Image, Touchable, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { userWarmUpBrowser } from '../hooks/userWarmUpBrowser';
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from '@clerk/clerk-expo';

WebBrowser.maybeCompleteAuthSession();
export default function LoginScreen () {
    userWarmUpBrowser();
    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google"});
    const onPress = React.useCallback(async () => {
        try {
            const { createdSessionId, signIn, signUp, setActive } =
            await startOAuthFlow();

            if (createdSessionId) {
                setActive({ session: createdSessionId });
            } else {

            }
        } catch(error) {
         console.error("OAuth error",error);
        }
    }, []);
  return (
    
    <View>
        <ScrollView>
        
        <View style= {{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 100
        }}> 

        <Image source={require('../assets/images/dudububu.png')}
            style = {{
                width: 400 ,
                height: 500,
                borderRadius: 20,
                borderWidth: 6,
                borderColor: '#000'
            }}
        />

        </View>

        <View style={styles.subContainer}>
            <Text style= {{
                fontSize: 25,
                fontFamily: 'playwrite',
                textAlign: 'center'
            }}>
                Your Ultimate 
                <Text style={{
                    color:Colors.PrimaryColor
                }}> Community Business Directory
                </Text>
            </Text>
            <Text style={{
                fontSize: 15,
                fontFamily: 'playwrite',
                textAlign: 'center',
                marginVertical: 15,
                color: Colors.GRAY
            }}>Find you favorite business near your and post your own business to your community
            </Text>    

            <TouchableOpacity style={styles.btn}
            onPress={ onPress }
            >
                <Text style={{
                    textAlign: 'center',
                    color: '#ffff'
                }}>Let's get started</Text>
            </TouchableOpacity>

        </View>
        </ScrollView>
    </View>
  ) 
}
const styles = StyleSheet.create({
    subContainer:{
        backgroundColor:'#ffff',
        padding: 20,
        marginTop: -20
    },
    btn: {
        backgroundColor: Colors.PrimaryColor,
        padding: 16,
        borderRadius: 99
    }
 })
