import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { ClerkProvider, ClerkLoaded, SignedIn, SignedOut } from "@clerk/clerk-expo"
import  LoginScreen from "../components/LoginScreen"


  export default function RootLayout() {
    useFonts({
      'playwrite': require('./../assets/fonts/playwrite/PlaywriteCU-Regular.ttf')
    });
    return (
      <ClerkProvider publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>

        <SignedIn>
        <Stack screenOptions={{
            headerShown: false 
        }}>
            <Stack.Screen name="(tabs)"/>
        </Stack>
        </SignedIn>
         
        <SignedOut>
           <LoginScreen/>
        </SignedOut>

      </ClerkProvider>
        ); 
  } 