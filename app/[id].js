import { Link } from "expo-router";
import { View, Text, ActivityIndicator, ScrollView, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import Screen from "../components/Screen";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { getGameDetails } from "../lib/metacritic";
import { Score } from "../components/Score";

export default function Detail() {
  const { id } = useLocalSearchParams();
  const [gameInfo, setGameInfo] = useState(null);

  useEffect(() => {
    if (id) {
      getGameDetails(id).then(setGameInfo);
    }
  }, [id]);

  return (
    <Screen className="flex-1 justify-center items-center bg-black">
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#ffee00" },
          headerTintColor: "black",
          headerLeft: () => {},
          headerTitle: "Titulo",
          headerRight: () => {},
        }}
      />
      <View>
        {gameInfo === null ? (
          <ActivityIndicator />
        ) : (
          <>
            <ScrollView>
              <View className="justifyCenter items-center text-center">
                <Image
                  className="mb-4 rounded"
                  source={{ uri: gameInfo.image }}
                  style={{ width: 214, height: 294 }}
                />
                <Score score={gameInfo.score} />
                <Text className="text-white text-center font-bold text-2xl">
                  {gameInfo.title}
                </Text>
                <Text className="text-white/70 mt-4 text-left mb-8 text-base">
                  {gameInfo.description}
                </Text>
                <Link href="/" className="text-blue-500">
                  Volver atrás
                </Link>
              </View>
            </ScrollView>
          </>
        )}
      </View>
    </Screen>
  );
}
