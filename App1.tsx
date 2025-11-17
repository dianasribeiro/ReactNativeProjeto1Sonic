// App.tsx
import React, { useState } from "react";
import { View, ImageBackground, Text, TextInput } from "react-native";
import { styles } from "./styles";
import sonic2Image from "./assets/sonic2.jpg";

const App = () => {
  const [inputYes, setInputYes] = useState("");
  const [inputNo, setInputNo] = useState("");

  return (
   <View style={styles.container}>
      <ImageBackground
        source={sonic2Image}
        resizeMode="cover"
        style={styles.image}>

        <View style={styles.overlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalText}>
              Are you sure you want to exit?
            </Text>

            <View style={styles.inputsRow}>
              <TextInput
                style={styles.inputBox}
                placeholder="Yes"
                placeholderTextColor="black"
                value={inputYes}
                onChangeText={setInputYes}
              />

              <TextInput
                style={styles.inputBox}
                placeholder="No"
                placeholderTextColor="black"
                value={inputNo}
                onChangeText={setInputNo}
              />
            </View>
          </View>
        </View>

      </ImageBackground>
    </View>
  );
};

export default App;
