// App-wide design tokens. Components should read colors, spacing and
// radii from here instead of hard-coding values, so the look stays
// consistent and can be changed in one place.

export const Colors = {
  // Backgrounds, darkest to lightest
  background: '#0d1b1e',
  surface: '#112228',
  surfaceRaised: '#162e35',
  border: '#1e3c40',

  // Text
  textPrimary: '#c8e6d8',
  textSecondary: '#7bbfb0',
  placeholder: '#7bbfb066',

  // Brand accent
  accent: '#1f7a64',
  accentPressed: '#196552',
  accentBright: '#5dcaa5',
  accentSoft: '#1f7a6433',

  // Status
  success: '#5dcaa5',
  successSoft: '#1f7a6433',
  warning: '#ee9b00',
  danger: '#f87171',
  dangerStrong: '#9b2226',
  dangerSoft: '#9b222633',
};

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
};

export const Radius = {
  sm: 8,
  md: 12,
  lg: 18,
  pill: 999,
};

export const FontSize = {
  caption: 11,
  small: 12,
  body: 14,
  input: 15,
  button: 16,
  title: 22,
  heading: 26,
};

/** Small uppercase label used above inputs and lists. */
export const overline = {
  fontSize: FontSize.caption,
  fontWeight: '600',
  letterSpacing: 1.2,
  textTransform: 'uppercase',
} as const;

/** Color set each game screen is painted with. */
export interface GameTheme {
  background: string;
  surface: string;
  border: string;
  accent: string;
  /** Translucent accent for pressed states and icon backgrounds. */
  accentSoft: string;
  textPrimary: string;
  textSecondary: string;
}

/** Builds a GameTheme; accentSoft is derived from accent so it's always valid. */
function gameTheme(theme: Omit<GameTheme, 'accentSoft'>): GameTheme {
  // Hex must be 6 digits here: appending alpha to an 8-digit hex is invalid.
  return { ...theme, accentSoft: `${theme.accent}30` };
}

export const GameThemes = {
  azurlane: gameTheme({
    background: '#0b132b',
    surface: '#1c2541',
    border: '#3a506b',
    accent: '#5bc0be',
    textPrimary: '#f0f3f5',
    textSecondary: '#8d99ae',
  }),
  genshinimpact: gameTheme({
    background: '#1b263b',
    surface: '#26364f',
    border: '#415a77',
    accent: '#e9c46a',
    textPrimary: '#f1faee',
    textSecondary: '#a8dadc',
  }),
  honkaiimpact3: gameTheme({
    background: '#0a0a0a',
    surface: '#1f2933',
    border: '#3b4652',
    accent: '#22d3ee',
    textPrimary: '#f9fafb',
    textSecondary: '#9ca3af',
  }),
  honkaistarrail: gameTheme({
    background: '#0b1020',
    surface: '#1c1b4d',
    border: '#312e81',
    accent: '#facc15',
    textPrimary: '#f8fafc',
    textSecondary: '#a5b4fc',
  }),
  umamusume: gameTheme({
    background: '#1f2937',
    surface: '#273449',
    border: '#3b4b63',
    accent: '#fb7185',
    textPrimary: '#fff7ed',
    textSecondary: '#7dd3fc',
  }),
  bluearchive: gameTheme({
    background: '#0f172a',
    surface: '#172554',
    border: '#1e40af',
    accent: '#60a5fa',
    textPrimary: '#f8fafc',
    textSecondary: '#93c5fd',
  }),
  arknights: gameTheme({
    background: '#0b0f14',
    surface: '#1f2937',
    border: '#374151',
    accent: '#14b8a6',
    textPrimary: '#e5e7eb',
    textSecondary: '#9ca3af',
  }),
  endfield: gameTheme({
    background: '#0f0f0c',
    surface: '#1d1d17',
    border: '#3a3a2c',
    accent: '#f5d90a',
    textPrimary: '#f5f5f0',
    textSecondary: '#a3a38f',
  }),
} satisfies Record<string, GameTheme>;
