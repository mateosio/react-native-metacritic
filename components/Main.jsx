import { useState, useEffect } from "react";
import { View, ScrollView, ActivityIndicator, FlatList } from "react-native";
import { getLatestGames } from "../lib/metacritic";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { GameCard } from "./GameCard";

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
      <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
        {games.length === 0 ? (
          <ActivityIndicator size={"large"}/>
        ) : (
          <FlatList data={games} keyExtractor={game => game.slug} renderItem={({item}) => <GameCard game={item} />} />
        )}
      </View>
    </>
  );
}
