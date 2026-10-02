import { ReactNode } from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { Edge, SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/theme';

interface ScreenProps {
  children: ReactNode;
  backgroundColor?: string;
  edges?: Edge[];
  style?: StyleProp<ViewStyle>;
}

/** Root wrapper for every screen: fills the page and avoids the notch/home bar. */
export function Screen({
  children,
  backgroundColor = Colors.background,
  edges = ['top', 'bottom'],
  style,
}: ScreenProps) {
  return (
    <SafeAreaView style={[styles.container, { backgroundColor }, style]} edges={edges}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
