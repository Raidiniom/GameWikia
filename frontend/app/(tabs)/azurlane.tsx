import { AlStyle } from "@/styles/screens/alstyle";
import { Href, useRouter } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function AzurLane() {
    const router = useRouter();

    const info_tab = [
        {
            title: "News & Events",
            page: '../(subtabs)/azurlane/news' as Href,
            icon: 'newspaper' as const,
        },
        {
            title: "Campaign Guide",
            page: '../(subtabs)/azurlane/campaign' as Href,
            icon: 'map' as const,
        },
        {
            title: "Gameplay Mechanics",
            page: '/alcontent' as Href,
            icon: 'game-controller' as const,
        },
        {
            title: "Factions",
            page: '../(subtabs)/azurlane/factions' as Href,
            icon: 'flag' as const,
        },
        {
            title: "Ship Collection",
            page: '../(subtabs)/azurlane/' as Href,
            icon: 'boat' as const,
        },
        {
            title: "Equipment Guide",
            page: '../(subtabs)/azurlane/' as Href,
            icon: 'construct' as const,
        },
        {
            title: "Combat Tips",
            page: '../(subtabs)/azurlane/' as Href,
            icon: 'shield' as const,
        },
    ];

    return (
        <ScrollView style={AlStyle.bodyContainer}>
            {/* Header */}
            <View style={AlStyle.headerContainer}>
                <Text style={AlStyle.mainTitle}>AZUR LANE</Text>
                <Text style={AlStyle.subtitle}>Commander's Terminal</Text>
            </View>

            {/* Info Tabs */}
            <View style={AlStyle.infoTab}>
                {info_tab.map((info, index) => (
                    <TouchableOpacity 
                        key={index} 
                        style={[
                            AlStyle.infoBar,
                            index === info_tab.length - 1 && AlStyle.lastInfoBar
                        ]}
                        onPress={() => router.push(info.page)}
                        activeOpacity={0.7}
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Ionicons 
                                name={info.icon} 
                                size={22} 
                                color={AzurLane.signal_yellow}
                                style={{ marginRight: 12 }}
                            />
                            <Text style={AlStyle.textColor}>{info.title}</Text>
                        </View>
                        <Ionicons 
                            name="chevron-forward" 
                            size={20} 
                            color={AzurLane.hull_gray}
                        />
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
}