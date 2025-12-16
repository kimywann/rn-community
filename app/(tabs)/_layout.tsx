import { colors } from '@/constants';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.ORANGE_600,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name="my"
        options={{
          title: 'My',
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: 'Setting',
        }}
      />
    </Tabs>
  );
}
