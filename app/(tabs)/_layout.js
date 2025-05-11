import { Tabs } from "expo-router";
import { HomeIcon, InfoIcons } from "../../components/Icons";

export default function TabsLAyout() {
    return(
        <Tabs screenOptions={{
            headerShown: false,
            tabBarStyle: {backgroundColor: "#000"},
            tabBarActiveTintColor: "#ffee00",
        }}>
            <Tabs.Screen 
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => <HomeIcon color={color} /> 
                }}
            />
            <Tabs.Screen 
                name="about"
                options={{
                    title: "About",
                    tabBarIcon: ({ color }) => <InfoIcons color={color} /> 
                }}
            />

            
        </Tabs>
    )
}