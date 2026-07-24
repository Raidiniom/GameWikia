import GameDetailScreen from "../components/gamedetailscreen";
import { Href } from "expo-router";
import { GameThemes } from "@/styles/theme";

export default function UmamusumePrettyDerby() {
  return (
    <GameDetailScreen
      title="Umamusume Pretty Derby"
      tag="Training Sim · Horse Racing"
      emoji="🐎"
      image={require('../../assets/images/game_icon/umamusume_pretty_derby.png')}
      theme={GameThemes.umamusumeprettyderby}
      tabs={['Guide', 'Uma-musume', 'Events', 'Tips']}
      infoTabs={[
        { title: 'News & Events',      page: '/uma/news' as Href,        icon: '📰' },
        { title: 'Training Guide',     page: '/uma/training' as Href,    icon: '🏋️' },
        { title: 'Character Guide',    page: '/uma/characters' as Href,  icon: '🐎' },
        { title: 'Support Cards',      page: '/uma/support' as Href,     icon: '🃏' },
        { title: 'Race Strategy',      page: '/uma/races' as Href,       icon: '🏁' },
        { title: 'Team Stadium',       page: '/uma/stadium' as Href,     icon: '🏟️' },
        { title: 'Gacha / Scout',      page: '/uma/gacha' as Href,       icon: '✨' },
      ]}
    />
  );
}