import { supabase } from "@/lib/supabase";
import { IndexStyle } from "@/styles/indexstyle";
import { Colors } from "@/styles/theme";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";


export default function Index() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')

  const router = useRouter()

  const handleLogin = async () => {
    if (!email || !password) {
      setMsg('All fields are required!')
    }
    
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password
    })

    if (error) {
        if (error.code === 'email_not_confirmed') {
            setMsg('Please confirm your email before logging in.')
        } else {
            setMsg(error.message)
        }
        
        return
    }

        setMsg('Login successful')
        router.push('/homepage')
  }

  const goToRegister = () => {
    router.push('/register')
  }

  return (
    <View style={IndexStyle.bodyContainer} >
      <View style={IndexStyle.loginForm} >
        <Text style={IndexStyle.welcomeText} >Welcome to GameWikia</Text>

        <TextInput style={IndexStyle.userInput}
          placeholder="gamewikireader@email.com"
          placeholderTextColor={`${Colors.vanilla_custard}80`}
          value={email}
          onChangeText={setEmail}
        />
        
        <TextInput style={IndexStyle.userInput}
          placeholder="12345678"
          placeholderTextColor={`${Colors.vanilla_custard}80`}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Pressable 
          onPress={handleLogin}
          style={({ pressed }) => [
            IndexStyle.loginButton, pressed && IndexStyle.loginButtonPressed
          ]} >

          <Text style={IndexStyle.loginText} >Login</Text>
        </Pressable>

        <Pressable 
          onPress={goToRegister}
          style={({ pressed }) => [
            { 
              padding: 10,
              marginTop: 10,
              opacity: pressed ? 0.7 : 1
            }
          ]}
        >
          <Text style={{ 
            color: Colors.vanilla_custard,
            textAlign: 'center',
            textDecorationLine: 'underline'
          }}>
            Don't have an Account? Sign Up Now!
          </Text>
        </Pressable>

        {msg ? (
          <Text
            style={[
              IndexStyle.messageText,
              msg === 'Login Successfully'
                ? IndexStyle.successText
                : IndexStyle.errorText,
            ]}
          >
            {msg}
          </Text>
        ) : null}
        
      </View>
    </View>

  );
}
