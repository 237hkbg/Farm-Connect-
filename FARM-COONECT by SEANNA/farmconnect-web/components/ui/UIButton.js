import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { colors, radius } from '../../theme/theme';

export default function UIButton({ variant = 'solid', style, disabled, ...props }) {
  const [pressed, setPressed] = useState(false);

  const contentStyle = [styles.content];
  const btnStyle = [styles.base];

  let mode = 'text';
  let buttonColor;
  let textColor;
  let borderColor;
  let borderWidth;

  if (variant === 'solid') {
    mode = 'contained';
    buttonColor = disabled ? colors.border : pressed ? colors.primaryDark : colors.primary;
    textColor = '#fff';
  } else if (variant === 'outline') {
    mode = 'text';
    borderWidth = 1;
    borderColor = colors.primary;
    buttonColor = pressed ? 'rgba(46,125,50,0.08)' : 'transparent';
    textColor = colors.primary;
  } else if (variant === 'ghost') {
    mode = 'text';
    buttonColor = pressed ? 'rgba(46,125,50,0.08)' : 'transparent';
    textColor = colors.primary;
  }

  if (borderWidth) btnStyle.push({ borderWidth, borderColor });
  if (buttonColor) btnStyle.push({ backgroundColor: buttonColor });

  // Disabled text color tweak for non-solid
  if (disabled && variant !== 'solid') {
    textColor = colors.muted;
  }

  return (
    <Button
      mode={mode}
      style={[btnStyle, style]}
      contentStyle={contentStyle}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      rippleColor={colors.primary}
      textColor={textColor}
      disabled={disabled}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  base: { borderRadius: radius.md },
  content: { paddingVertical: 6 },
});
