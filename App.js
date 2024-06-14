import { StatusBar } from "expo-status-bar";
import { StyleSheet, Platform, Text, View, Button, SafeAreaView } from "react-native-web";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ paddingTop: Platform.OS=== "android" && 30}}>
            <Text style={styles.text}>Pomodoro</Text>
            <StatusBar style="auto" />
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    text:{
        fontSize: 32, 
        fontWeight: "bold",
    },
});