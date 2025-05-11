import {View, Text} from "react-native";

export function Score({score, maxScore = 100}) {
    const getcolors = () => {
        const percentage = (score / maxScore) * 100;
        if (percentage < 70) return "bg-red-500 text-white";        
        if (percentage < 96) return "bg-yellow-500 text-white";
        return "bg-green-500 text-white";
    };

    color = getcolors();

        return(
        <View className={`${color} w-20 h-8 rounded-full justify-center items-center`}>
            <Text className="text-lg font-bold text-white">Score: {score}</Text>
        </View>
    )
}