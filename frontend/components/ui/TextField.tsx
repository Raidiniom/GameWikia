import { useState } from 'react';
import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';
import { Colors, FontSize, overline, Radius, Spacing } from '@/constants/theme';

// Accepts every normal TextInput prop (value, onChangeText, secureTextEntry…)
// plus a label, so screens don't repeat the same label + input markup.
type TextFieldProps = TextInputProps & {
  label: string;
};

export function TextField({ label, style, onFocus, onBlur, ...inputProps }: TextFieldProps) {
  const [focused, setFocused] = useState(false);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholderTextColor={Colors.placeholder}
        {...inputProps}
        style={[styles.input, focused && styles.inputFocused, style]}
        onFocus={(e) => {
          setFocused(true);
          onFocus?.(e);
        }}
        onBlur={(e) => {
          setFocused(false);
          onBlur?.(e);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: Spacing.md,
  },
  label: {
    ...overline,
    color: Colors.textSecondary,
    marginBottom: 6,
  },
  input: {
    backgroundColor: Colors.surfaceRaised,
    color: Colors.textPrimary,
    paddingVertical: 13,
    paddingHorizontal: Spacing.lg,
    fontSize: FontSize.input,
    borderRadius: Radius.md,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  inputFocused: {
    borderColor: Colors.accentBright,
  },
});
