import { StyleSheet } from 'react-native';
import { Colors, AzurLane } from "../theme";

export const AlStyle = StyleSheet.create({
    // Main container
    bodyContainer: {
        backgroundColor: AzurLane.naval_blue,
        flex: 1,
        padding: 20,
    },
    
    // Header/Title styles
    headerContainer: {
        alignItems: 'center',
        marginBottom: 30,
        marginTop: 10,
    },
    mainTitle: {
        color: AzurLane.mist_white,
        fontSize: 32,
        fontWeight: '800',
        textShadowColor: AzurLane.ocean_cyan,
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 10,
        letterSpacing: 1,
    },
    subtitle: {
        color: AzurLane.hull_gray,
        fontSize: 14,
        marginTop: 5,
        letterSpacing: 0.5,
    },
    
    // Info tab container
    infoTab: {
        backgroundColor: AzurLane.steel_blue,
        padding: 15,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: AzurLane.ocean_cyan,
        shadowColor: AzurLane.abyss_black,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
    },
    
    // Individual info bars
    infoBar: {
        backgroundColor: AzurLane.ocean_cyan,
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderLeftWidth: 4,
        borderLeftColor: AzurLane.signal_yellow,
        borderRadius: 8,
        marginBottom: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: AzurLane.ocean_cyan + '30',
    },
    infoBarPressed: {
        backgroundColor: AzurLane.ocean_cyan + '40',
        transform: [{ scale: 0.98 }],
    },
    lastInfoBar: {
        marginBottom: 0,
    },
    
    // Text styles
    textColor: {
        color: AzurLane.mist_white,
        fontSize: 18,
        fontWeight: '600',
        letterSpacing: 0.3,
    },
    infoBarIcon: {
        color: AzurLane.signal_yellow,
        fontSize: 16,
    },

    // Sub Page Title
    pageTitleContainer: {
        alignItems: 'center',
    },
    pageTitle: {
        padding: 10,
        color: AzurLane.signal_yellow,
        fontSize: 24,
    },
});

export const ALFaction = StyleSheet.create({
    factionContainer: {
        flex: 1,
        backgroundColor: AzurLane.steel_blue,
        padding: 10,
        borderColor: AzurLane.abyss_black,
        borderWidth: 1,
        borderRadius: 8,
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
    },
    factionCard: {
        backgroundColor: AzurLane.ocean_cyan,
        borderWidth: 2,
        borderColor: AzurLane.signal_yellow,
        borderRadius: 8,
        flexWrap: 'wrap',
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        elevation: 3,
    },
    textStyle: {
        fontSize: 18,
        fontWeight: '600',
        letterSpacing: 0.3,
    },
    imageStyle: {
        backgroundColor: AzurLane.hull_gray,
        height: 100,
        width: 100,
        borderRadius: 8,
        resizeMode: 'cover',
    },
});