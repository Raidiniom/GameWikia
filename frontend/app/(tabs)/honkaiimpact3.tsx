import GameDetailScreen from "../components/gamedetailscreen";
import { Href } from "expo-router";

export default function HonkaiImpact3() {
  return (
    <GameDetailScreen
      title="Honkai Impact 3rd"
      tag="Action RPG · Hack-and-slash"
      emoji="⚡"
      image={require('../../assets/images/game_icon/honkai_impact_3rd.jpg')}
      tabs={['Guide', 'Valkyries', 'Events', 'Tips']}
      infoTabs={[
        { title: 'News & Events',     page: '/hi3/news' as Href,       icon: '📰' },
        { title: 'Valkyrie Guide',    page: '/hi3/valkyries' as Href,  icon: '⚡' },
        { title: 'Stigmata Guide',    page: '/hi3/stigmata' as Href,   icon: '💎' },
        { title: 'Weapon Guide',      page: '/hi3/weapons' as Href,    icon: '🗡️' },
        { title: 'Open World Guide',  page: '/hi3/openworld' as Href,  icon: '🗺️' },
        { title: 'Memorial Arena',    page: '/hi3/arena' as Href,      icon: '🏟️' },
        { title: 'Gacha / Supply',    page: '/hi3/gacha' as Href,      icon: '✨' },
      ]}
    />
  );
}