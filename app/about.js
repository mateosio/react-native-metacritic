import { ScrollView, Text } from "react-native";
import { Link } from "expo-router";

export default function About() {
  return (
    <ScrollView>
      <Link href="/" className="text-blue-400 text-xl">
        Ir al home
      </Link>
      <Text className="text-white font-bold mb-8 text-2xl">
        Sobre el proyecto
      </Text>
      <Text className="text-white text-white/90 mb-4">
        lorem ipsum asdlaskdlasd kldkasldksadlk ñlaksdñlaskdlñ asñdlkasñldk
        añsdlkasñldk añsdlkañsldk
      </Text>
      <Text className="text-white text-white/90 mb-4">
        lorem ipsum asdlaskdlasd kldkasldksadlk ñlaksdñlaskdlñ asñdlkasñldk
        añsdlkasñldk añsdlkañsldk
      </Text>
      <Text className="text-white text-white/90 mb-4">
        lorem ipsum asdlaskdlasd kldkasldksadlk ñlaksdñlaskdlñ asñdlkasñldk
        añsdlkasñldk añsdlkañsldk
      </Text>
      <Text className="text-white text-white/90 mb-4">
        lorem ipsum asdlaskdlasd kldkasldksadlk ñlaksdñlaskdlñ asñdlkasñldk
        añsdlkasñldk añsdlkañsldk
      </Text>
    </ScrollView>
  );
}
