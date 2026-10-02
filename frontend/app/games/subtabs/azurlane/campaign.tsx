import { AlStyle } from "@/styles/screens/alstyle";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Campaign() {
    const campaignNodes = ['1-1', '1-2', '1-3', '2-1', '2-2', '2-3', '3-1', '3-2', '3-3'];

    return (
        <ScrollView style={AlStyle.bodyContainer}>
            <View style={AlStyle.pageTitleContainer}>
                <Text style={AlStyle.pageTitle}>Campaign</Text>
            </View>

            <View>
                {campaignNodes.map((node, index) => (
                    <TouchableOpacity key={`${node}-${index}`}>
                        <Text style={AlStyle.pageTitle}>{node}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
}