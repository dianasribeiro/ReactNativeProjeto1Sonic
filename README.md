

### <img width="81" height="103" alt="sonicMoedamini" src="https://github.com/user-attachments/assets/071c0edc-a23c-4d98-9850-679042e663b4" />  Sonic CD Mobile (Clone UI)


  Um projeto React Native que replica a tela inicial do clássico jogo Sonic CD the hedgehog, com uma peculiaridade: a imagem de fundo é rotacionada em 90 graus!

  __________________________________

### 🌟 Visão Geral

  Este aplicativo React Native demonstra como implementar uma imagem de background rotacionada, mantendo o conteúdo principal (texto e botões) legível e corretamente orientado na tela. Ele serve como um exemplo prático do uso de `ImageBackground`, `transform` para rotação e a manipulação de estilos para garantir que os elementos se posicionem e preencham a tela como esperado, mesmo após transformações.
  
 __________________________________

## ✨ Funcionalidades da primeira tela

* **Background de Imagem Rotacionado:** A imagem icônica do Sonic CD é usada como fundo e virada em 90 graus.
* **Conteúdo Orientado Corretamente:** Texto e elementos interativos sobre a imagem de fundo são ajustados com rotação inversa para permanecerem legíveis.
* **Preenchimento de Tela:** A imagem de fundo preenche 100% da tela, adaptando-se a diferentes proporções de tela.
* **Exemplo de Componente `ImageBackground`:** Demonstra o uso eficaz de `ImageBackground` para fundos complexos.
* **Interatividade Básica:** Um botão "Touch to start" para simular a interação inicial do jogo.

  ![sonicStart](https://github.com/user-attachments/assets/9b8a4bef-d9c1-45b5-aff1-ecb31f0cd0bd)
  
 __________________________________

  ## 🌴 Funcionalidades da segunda tela 🌴
  
* **Simulação de Fase de Jogo:** Um ambiente visual simples que remete a uma fase do jogo :"🌴PALMTREE PANIC 2🌴"
* **Barra de Status do Jogo:** Exibição de informações como "Rings", "Time" e "Score".
* **Diálogo de Confirmação:** Ao tentar sair (ou acionar uma ação), é apresentado um `TextInput` ao usuário.
* **Interação com `TextInput`:** O usuário pode digitar uma resposta (ex: "sim" ou "não").
* **Feedback ao Usuário:** Alertas simples para indicar o resultado da confirmação de saída.
* **Gerenciamento de Estado:** Demonstra como o estado do componente (o valor do `TextInput`) é gerenciado.

  ![sonic2](https://github.com/user-attachments/assets/bb2b8f2d-69ff-4926-89af-a001beaff627)

 __________________________________

## 🛠 Tecnologias Utilizadas

* **React Native:** Framework para desenvolvimento de aplicativos móveis nativos.
* **JavaScript/TypeScript:** Linguagem de programação.
* **Expo (opcional):** Para facilitar o desenvolvimento e testes via mobile.
  
 __________________________________

## 🚀 Como Rodar o Projeto

Siga estas instruções para configurar e executar o projeto em sua máquina local.

 __________________________________

### Pré-requisitos

Certifique-se de ter o Node.js, npm (ou Yarn) e o Expo CLI (se for usar Expo) instalados ou baixar o Expo go versão mobile.

* [Node.js](https://nodejs.org/en/download/)
* [npm](https://www.npmjs.com/get-npm) (geralmente vem com Node.js) ou [Yarn](https://classic.yarnpkg.com/en/docs/install)
* [Expo CLI](https://docs.expo.dev/workflow/expo-cli/) (execute `npm install -g expo-cli` ou `yarn global add expo-cli`) ou [React Native CLI](https://reactnative.dev/docs/environment-setup)
 __________________________________

1.  **Clone o repositório:**

    ```bash
    git clone [URL_DO_SEU_REPOSITORIO_AQUI]
    cd sonic-cd-mobile
    ```
 __________________________________

2.  **Instale as dependências:**

    ```bash
    npm install
    # ou
    yarn install
    ```
 __________________________________

3.  **Adicione a imagem do Sonic CD:**

    * Certifique-se de ter o arquivo `sonicStart.webp` na pasta `assets/`.
    * E a outra imagem `sonic2.jpg`
    * **Observação:** A imagem utilizada neste exemplo foi `{ uri: 'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg' }` durante o desenvolvimento para fins de exemplo. Substitua por `sonicImage from './assets/sonicStart.webp';` no `App.tsx` conforme sua preferência.
 __________________________________

### Executando o Aplicativo

#### Com Expo (Recomendado para testes rápidos)

1.  **Inicie o servidor de desenvolvimento:**
    ```bash
    expo start
    ```
 __________________________________

3.  **Abra o aplicativo:**
    * Escaneie o código QR com o aplicativo Expo Go no seu celular (Android ou iOS).
    * Ou execute no simulador/emulador pressionando `i` para iOS ou `a` para Android no terminal.
 __________________________________

#### Com React Native CLI (para projetos nativos puros)

1.  **Inicie o servidor Metro:**
    ```bash
    npx react-native start
    ```
 __________________________________

3.  **Execute em uma plataforma específica:**
    * **Android:**
        ```bash
        npx react-native run-android
        ```
 __________________________________

    * **iOS:** (Requer um Mac com Xcode)
        ```bash
        npx react-native run-ios
        ```
 __________________________________

## 💡 Aprendizados e Insights

* A diferença entre `resizeMode` como prop e estilos CSS.
* O uso de `transform: [{ rotate: '...' }]` para rotação de elementos.
* A necessidade de aplicar uma rotação inversa ao conteúdo filho quando o pai é rotacionado.
* Como garantir que um `ImageBackground` preencha a tela inteira, mesmo após rotação, utilizando `Dimensions` e `position: 'absolute'`.

 __________________________________
 ___________________________________


  # 🎮  Algumas fases do jogo 🎮
   

![sonic_cd_all_zones_by_ruensor_de46aoc-fullview](https://github.com/user-attachments/assets/6f97ed98-a146-42f4-92ab-bd89e1a3f0d3)


________________________________________________________________
_________________________________________________________________


<table style="width:100%; border:none;">
  <tr>
    <td style="width:auto; padding-right:10px; vertical-align:middle; text-align:center;">
      <img  width="85" height="120" alt="sonicreadmmini" src="https://github.com/user-attachments/assets/ea2c8bfb-bbf6-440e-9c77-347a76b3b4e3"/>
    </td>
    <td style="vertical-align:middle;">
      <h3>Autora do Projeto</h3>
      <p><strong>Diana Souza Ribeiro</strong></p>
      <p>Desenvolvedora FullStack - 
        Residente Serratec 2025.2</p>
    </td>
    <td style="width:auto; padding-left:10px; vertical-align:middle; text-align:center;">
      <img width="56" height="84" alt="sonicraposammini" src="https://github.com/user-attachments/assets/2b469c4d-075c-405e-884d-d98dc379b70a" />
    </td>
  </tr>

  </tr>
</table>













