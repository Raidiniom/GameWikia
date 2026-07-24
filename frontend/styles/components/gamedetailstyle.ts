import { StyleSheet } from 'react-native';
import { GameThemeColors } from '../theme';

export const createGameDetailStyle = (theme: GameThemeColors) =>
  StyleSheet.create({
    bodyContainer: {
      flex: 1,
      backgroundColor: theme.background,
    },
    hero: {
      padding: 20,
      paddingBottom: 16,
      backgroundColor: theme.surface,
      borderBottomWidth: 1,
      borderBottomColor: theme.border,
    },
    backRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 14,
      gap: 4,
    },
    backText: {
      color: theme.accent,
      fontSize: 13,
      fontWeight: '500',
    },
    heroRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 14,
    },
    heroIcon: {
      width: 56,
      height: 56,
      borderRadius: 14,
    },
    heroIconPlaceholder: {
      width: 56,
      height: 56,
      borderRadius: 14,
      backgroundColor: theme.accentSoft,
      alignItems: 'center',
      justifyContent: 'center',
    },
    heroIconEmoji: {
      fontSize: 26,
    },
    heroTitle: {
      color: theme.textPrimary,
      fontSize: 20,
      fontWeight: '700',
    },
    heroTag: {
      color: theme.textSecondary,
      fontSize: 12,
      marginTop: 3,
      opacity: 0.85,
    },
    tabBar: {
      flexDirection: 'row',
      backgroundColor: theme.surface,
      borderBottomWidth: 1,
      borderBottomColor: theme.border,
    },
    tab: {
      flex: 1,
      paddingVertical: 12,
      alignItems: 'center',
    },
    tabActive: {
      borderBottomWidth: 2,
      borderBottomColor: theme.accent,
    },
    tabText: {
      color: theme.textSecondary,
      fontSize: 12,
      fontWeight: '500',
    },
    tabTextActive: {
      color: theme.accent,
      fontSize: 12,
      fontWeight: '700',
    },
    content: {
      padding: 16,
      paddingBottom: 40,
      gap: 8,
    },
    sectionLabel: {
      color: theme.textSecondary,
      fontSize: 11,
      fontWeight: '600',
      letterSpacing: 1.2,
      textTransform: 'uppercase',
      marginBottom: 6,
      opacity: 0.75,
    },
    infoRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: theme.surface,
      borderRadius: 12,
      paddingVertical: 13,
      paddingHorizontal: 14,
      borderWidth: 1,
      borderColor: theme.border,
      borderLeftWidth: 3,
      borderLeftColor: theme.accent,
    },
    infoRowPressed: {
      backgroundColor: theme.accentSoft,
    },
    infoRowLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
    },
    infoRowIcon: {
      width: 32,
      height: 32,
      borderRadius: 8,
      backgroundColor: theme.accentSoft,
      alignItems: 'center',
      justifyContent: 'center',
    },
    infoRowEmoji: {
      fontSize: 16,
    },
    infoRowText: {
      color: theme.textPrimary,
      fontSize: 14,
      fontWeight: '600',
    },
    infoRowChevron: {
      color: theme.textSecondary,
      fontSize: 20,
      opacity: 0.4,
    },
  });