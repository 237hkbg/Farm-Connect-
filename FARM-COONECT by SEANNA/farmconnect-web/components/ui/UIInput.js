import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors, radius } from '../../theme/theme';

export default function UIInput({ error, style, ...props }) {
  return (
    <TextInput
      mode="outlined"
      style={[styles.input, style]}
      outlineStyle={{ borderRadius: radius.md, borderColor: error ? colors.error : colors.border, borderWidth: 1 }}
      placeholderTextColor={colors.muted}
      theme={{ colors: { primary: colors.primary, error: colors.error } }}
      error={!!error}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  input: { backgroundColor: '#FFFFFF', marginBottom: 12 },
});
