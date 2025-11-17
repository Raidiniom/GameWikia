import { Colors, GlobalStyles, UIStyles } from "@/styles/theme";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

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
      router.push('/pages/homepage')
    }
  }

  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.titleText}>Welcome to GameWikia</Text>

      <View style={UIStyles.container}>
        <TextInput 
          style={UIStyles.textInput}
          placeholder="Username"
          placeholderTextColor={Colors.mutedText}

          value={username}
          onChangeText={setUsername}
        />
        
        <TextInput 
          style={UIStyles.textInput}
          placeholder="Password"
          placeholderTextColor={Colors.mutedText}

          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity style={UIStyles.loginButton} onPress={handleLogin}>
          <Text style={UIStyles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        {msg ? (
          <Text style={{
              color: msg === 'Login Successfully' ? 'green' : 'red',
              marginTop: 10,
              textAlign: 'center',}}>{msg}</Text>
        ) : null}
        
      </View>
    </View>

  );
}
