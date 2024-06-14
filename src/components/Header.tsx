import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";


//INTERFACES
interface HeaderProps {
    setCurrentTime: (time: number) => void;
    currentTime: number;
    setTime: (time: number) => void;
}

//OPTIONS
const options: string[] = [
    "Pomodoro",
    "Short Break",
    "Long Break"
];


// COMPONENT
const Header: React.FC<HeaderProps> = ({ currentTime, setCurrentTime, setTime }) => {

    function handlePress(index: number) {
        const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
        setCurrentTime(index); 
        setTime(newTime * 60);
    }

    return (
        <View style={styles.itemStyle}>
             {options.map((item, index) => (
                <TouchableOpacity
                 key={index}
                 onPress={()=> handlePress(index)}
                style={[styles.itemStyle,
                    currentTime !== index //Compara si el tiempo actual es igual al index
                    ? {backgroundColor: "#2c8cfa" }
                    : {backgroundColor: "#f0f0f0" }
                 ]}
                >
                    <Text style={{ textAlign: 'center'}}>{item}</Text>
                </TouchableOpacity>
             ))}
        </View>
    );
};




//STYLES
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      padding: 24,
    },
    main: {
      flex: 1,
      justifyContent: "center",
      maxWidth: 960,
      marginHorizontal: "auto",
    },
    title: {
      fontSize: 64,
      fontWeight: "bold",
      textAlign: "center",
      paddingBottom: 20,
    },
    subtitle: {
        fontSize: 30,
        color: "#38434D",
        textAlign: "center",
    },
    text:{
      fontSize: 32, 
      fontWeight: "bold",
      textAlign:"center",
  },
    itemStyle: {
        alignContent: "center", 
        textAlign: "center",
        borderRadius: 15,
        padding: 20,
        margin: 5,
        flexDirection:"row",
  },
});
  
export default Header;
export { options };
export { styles };
export type { HeaderProps };

