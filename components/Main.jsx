import { useState, useEffect } from "react";
import { View, ActivityIndicator, FlatList, Pressable } from "react-native";
import { Link } from "expo-router";
import { getLatestGames } from "../lib/metacritic";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedGameCard } from "./GameCard";
import { Logo } from "./Logo";
import { CircleInfoIcon } from "./Icons";


export function Main() {
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    console.log("loadGames ejecutándose...");
    getLatestGames().then((data) => {
      setGames(data);
    });
  }, []);

  return (
    <>
      <View
        style={{
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          scrollY: "scroll",
          height: "100%",
        }}
      >
        <View className="pt-10" style={{ marginBottom: 20 }}>
          <Logo />
        </View>
        <Link asChild href="/about" className="text-blue-400 text-xl">
          <Pressable>
          <CircleInfoIcon />
          </Pressable>
        </Link>
        {games.length === 0 ? (
          <ActivityIndicator size={"large"} />
        ) : (
          <FlatList
            data={games}
            keyExtractor={(game) => game.slug}
            renderItem={({ item, index }) => (
              <AnimatedGameCard game={item} index={index} />
            )}
          />
        )}
      </View>
    </>
  );
}
