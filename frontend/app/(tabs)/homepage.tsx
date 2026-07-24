import { HomeStyle } from "@/styles/screens/homestyle";
import { Href, useRouter } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import GameBar from "../components/gamebar";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";

export default function HomePage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good morning,');
    else if (hour < 18) setGreeting('Good afternoon,');
    else setGreeting('Good evening,');

    supabase.auth.getUser().then(({ data, error }) => {
      if (error) {
        console.warn('Failed to fetch user:', error.message);
        return;
      }

      const name = data?.user?.user_metadata?.username;
      // const name = 'testing123';
      if (name) setUsername(name);
    });
  }, []);

  const avatarInitial = username ? username[0].toUpperCase() : '?';

  const games = [
    {
      image: require('@/assets/images/game_icon/azur_lane.jpg'),
      title: 'Azur Lane',
      description: 'Naval shooter · Fleet building',
      page: '/azurlane' as Href,
      badge: '',
    },
    {
      image: require('@/assets/images/game_icon/genshin_impact.jpg'),
      title: 'Genshin Impact',
      description: 'Open-world RPG · Elemental combat',
      page: '/genshinimpact' as Href,
    },
    {
      image: require('@/assets/images/game_icon/honkai_impact_3rd.jpg'),
      title: 'Honkai Impact 3rd',
      description: 'Action · Hack-and-slash combat',
      page: '/honkaiimpact3' as Href,
    },
    {
      image: require('@/assets/images/game_icon/honkai_star_rail.jpg'),
      title: 'Honkai: Star Rail',
      description: 'Turn-based · Sci-fi fantasy',
      page: '/honkaistarrail' as Href,
    },
    {
      image: require('@/assets/images/game_icon/umamusume_pretty_derby.png'),
      title: 'Umamusume Pretty Derby',
      description: 'Training sim · Horse racing',
      page: '/umamusumeprettyderby' as Href,
    },
    {
      image: require('@/assets/images/game_icon/blue_archive.jpg'),
      title: 'Blue Archive',
      description: 'Tactical RPG · Squad combat',
      page: '/bluearchive' as Href,
    },
    {
      image: require('@/assets/images/game_icon/arknights.png'),
      title: 'Arknights',
      description: 'Tower defense · Sci-fi storytelling',
      page: '/arknights' as Href,
    },
  ];

  return (
    <View style={HomeStyle.bodyContainer}>

      {/* Header */}
      <View style={HomeStyle.headerRow}>
        <View>
          <Text style={HomeStyle.greeting}>{greeting} {username}</Text>
          <Text style={HomeStyle.headerText}>Game Wiki</Text>
        </View>
        <View style={HomeStyle.avatar}>
          <Text style={HomeStyle.avatarText}>{avatarInitial}</Text>
        </View>
      </View>

      {/* Search bar (visual only — wire up if needed) */}
      <View style={HomeStyle.searchBar}>
        <Ionicons name="search-outline" size={16} color="#4a9985" />
        <Text style={HomeStyle.searchText}>Search games…</Text>
      </View>

      <Text style={HomeStyle.sectionLabel}>All Games</Text>

      <ScrollView
        style={HomeStyle.scrollContainer}
        contentContainerStyle={{ gap: 9, paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
      >
        {games.map((game, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => router.push(game.page)}
            activeOpacity={0.8}
          >
            <GameBar
              image={game.image}
              title={game.title}
              description={game.description}
              badge={game.badge}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}