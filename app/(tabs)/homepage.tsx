import { Href, useRouter } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function HomePage() {
  const router = useRouter();

  const games = [
    { 
      title: 'Azur Lane',
      description: '2D Side Scrolling',
      page: '/azurlane' as Href,
    },
    { 
      title: 'Genshin Impact',
      description: '3D Open World',
      page: '/genshinimpact' as Href,
    },
    { 
      title: 'Honkai Impact 3rd',
      description: '3D Beat`m Up',
      page: '/honkaiimpact3' as Href,
    },
    { 
      title: 'Umamusume Pretty Derby',
      description: '3D Horse Racing',
      page: '/umamusumeprettyderby' as Href,
    },
  ]

  return (
    <View>
      <Text>Homepage</Text>

      <ScrollView>
        {games.map((game, index) => (
          <TouchableOpacity key={index} onPress={() => router.push(game.page)} >
            <Text>{game.title}</Text>
            <Text>{game.description}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}