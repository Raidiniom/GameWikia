import { IndexStyle } from "@/styles/indexstyle";
import { Colors } from "@/styles/theme";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";


export default function Index() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('');

  const router = useRouter();

  const handleMsg = (success: boolean) => {
    if (success) {
      setMsg('Login Successfully')
    } else {
      setMsg('Ivalid Credentials')
    }
  }

  const handleLogin = () => {
    const success = username === 'Admin' && password === 'Admin'
    handleMsg(success)

    if (success) {
      router.push('/homepage')
    }
  }

  return (
    <View style={IndexStyle.bodyContainer} >
      <View style={IndexStyle.loginForm} >
        <Text style={IndexStyle.welcomeText} >Welcome to GameWikia</Text>

        <TextInput style={IndexStyle.userInput}
          placeholder="gamewikireader"
          placeholderTextColor={`${Colors.vanilla_custard}80`}
          value={username}
          onChangeText={setUsername}
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
