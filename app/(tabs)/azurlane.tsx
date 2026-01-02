import { AlStyle } from "@/styles/screens/alstyle";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import GameBar from "../components/gamebar";

export default function AzurLane() {
    return (
        <View style={AlStyle.bodyContainer} >
            <Text>Azur Lane</Text>

            <View>
                <ScrollView 
                    contentContainerStyle={{ gap: 10 }}
                >
                    <Text>Announcement</Text>
                    <Text>Announcement</Text>
                    <Text>Announcement</Text>
                    <Text>Announcement</Text>
                    <Text>Announcement</Text>
                    <Text>Announcement</Text>
                    <Text>Announcement</Text>
                    <Text>Announcement</Text>
                    <Text>Announcement</Text>
                    <Text>Announcement</Text>
                    <Text>Announcement</Text>
                    <Text>Announcement</Text>
                </ScrollView>
            </View>
        </View>
    );
}