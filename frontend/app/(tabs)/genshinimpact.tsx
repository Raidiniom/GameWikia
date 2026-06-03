import GameDetailScreen from "../components/gamedetailscreen";
import { Href } from "expo-router";

export default function GenshinImpact() {
  return (
    <GameDetailScreen
      title="Genshin Impact"
      tag="Open-world RPG · Elemental Combat"
      emoji="🌸"
      image={require('../../assets/images/game_icon/genshin_impact.jpg')}
      tabs={['Guide', 'Characters', 'Events', 'Tips']}
      infoTabs={[
        { title: 'News & Events',      page: '/genshin/news' as Href,       icon: '📰' },
        { title: 'Character Guide',    page: '/genshin/characters' as Href, icon: '🧑‍🤝‍🧑' },
        { title: 'Exploration Guide',  page: '/genshin/exploration' as Href,icon: '🗺️' },
        { title: 'Elemental Combos',   page: '/genshin/elements' as Href,   icon: '⚡' },
        { title: 'Artifact Guide',     page: '/genshin/artifacts' as Href,  icon: '💎' },
        { title: 'Spiral Abyss Tips',  page: '/genshin/abyss' as Href,      icon: '🌀' },
        { title: 'Wish / Gacha',       page: '/genshin/gacha' as Href,      icon: '✨' },
      ]}
    />
  );
}