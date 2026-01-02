import { HomeStyle } from "@/styles/screens/homestyle";
import { Href, useRouter } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import GameBar from "../components/gamebar";

export default function HomePage() {
  const router = useRouter();

  const games = [
    {
      title: 'Azur Lane',
      description: '2D side-scrolling naval shooter featuring anime shipgirls, fleet building, and real-time combat.',
      page: '/azurlane' as Href,
    },
    {
      title: 'Genshin Impact',
      description: '3D open-world action RPG with elemental combat, exploration, and a story-driven fantasy world.',
      page: '/genshinimpact' as Href,
    },
    {
      title: 'Honkai Impact 3rd',
      description: '3D fast-paced action game with hack-and-slash combat, cinematic battles, and character-driven story.',
      page: '/honkaiimpact3' as Href,
    },
    {
      title: 'Umamusume Pretty Derby',
      description: '3D character-training and horse racing simulation focused on strategy, growth, and live races.',
      page: '/umamusumeprettyderby' as Href,
    },
    {
      title: 'Honkai: Star Rail',
      description: 'Turn-based 3D RPG with sci-fi fantasy setting and strategic combat.',
      page: '/honkaistarrail' as Href,
    },
    {
      title: 'Blue Archive',
      description: '2.5D tactical RPG featuring schoolgirls, squad combat, and story-driven missions.',
      page: '/bluearchive' as Href,
    },
    {
      title: 'Arknights',
      description: '2D tower defense game with strategic placement and dark sci-fi storytelling.',
      page: '/arknights' as Href,
    },
  ]

  return (
    <View style={HomeStyle.bodyContainer}>
      <Text style={HomeStyle.headerText}>Game Wiki</Text>
      <Text style={HomeStyle.sectionLabel}>Select a game to explore</Text>

      <ScrollView
        style={HomeStyle.scrollContainer}
        contentContainerStyle={{ gap: 10 }}
        showsVerticalScrollIndicator={false}
      >
        {games.map((game, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => router.push(game.page)}
            activeOpacity={0.85}
          >
            <GameBar
              title={game.title}
              description={game.description}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}