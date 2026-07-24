import GameDetailScreen from "../components/gamedetailscreen";
import { Href } from "expo-router";
import { GameThemes } from "@/styles/theme";

export default function BlueArchive() {
  return (
    <GameDetailScreen
      title="Blue Archive"
      tag="Tactical RPG · Squad Combat"
      emoji="📚"
      image={require('../../assets/images/game_icon/blue_archive.jpg')}
      theme={GameThemes.bluearchive}
      tabs={['Guide', 'Students', 'Events', 'Tips']}
      infoTabs={[
        { title: 'News & Events',     page: '/ba/news' as Href,      icon: '📰' },
        { title: 'Student Guide',     page: '/ba/students' as Href,  icon: '🧑‍🎓' },
        { title: 'Squad Builder',     page: '/ba/squads' as Href,    icon: '👥' },
        { title: 'Raid Guide',        page: '/ba/raids' as Href,     icon: '⚔️' },
        { title: 'Story Guide',       page: '/ba/story' as Href,     icon: '📖' },
        { title: 'Equipment Guide',   page: '/ba/equipment' as Href, icon: '🔧' },
        { title: 'Gacha / Recruit',   page: '/ba/gacha' as Href,     icon: '✨' },
      ]}
    />
  );
}