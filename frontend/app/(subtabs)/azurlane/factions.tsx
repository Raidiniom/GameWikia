import { AlStyle, ALFaction } from "@/styles/screens/alstyle";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Factions() {
    
    const faction_list = [
        'Eagle Union',
        'Royal Navy',
        'Sakura Empire',
        'Iron Blood',
        'Dragon Empery',
        'Sardegna Empire',
        'Northern Parliament',
        'Iris Libre',
        'Vichya Dominion',
        'Tulipa',
        'META',
        'Tempesta',
        'Misc',
    ]
    
    return (
        <ScrollView style={AlStyle.bodyContainer}>
            <View  style={AlStyle.pageTitleContainer}>
                <Text style={AlStyle.pageTitle}>Factions</Text>
            </View>

            <View style={ALFaction.factionContainer}>
                <ScrollView>
                    <View style={ALFaction.gridContainer}>
                        {faction_list.map((index) => (
                            <TouchableOpacity
                                style={ALFaction.factionCard}
                            >
                                <Image 
                                    style={ALFaction.imageStyle} 
                                />
                                <Text style={ALFaction.textStyle}>{index}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>
            </View>
        </ScrollView>
    )
}