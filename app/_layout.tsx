import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="admin/index" options={{ headerShown: false }} />
      <Stack.Screen name="admin/signup" options={{ headerShown: false }} />
      <Stack.Screen name="admin/login" options={{ headerShown: false }} />
      <Stack.Screen name="admin/dashboard" options={{ headerShown: false }} />
      <Stack.Screen name="admin/mod-applicants" options={{ headerShown: false }} />
      <Stack.Screen name="admin/mod-companies" options={{ headerShown: false }} />
    </Stack>
  );
}
