import GameDetailScreen from "../components/gamedetailscreen";
import { Href } from "expo-router";
import { GameThemes } from "@/styles/theme";

export default function Arknights() {
  return (
    <GameDetailScreen
      title="Arknights"
      tag="Tower Defense · Sci-fi Story"
      emoji="🐾"
      image={require('../../assets/images/game_icon/arknights.png')}
      theme={GameThemes.arknights}
      tabs={['Guide', 'Operators', 'Events', 'Tips']}
      infoTabs={[
        { title: 'News & Events',    page: '/ak/news' as Href,       icon: '📰' },
        { title: 'Operator Guide',   page: '/ak/operators' as Href,  icon: '🐾' },
        { title: 'Stage Guide',      page: '/ak/stages' as Href,     icon: '🗺️' },
        { title: 'Base Building',    page: '/ak/base' as Href,       icon: '🏗️' },
        { title: 'Equipment Guide',  page: '/ak/equipment' as Href,  icon: '🔧' },
        { title: 'Story Guide',      page: '/ak/story' as Href,      icon: '📖' },
        { title: 'Headhunting',      page: '/ak/gacha' as Href,      icon: '✨' },
      ]}
    />
  );
}