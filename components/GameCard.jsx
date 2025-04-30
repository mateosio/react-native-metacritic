import { useEffect, useRef } from "react";
import { StyleSheet, Text, View, Image, Animated } from "react-native";
import { Score } from "./Score";

export function GameCard({game}) {
  return (
    <View key={game.slug} className="flex-row bg-slate-500/10 p-4 rounded-xl gap-4 mb-10">
      <Image source={{ uri: game.image }} style={styles.image} />
      <View>
      <Text className="mb-1" style={styles.title}>{game.title}</Text>
      <Score score={game.score} maxScore={100}/>
      <Text className="mt-2 flex-shrink" style={styles.description}>{game.description}</Text>
      </View>
    </View>
  );
}

export function AnimatedGameCard({game, index}) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() =>{
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      delay: index * 250,
      useNativeDriver: true,
    }).start();
  },[opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <GameCard game={game} />
    </Animated.View>
  )
}

const styles = StyleSheet.create({
    card: {
      marginBottom: 20,
      alignItems: "center",
    },
    image: {
      width: 107,
      height: 147,
      borderRadius: 10,
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
      marginTop: 10,
      color: "#fff"
    },
    description: {
      fontSize: 16,
      color: "#eee"
    },
    score: {
      fontSize: 20,
      fontWeight: "bold",
      color: "green",
      marginBottom: 10,
    },
  })