import GameDetailScreen from "../components/gamedetailscreen";
import { Href } from "expo-router";

export default function HonkaiStarRail() {
  return (
    <GameDetailScreen
      title="Honkai: Star Rail"
      tag="Turn-based · Sci-fi Fantasy"
      emoji="🚂"
      image={require('../../assets/images/game_icon/honkai_star_rail.jpg')}
      tabs={['Guide', 'Characters', 'Events', 'Tips']}
      infoTabs={[
        { title: 'News & Events',      page: '/hsr/news' as Href,        icon: '📰' },
        { title: 'Character Builds',   page: '/hsr/characters' as Href,  icon: '⚔️' },
        { title: 'Path Guide',         page: '/hsr/paths' as Href,       icon: '🌌' },
        { title: 'Relic Guide',        page: '/hsr/relics' as Href,      icon: '💎' },
        { title: 'Simulated Universe', page: '/hsr/simulated' as Href,   icon: '🎲' },
        { title: 'Memory of Chaos',    page: '/hsr/memory' as Href,      icon: '🌀' },
        { title: 'Warp / Gacha',       page: '/hsr/gacha' as Href,       icon: '✨' },
      ]}
    />
  );
}