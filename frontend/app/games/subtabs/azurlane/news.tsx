import { AlStyle } from "@/styles/screens/alstyle";
import { ScrollView, Text, View } from "react-native";

export default function News() {
    
    return (
        <ScrollView style={AlStyle.bodyContainer}>
            <View style={AlStyle.pageTitleContainer}>
                <Text style={AlStyle.pageTitle}>News & Events</Text>
            </View>
        </ScrollView>
    )
}