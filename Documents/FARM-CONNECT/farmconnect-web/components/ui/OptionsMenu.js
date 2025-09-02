import React, { useState, useMemo } from 'react';
import { View } from 'react-native';
import { IconButton, Menu, Divider } from 'react-native-paper';
import { Link } from 'expo-router';
import { useAuth } from '../../stores/auth';

export default function OptionsMenu() {
  const [visible, setVisible] = useState(false);
  const user = useAuth((s) => s.user);
  const logout = useAuth((s) => s.logout);

  const role = user?.role;

  const items = useMemo(() => {
    // Minimal, goal-aligned primary actions per role
    if (role === 'admin') {
      return [
        { label: 'Dashboard', href: '/(admin)/dashboard' },
        { label: 'Market', href: '/market' },
      ];
    }
    if (role === 'seller') {
      return [
        { label: 'Dashboard', href: '/(seller)/dashboard' },
        { label: 'Add Crop', href: '/add-crop' },
        { label: 'View Crops', href: '/view-crops' },
        { label: 'Market', href: '/market' },
      ];
    }
    // buyer / customer (default)
    return [
      { label: 'Dashboard', href: '/(buyer)/dashboard' },
      { label: 'Market', href: '/market' },
      { label: 'Advice', href: '/advice' },
    ];
  }, [role]);

  return (
    <View>
      <Menu
        visible={visible}
        onDismiss={() => setVisible(false)}
        anchor={
          <IconButton
            icon="dots-vertical"
            size={22}
            onPress={() => setVisible(true)}
            accessibilityLabel="Options"
          />
        }
      >
        {items.map((it) => (
          <Link
            key={it.label}
            href={it.href}
            onPress={() => setVisible(false)}
            style={{ paddingHorizontal: 16, paddingVertical: 10 }}
          >
            {it.label}
          </Link>
        ))}
        <Divider />
        <Link href="/profile" onPress={() => setVisible(false)} style={{ paddingHorizontal: 16, paddingVertical: 10 }}>
          Profile
        </Link>
        <Link href="/about" onPress={() => setVisible(false)} style={{ paddingHorizontal: 16, paddingVertical: 10 }}>
          About
        </Link>
        <Link href="/contact" onPress={() => setVisible(false)} style={{ paddingHorizontal: 16, paddingVertical: 10 }}>
          Contact
        </Link>
        <Divider />
        {user ? (
          <Link
            href="/"
            onPress={() => {
              setVisible(false);
              logout();
            }}
            style={{ paddingHorizontal: 16, paddingVertical: 10 }}
          >
            Logout
          </Link>
        ) : (
          <Link href="/login" onPress={() => setVisible(false)} style={{ paddingHorizontal: 16, paddingVertical: 10 }}>
            Login
          </Link>
        )}
      </Menu>
    </View>
  );
}
