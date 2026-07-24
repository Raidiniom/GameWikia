export const Colors = {
  // Backgrounds — deep navy-teal stack
  ink_black: '#0d1b1e',       // page bg (was #001219)
  dark_teal: '#112228',       // card / surface bg (was #005f73)
  dark_cyan: '#162e35',       // input bg (was #0a9396)

  // Text
  pearl_aqua: '#7bbfb0',      // secondary text (was #94d2bd)
  vanilla_custard: '#c8e6d8', // primary text  (was #e9d8a6)

  // Interactive
  golden_orange: '#ee9b00ff',

  // Emphasis / Status
  burnt_caramel: '#ca6702ff',
  rusty_spice: '#bb3e03ff',
  oxidized_iron: '#ae2012ff',
  brown_red: '#9b2226ff',
  deep_emerald: '#0f766eff',
  jade_green: '#1f7a64',      // primary accent / left-border green
  sea_green: '#52b69aff',
  soft_sage: '#1e3c40',       // input border
  mint_highlight: '#5dcaa5',  // bright accent (badges, tabs)
  dark_card_border: '#1e3c40',
  accent_green: '#1f7a64',
};

export const AzurLane = {
  abyss_black: '#0b132bff',
  naval_blue: '#1c2541ff',
  steel_blue: '#3a506bff',
  ocean_cyan: '#5bc0beff',
  mist_white: '#f0f3f5ff',
  signal_yellow: '#ffd166ff',
  warning_orange: '#ef476fff',
  hull_gray: '#8d99aeff',
};

export const GenshinImpact = {
  midnight_sky: '#1b263bff',
  deep_azure: '#415a77ff',
  sky_blue: '#778da9ff',
  wind_glow: '#a8dadcff',
  cloud_white: '#f1faeeff',
  elemental_gold: '#e9c46aff',
  vision_teal: '#2a9d8fff',
  leyline_purple: '#6a4c93ff',
};

export const HonkaiImpact3rd = {
  void_black: '#0a0a0aff',
  mech_gray: '#1f2933ff',
  neon_blue: '#3b82f6ff',
  plasma_cyan: '#22d3eeff',
  energy_pink: '#ec4899ff',
  combat_red: '#ef4444ff',
  alloy_silver: '#9ca3afff',
  light_white: '#f9fafbff',
};

export const UmamusumePrettyDerby = {
  midnight_track: '#1f2937ff',
  race_blue: '#2563ebff',
  sky_cyan: '#38bdf8ff',
  idol_pink: '#fb7185ff',
  sunshine_yellow: '#fde047ff',
  turf_green: '#4ade80ff',
  soft_white: '#fff7edff',
  medal_gold: '#f59e0bff',
};

export const HonkaiStarRail = {
  cosmic_black: '#0b1020ff',
  astral_blue: '#1e3a8aff',
  nebula_indigo: '#312e81ff',
  starlight_cyan: '#67e8f9ff',
  galaxy_purple: '#8b5cf6ff',
  warp_gold: '#facc15ff',
  void_gray: '#6b7280ff',
  stellar_white: '#f8fafcff',
};

export const BlueArchive = {
  academy_navy: '#0f172aff',
  class_blue: '#1e40afff',
  soft_sky: '#60a5faff',
  calm_cyan: '#22d3eeff',
  student_pink: '#f472b6ff',
  notebook_yellow: '#fde68aff',
  chalk_white: '#f8fafcff',
  desk_gray: '#9ca3afff',
};

export const Arknights = {
  obsidian_black: '#0b0f14ff',
  industrial_gray: '#1f2937ff',
  steel_blue: '#374151ff',
  operator_teal: '#14b8a6ff',
  hazard_orange: '#f97316ff',
  warning_red: '#dc2626ff',
  sterile_white: '#e5e7ebff',
  ash_gray: '#6b7280ff',
};

// --- Shared theme contract for game detail screens ---
export interface GameThemeColors {
  background: string;
  surface: string;
  border: string;
  accent: string;
  accentSoft: string; // accent w/ alpha, used for pressed/placeholder bg
  textPrimary: string;
  textSecondary: string;
}

export const GameThemes: Record<string, GameThemeColors> = {
  azurlane: {
    background: AzurLane.abyss_black,
    surface: AzurLane.naval_blue,
    border: AzurLane.steel_blue,
    accent: AzurLane.ocean_cyan,
    accentSoft: `${AzurLane.ocean_cyan}30`,
    textPrimary: AzurLane.mist_white,
    textSecondary: AzurLane.hull_gray,
  },
  genshinimpact: {
    background: GenshinImpact.midnight_sky,
    surface: GenshinImpact.deep_azure,
    border: GenshinImpact.sky_blue,
    accent: GenshinImpact.vision_teal,
    accentSoft: `${GenshinImpact.vision_teal}30`,
    textPrimary: GenshinImpact.cloud_white,
    textSecondary: GenshinImpact.wind_glow,
  },
  honkaiimpact3rd: {
    background: HonkaiImpact3rd.void_black,
    surface: HonkaiImpact3rd.mech_gray,
    border: HonkaiImpact3rd.alloy_silver,
    accent: HonkaiImpact3rd.plasma_cyan,
    accentSoft: `${HonkaiImpact3rd.plasma_cyan}30`,
    textPrimary: HonkaiImpact3rd.light_white,
    textSecondary: HonkaiImpact3rd.alloy_silver,
  },
  honkaistarrail: {
    background: HonkaiStarRail.cosmic_black,
    surface: HonkaiStarRail.nebula_indigo,
    border: HonkaiStarRail.void_gray,
    accent: HonkaiStarRail.starlight_cyan,
    accentSoft: `${HonkaiStarRail.starlight_cyan}30`,
    textPrimary: HonkaiStarRail.stellar_white,
    textSecondary: HonkaiStarRail.void_gray,
  },
  umamusumeprettyderby: {
    background: UmamusumePrettyDerby.midnight_track,
    surface: UmamusumePrettyDerby.race_blue,
    border: UmamusumePrettyDerby.sky_cyan,
    accent: UmamusumePrettyDerby.idol_pink,
    accentSoft: `${UmamusumePrettyDerby.idol_pink}30`,
    textPrimary: UmamusumePrettyDerby.soft_white,
    textSecondary: UmamusumePrettyDerby.sky_cyan,
  },
  bluearchive: {
    background: BlueArchive.academy_navy,
    surface: BlueArchive.class_blue,
    border: BlueArchive.soft_sky,
    accent: BlueArchive.calm_cyan,
    accentSoft: `${BlueArchive.calm_cyan}30`,
    textPrimary: BlueArchive.chalk_white,
    textSecondary: BlueArchive.desk_gray,
  },
  arknights: {
    background: Arknights.obsidian_black,
    surface: Arknights.industrial_gray,
    border: Arknights.steel_blue,
    accent: Arknights.operator_teal,
    accentSoft: `${Arknights.operator_teal}30`,
    textPrimary: Arknights.sterile_white,
    textSecondary: Arknights.ash_gray,
  },
};