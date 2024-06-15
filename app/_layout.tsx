import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
      name="index"
      options={{
        title: "Home",
        headerTitleStyle: {
          fontWeight: "500",
        },
        headerShadowVisible: false,
        // headerShown: false
      }}
    />
    <Stack.Screen
      name="example-docs"
    />
    </Stack>
  );
}
