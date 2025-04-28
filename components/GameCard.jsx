import { StyleSheet, Text, View, Image } from "react-native";

export function GameCard({game}) {
  return (
    <View key={game.slug} style={styles.card}>
      <Image source={{ uri: game.image }} style={styles.image} />
      <Text style={styles.title}>{game.title}</Text>
      <Text style={styles.score}>Score:{game.score}</Text>
      <Text style={styles.description}>{game.description}</Text>
    </View>
  );
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
    },
    description: {
      fontSize: 16,
    },
    score: {
      fontSize: 20,
      fontWeight: "bold",
      color: "green",
      marginBottom: 10,
    },
  })