import GameDetailScreen from "@/components/gamedetailscreen";
import { Href } from "expo-router";
import { GameThemes } from "@/styles/theme";

export default function GenshinImpact() {
  return (
    <GameDetailScreen
      title="Genshin Impact"
      tag="Open-world RPG · Elemental Combat"
      emoji="🌸"
      image={require('../../assets/images/game_icon/genshin_impact.jpg')}
      theme={GameThemes.genshinimpact}
      tabs={['Guide', 'Characters', 'Events']}
      infoTabs={[
        { title: 'News & Events',      page: '/games/subtabs/genshin/news' as Href,       icon: '📰' },
        { title: 'Character Guide',    page: '/games/subtabs/genshin/characters' as Href, icon: '🧑‍🤝‍🧑' },
        { title: 'Exploration Guide',  page: '/games/subtabs/genshin/exploration' as Href,icon: '🗺️' },
        { title: 'Elemental Combos',   page: '/games/subtabs/genshin/elements' as Href,   icon: '⚡' },
        { title: 'Artifact Guide',     page: '/games/subtabs/genshin/artifacts' as Href,  icon: '💎' },
        { title: 'Spiral Abyss Tips',  page: '/games/subtabs/genshin/abyss' as Href,      icon: '🌀' },
      ]}
    />
  );
}