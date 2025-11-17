// App.tsx
import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native"; // <-- Importação CORRETA AQUI
import { styles } from "./styles";
import sonicImage from './assets/sonicStart.webp';


const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={sonicImage}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.contentWrapper}>
          <TouchableOpacity onPress={() => console.log('Start button pressed!')}>
            <Text style={styles.title}>Touch to start</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
   
export default App;