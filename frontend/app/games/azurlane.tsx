import GameDetailScreen from "@/components/gamedetailscreen";
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
      tabs={['Guide', 'Ships', 'Events']}
      infoTabs={[
        { title: 'News & Events',       page: '/games/subtabs/azurlane/news' as Href,     icon: '📰' },
        { title: 'Campaign Guide',      page: '/games/subtabs/azurlane/campaign' as Href, icon: '🗺️' },
        { title: 'Gameplay Mechanics',  page: '/games/subtabs/azurlane/gameplay' as Href,  icon: '🎮' },
        { title: 'Factions',            page: '/games/subtabs/azurlane/factions' as Href,  icon: '🚩' },
        { title: 'Equipments',     page: '/games/subtabs/azurlane/equipment' as Href,          icon: '🔧' },
      ]}
    />
  );
}