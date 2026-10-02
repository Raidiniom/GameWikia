// Single source of truth for every game in the app. The home list,
// the game page and the section pages are all generated from this file,
// so adding a game means adding one entry here — no new screen files.

import { ImageSourcePropType } from 'react-native';
import { GameTheme, GameThemes } from './theme';

/** Which tab on the game page a section is listed under. */
export type SectionCategory = 'guide' | 'characters' | 'events';

export interface GameSection {
  /** Used in the URL: /games/<gameId>/<sectionId> */
  id: string;
  title: string;
  icon: string;
  category: SectionCategory;
}

export interface Game {
  /** Used in the URL: /games/<id> */
  id: string;
  title: string;
  tagline: string;
  emoji: string;
  icon: ImageSourcePropType;
  theme: GameTheme;
  /** What this game calls its characters, e.g. "Ships" or "Operators". */
  charactersLabel: string;
  sections: GameSection[];
}

export const GAMES: Game[] = [
  {
    id: 'azurlane',
    title: 'Azur Lane',
    tagline: 'Naval shooter · Fleet building',
    emoji: '⚓',
    icon: require('@/assets/images/game_icon/azur_lane.jpg'),
    theme: GameThemes.azurlane,
    charactersLabel: 'Ships',
    sections: [
      { id: 'news', title: 'News & Events', icon: '📰', category: 'events' },
      { id: 'campaign', title: 'Campaign Guide', icon: '🗺️', category: 'guide' },
      { id: 'gameplay', title: 'Gameplay Mechanics', icon: '🎮', category: 'guide' },
      { id: 'equipment', title: 'Equipment', icon: '🔧', category: 'guide' },
      { id: 'factions', title: 'Factions', icon: '🚩', category: 'characters' },
    ],
  },
  {
    id: 'genshinimpact',
    title: 'Genshin Impact',
    tagline: 'Open-world RPG · Elemental combat',
    emoji: '🌸',
    icon: require('@/assets/images/game_icon/genshin_impact.jpg'),
    theme: GameThemes.genshinimpact,
    charactersLabel: 'Characters',
    sections: [
      { id: 'news', title: 'News & Events', icon: '📰', category: 'events' },
      { id: 'exploration', title: 'Exploration Guide', icon: '🗺️', category: 'guide' },
      { id: 'elements', title: 'Elemental Reactions', icon: '⚡', category: 'guide' },
      { id: 'artifacts', title: 'Artifact Guide', icon: '💎', category: 'guide' },
      { id: 'abyss', title: 'Spiral Abyss Tips', icon: '🌀', category: 'guide' },
      { id: 'characters', title: 'Character Guide', icon: '🧑‍🤝‍🧑', category: 'characters' },
    ],
  },
  {
    id: 'honkaiimpact3',
    title: 'Honkai Impact 3rd',
    tagline: 'Action RPG · Hack-and-slash',
    emoji: '⚡',
    icon: require('@/assets/images/game_icon/honkai_impact_3rd.jpg'),
    theme: GameThemes.honkaiimpact3,
    charactersLabel: 'Valkyries',
    sections: [
      { id: 'news', title: 'News & Events', icon: '📰', category: 'events' },
      { id: 'gacha', title: 'Gacha / Supply', icon: '✨', category: 'events' },
      { id: 'stigmata', title: 'Stigmata Guide', icon: '💎', category: 'guide' },
      { id: 'weapons', title: 'Weapon Guide', icon: '🗡️', category: 'guide' },
      { id: 'openworld', title: 'Open World Guide', icon: '🗺️', category: 'guide' },
      { id: 'arena', title: 'Memorial Arena', icon: '🏟️', category: 'guide' },
      { id: 'valkyries', title: 'Valkyrie Guide', icon: '⚡', category: 'characters' },
    ],
  },
  {
    id: 'honkaistarrail',
    title: 'Honkai: Star Rail',
    tagline: 'Turn-based · Sci-fi fantasy',
    emoji: '🚂',
    icon: require('@/assets/images/game_icon/honkai_star_rail.jpg'),
    theme: GameThemes.honkaistarrail,
    charactersLabel: 'Characters',
    sections: [
      { id: 'news', title: 'News & Events', icon: '📰', category: 'events' },
      { id: 'gacha', title: 'Warp / Gacha', icon: '✨', category: 'events' },
      { id: 'paths', title: 'Path Guide', icon: '🌌', category: 'guide' },
      { id: 'relics', title: 'Relic Guide', icon: '💎', category: 'guide' },
      { id: 'simulated', title: 'Simulated Universe', icon: '🎲', category: 'guide' },
      { id: 'memory', title: 'Memory of Chaos', icon: '🌀', category: 'guide' },
      { id: 'characters', title: 'Character Builds', icon: '⚔️', category: 'characters' },
    ],
  },
  {
    id: 'umamusume',
    title: 'Umamusume Pretty Derby',
    tagline: 'Training sim · Horse racing',
    emoji: '🐎',
    icon: require('@/assets/images/game_icon/umamusume_pretty_derby.png'),
    theme: GameThemes.umamusume,
    charactersLabel: 'Uma Musume',
    sections: [
      { id: 'news', title: 'News & Events', icon: '📰', category: 'events' },
      { id: 'gacha', title: 'Gacha / Scout', icon: '✨', category: 'events' },
      { id: 'training', title: 'Training Guide', icon: '🏋️', category: 'guide' },
      { id: 'races', title: 'Race Strategy', icon: '🏁', category: 'guide' },
      { id: 'stadium', title: 'Team Stadium', icon: '🏟️', category: 'guide' },
      { id: 'characters', title: 'Character Guide', icon: '🐎', category: 'characters' },
      { id: 'support', title: 'Support Cards', icon: '🃏', category: 'characters' },
    ],
  },
  {
    id: 'bluearchive',
    title: 'Blue Archive',
    tagline: 'Tactical RPG · Squad combat',
    emoji: '📚',
    icon: require('@/assets/images/game_icon/blue_archive.jpg'),
    theme: GameThemes.bluearchive,
    charactersLabel: 'Students',
    sections: [
      { id: 'news', title: 'News & Events', icon: '📰', category: 'events' },
      { id: 'gacha', title: 'Gacha / Recruit', icon: '✨', category: 'events' },
      { id: 'raids', title: 'Raid Guide', icon: '⚔️', category: 'guide' },
      { id: 'story', title: 'Story Guide', icon: '📖', category: 'guide' },
      { id: 'equipment', title: 'Equipment Guide', icon: '🔧', category: 'guide' },
      { id: 'students', title: 'Student Guide', icon: '🧑‍🎓', category: 'characters' },
      { id: 'squads', title: 'Squad Builder', icon: '👥', category: 'characters' },
    ],
  },
  {
    id: 'arknights',
    title: 'Arknights',
    tagline: 'Tower defense · Sci-fi story',
    emoji: '🐾',
    icon: require('@/assets/images/game_icon/arknights.png'),
    theme: GameThemes.arknights,
    charactersLabel: 'Operators',
    sections: [
      { id: 'news', title: 'News & Events', icon: '📰', category: 'events' },
      { id: 'gacha', title: 'Headhunting', icon: '✨', category: 'events' },
      { id: 'stages', title: 'Stage Guide', icon: '🗺️', category: 'guide' },
      { id: 'base', title: 'Base Building', icon: '🏗️', category: 'guide' },
      { id: 'story', title: 'Story Guide', icon: '📖', category: 'guide' },
      { id: 'operators', title: 'Operator Guide', icon: '🐾', category: 'characters' },
      { id: 'modules', title: 'Module Guide', icon: '🔧', category: 'characters' },
    ],
  },
  {
    id: 'endfield',
    title: 'Arknights: Endfield',
    tagline: 'Open world · Factory building',
    emoji: '🏭',
    icon: require('@/assets/images/game_icon/arknights.png'),
    theme: GameThemes.endfield,
    charactersLabel: 'Operators',
    sections: [
      { id: 'news', title: 'News & Events', icon: '📰', category: 'events' },
      { id: 'gacha', title: 'Headhunting', icon: '✨', category: 'events' },
      { id: 'exploration', title: 'Exploration Guide', icon: '🗺️', category: 'guide' },
      { id: 'factory', title: 'Factory Building', icon: '🏭', category: 'guide' },
      { id: 'story', title: 'Story Guide', icon: '📖', category: 'guide' },
      { id: 'operators', title: 'Operator Guide', icon: '🐾', category: 'characters' },
    ],
  },
];

export function getGame(id: string | undefined): Game | undefined {
  return GAMES.find((game) => game.id === id);
}

export function getSection(game: Game, sectionId: string | undefined): GameSection | undefined {
  return game.sections.find((section) => section.id === sectionId);
}
