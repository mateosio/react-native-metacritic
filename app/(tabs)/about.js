import { Pressable, ScrollView, Text } from "react-native";
import { Link } from "expo-router";
import { HomeIcon } from "../../components/Icons";
import Screen from "../../components/Screen";


export default function About() {
  return (
    <Screen>
    <ScrollView>
      <Link asChild href="/">
        <Pressable>
          {({ pressed }) => <HomeIcon style={{opacity: pressed ? 0.5 : 1}} /> }          
        </Pressable>
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
    </Screen>
  );
}
