import { View, Pressable } from "react-native";
import { Stack, Link } from "expo-router";
import { Logo } from "../components/Logo";
import { CircleInfoIcon } from "../components/Icons";

export default function Layout() {
    return (
        <View className="flex-1 bg-black">
            <Stack
            screenOptions={{
                headerStyle: { backgroundColor: "black" },
                headerTintColor: "white",
                headerTitle: "",
                headerLeft: () => <Logo />,
                headerRight: () => (
                          <Link asChild href="/about" className="text-blue-400 text-xl">
                            <Pressable>
                              <CircleInfoIcon />
                            </Pressable>
                          </Link>
                        )

            }}/>
        </View>
    )
}
