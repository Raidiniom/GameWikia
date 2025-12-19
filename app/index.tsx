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
    <View>
      <Text >Welcome to GameWikia</Text>

      <View>
        <TextInput 
          placeholder="Username"

          value={username}
          onChangeText={setUsername}
        />
        
        <TextInput 
          placeholder="Password"

          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity onPress={handleLogin}>
          <Text>Login</Text>
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
