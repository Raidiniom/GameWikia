import { Colors } from "@/styles/theme";
import { StyleSheet, Text, View } from "react-native";

interface GameBarProps {
  title: string;
  description: string;
}

const GameBar = ({ title, description }: GameBarProps) => {
    
    return (
        <View style={styles.container} >
            <Text style={styles.title} >{title}</Text>
            <Text style={styles.description} >{description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.dark_cyan,
    borderRadius: 10,
    padding: 14,
    borderLeftWidth: 4,
    borderLeftColor: Colors.jade_green,
  },

  title: {
    color: Colors.vanilla_custard,
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  
  description: {
    color: Colors.pearl_aqua,
    fontSize: 14,
    lineHeight: 20,
    opacity: 0.9,
  },
});


export default GameBar