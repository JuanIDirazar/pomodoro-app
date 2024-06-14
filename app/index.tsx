import { StatusBar } from "expo-status-bar";
import { StyleSheet, Platform, Text, View, SafeAreaView } from "react-native";
import { useState } from "react";
import Header, { styles, HeaderProps } from "../src/components/Header";
import TimerModes from "../src/components/TimerModes";

// Asegúrate de tener un tipo para TimerMode si aún no lo tienes
type TimerMode = 'POMO' | 'SHORT' | 'BREAK';

export default function Page() {
  const [isWorking, setIsWorking] = useState(false);
  // Inicializa time con el valor numérico para POMO desde TimerModes
  const [time, setTime] = useState<number>(TimerModes.POMO);
  // Asegúrate de que el tipo de estado sea correcto, aquí usamos string porque TimerMode es un tipo de unión de strings
  const [currentTime, setCurrentTime] = useState<number>(TimerModes.POMO);
  
  const changeMode = (mode: TimerMode) => {
    setCurrentTime(TimerModes[mode]);
    // Actualiza el estado time con el valor numérico correspondiente de TimerModes
    setTime(TimerModes[mode]);
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingTop: Platform.OS === "android" ? 30 : undefined }}>
        <Text style={styles.title}>Pomodoro Timer</Text>
        <Text style={styles.subtitle}>Focus on your work</Text>
        <Text style={styles.subtitle}>and take a break</Text>
        <Text style={styles.text}>{time}</Text>
        <Header currentTime={currentTime} setCurrentTime={setCurrentTime} setTime={setTime} />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}