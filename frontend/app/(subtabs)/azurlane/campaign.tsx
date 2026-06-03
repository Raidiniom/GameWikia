import { AlStyle } from "@/styles/screens/alstyle";
import { ScrollView, Text, View } from "react-native";

export default function Campaign() {

	return (
		<ScrollView style={AlStyle.bodyContainer}>
            <View style={AlStyle.pageTitleContainer}>
                <Text style={AlStyle.pageTitle}>Campaign</Text>
            </View>
        </ScrollView>
	)
}