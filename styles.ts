// styles.ts
import { StyleSheet, Dimensions,Text } from "react-native";

 // Pega a largura e altura da tela
const { width, height } = Dimensions.get('window');


export const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },

  image: {
    position: 'absolute', 
        width: height, // A largura do ImageBackground (antes da rotação) vira a altura da tela
        height: width, // A altura do ImageBackground (antes da rotação) vira a largura da tela
     // Centraliza o ImageBackground em seu espaço antes da rotação
        left: -(height - width) / 2, // Ajusta o offset X para centralizar
        top: -(width - height) / 2, // Ajusta o offset Y para centralizar
        
        transform: [
            { rotate: '90deg' }
        ],
  },
 title: {
        color: '#ffff00',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 300,
       
 },    

  contentWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'rgba(0, 0, 0, 0.4)',
        padding: 20,
  },
  overlay: {
    top: 80,
    left: 80,
    right: 50,
    bottom: 50,
    padding: 50,
    paddingTop: 20,
    paddingLeft: 150,
    paddingRight: 200,
    justifyContent: "center",
    alignItems: "center",
  },

  modalBox: {
    width: "80%",
    backgroundColor: "#111",
    padding: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#555",
    alignItems: "center",
  },

  modalText: {
    color: "#ffffff",
    fontSize: 20,
    marginBottom: 25,
  },

  inputsRow: {
    flexDirection: "row",
    gap: 20,
  },

  inputBox: {
    backgroundColor: "#ddd",
    width: 120,
    paddingVertical: 12,
    paddingHorizontal: 10,
    fontSize: 18,
    textAlign: "center",
    borderRadius: 3,
    color: "#ffffff",
  },
});
