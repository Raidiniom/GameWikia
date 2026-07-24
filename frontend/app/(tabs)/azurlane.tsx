import GameDetailScreen from "../components/gamedetailscreen";
import { Href } from "expo-router";
import { GameThemes } from "@/styles/theme";

export default function AzurLane() {
  return (
    <GameDetailScreen
      title="Azur Lane"
      tag="Naval · Gacha · 2D Shooter"
      emoji="⚓"
      image={require('../../assets/images/game_icon/azur_lane.jpg')}
      theme={GameThemes.azurlane}
      tabs={['Guide', 'Ships', 'Events', 'Tips']}
      infoTabs={[
        { title: 'News & Events',       page: '../(subtabs)/azurlane/news' as Href,     icon: '📰' },
        { title: 'Campaign Guide',      page: '../(subtabs)/azurlane/campaign' as Href, icon: '🗺️' },
        { title: 'Gameplay Mechanics',  page: '../(subtabs)/azurlane/gameplay' as Href,  icon: '🎮' },
        { title: 'Factions',            page: '../(subtabs)/azurlane/factions' as Href,  icon: '🚩' },
        { title: 'Equipment Guide',     page: '../(subtabs)/azurlane/' as Href,          icon: '🔧' },
        { title: 'Combat Tips',         page: '../(subtabs)/azurlane/' as Href,          icon: '🛡️' },
      ]}
    />
  );
}