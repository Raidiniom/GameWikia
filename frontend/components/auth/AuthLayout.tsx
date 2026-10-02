import { ReactNode } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Screen } from '@/components/ui/Screen';
import { Colors, FontSize, Radius, Spacing } from '@/constants/theme';

interface AuthLayoutProps {
  title?: string;
  subtitle?: string;
  /** Show the big GameWikia logo above the card (used on the login screen). */
  showBrand?: boolean;
  children: ReactNode;
}

/**
 * Shared shell for login / register / password screens: centered card,
 * scrolls when the content is tall, and moves up when the keyboard opens.
 */
export function AuthLayout({ title, subtitle, showBrand = false, children }: AuthLayoutProps) {
  return (
    <Screen>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {showBrand && (
            <View style={styles.brand}>
              <View style={styles.logoBox}>
                <Text style={styles.logoEmoji}>🎮</Text>
              </View>
              <Text style={styles.brandTitle}>GameWikia</Text>
              <Text style={styles.brandSubtitle}>Your gacha companion</Text>
            </View>
          )}

          <View style={styles.card}>
            {title ? <Text style={styles.title}>{title}</Text> : null}
            {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
            {children}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Spacing.xl,
  },
  brand: {
    alignItems: 'center',
    marginBottom: Spacing.xxl,
  },
  logoBox: {
    width: 68,
    height: 68,
    borderRadius: Radius.lg,
    backgroundColor: Colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.md,
  },
  logoEmoji: {
    fontSize: 34,
  },
  brandTitle: {
    color: Colors.textPrimary,
    fontSize: FontSize.heading,
    fontWeight: '700',
    letterSpacing: 0.4,
  },
  brandSubtitle: {
    color: Colors.textSecondary,
    fontSize: 13,
    marginTop: Spacing.xs,
  },
  card: {
    width: '100%',
    maxWidth: 420,
    backgroundColor: Colors.surface,
    padding: Spacing.xl,
    borderRadius: Radius.lg,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  title: {
    color: Colors.textPrimary,
    fontSize: FontSize.title,
    fontWeight: '700',
    textAlign: 'center',
  },
  subtitle: {
    color: Colors.textSecondary,
    fontSize: 13,
    textAlign: 'center',
    marginTop: 6,
    marginBottom: Spacing.xl,
    lineHeight: 19,
  },
});
