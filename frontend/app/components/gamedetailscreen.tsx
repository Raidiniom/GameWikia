import { GameDetailStyle } from "../../styles/components/gamedetailstyle";
import { Href, useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export interface InfoTab {
  title: string;
  page: Href;
  icon: string; // emoji
}

export interface GameDetailScreenProps {
  title: string;
  tag: string;           // e.g. "Naval · Gacha · 2D"
  emoji: string;         // fallback icon if no image
  image?: ImageSourcePropType;
  tabs?: string[];       // tab bar labels, defaults to Guide/Characters/Events/Tips
  infoTabs: InfoTab[];
}

export default function GameDetailScreen({
  title,
  tag,
  emoji,
  image,
  tabs = ['Guide', 'Characters', 'Events', 'Tips'],
  infoTabs,
}: GameDetailScreenProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <View style={GameDetailStyle.bodyContainer}>

      {/* Hero */}
      <View style={GameDetailStyle.hero}>
        <Pressable style={GameDetailStyle.backRow} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={16} color="#7bbfb0" />
          <Text style={GameDetailStyle.backText}>Back</Text>
        </Pressable>

        <View style={GameDetailStyle.heroRow}>
          {image ? (
            <Image source={image} style={GameDetailStyle.heroIcon} />
          ) : (
            <View style={GameDetailStyle.heroIconPlaceholder}>
              <Text style={GameDetailStyle.heroIconEmoji}>{emoji}</Text>
            </View>
          )}
          <View style={{ flex: 1 }}>
            <Text style={GameDetailStyle.heroTitle}>{title}</Text>
            <Text style={GameDetailStyle.heroTag}>{tag}</Text>
          </View>
        </View>
      </View>

      {/* Tab bar */}
      <View style={GameDetailStyle.tabBar}>
        {tabs.map((tab, i) => (
          <Pressable
            key={i}
            style={[GameDetailStyle.tab, i === activeTab && GameDetailStyle.tabActive]}
            onPress={() => setActiveTab(i)}
          >
            <Text style={i === activeTab ? GameDetailStyle.tabTextActive : GameDetailStyle.tabText}>
              {tab}
            </Text>
          </Pressable>
        ))}
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={GameDetailStyle.content} showsVerticalScrollIndicator={false}>
        <Text style={GameDetailStyle.sectionLabel}>Select a category</Text>

        {infoTabs.map((info, i) => (
          <Pressable
            key={i}
            style={({ pressed }) => [
              GameDetailStyle.infoRow,
              pressed && GameDetailStyle.infoRowPressed,
            ]}
            onPress={() => router.push(info.page)}
          >
            <View style={GameDetailStyle.infoRowLeft}>
              <View style={GameDetailStyle.infoRowIcon}>
                <Text style={GameDetailStyle.infoRowEmoji}>{info.icon}</Text>
              </View>
              <Text style={GameDetailStyle.infoRowText}>{info.title}</Text>
            </View>
            <Text style={GameDetailStyle.infoRowChevron}>›</Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}