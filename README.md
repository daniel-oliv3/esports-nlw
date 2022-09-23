### eSports

## Pré-Requisitos.

React.js, Node.js, React-Native, JavaScript, TypeScript.

**Node.js**
- Site: https://nodejs.org/en/

**React.js**
- Site: https://pt-br.reactjs.org/

**Typescript**
- Site: https://www.typescriptlang.org/

## Ferramentas do programador.

**Expo**
- Site: https://expo.dev/client

**Visual Studio Code**
- Site: https://code.visualstudio.com/download

**Insomnia**
- Site: https://insomnia.rest/download

**Postman**
- Site: https://www.postman.com

**Hoppscotch**
- Site: https://hoppscotch.io/pt-br/
- Github: https://github.com/hoppscotch/hoppscotch

##

### Figma.
**Figma do projeto.**
- Site:  https://www.figma.com/community/file/1150897317533332617

### Criação do projeto com Node.js
## Server (Back-End).
- Criação da pasta server.
- Criação do arquivo `package.json`.
```
npm init -y
```

## Dependência do projeto.

**Express**
- Express, `node_modules`, `package-lock.json`.
```
npm install express
```


**Rodando o projeto no terminal**
```
node src/server.js
```
- Depois de alterando a extenção do arquivo `.mjs`.
```
node src/server.mjs
```
- Localhost: http://localhost:3333/ads

**Keyboard Shortcuts**
- Vscode: **CTRL + P**, **>**
    - Add Selection To Next Find Match (`adicionar seleção à próxima correspondência de localização`).
    - Copy Line Down (`Duplica linhas`).

##

**Instalando o TypeScript**
```
npm i typescript -D
```

- Alterando a extenção do arquivo `server.mjs` para `server.ts`
- Adicionando trecho de codigo no arquivo `package.json`.

```ts
"scripts": {
    "build": "tsc",
    "dev": "tsnd src/server.ts",
  },
```

**Tsc**.
- Cria o arquivo de configuração do TypeScript `tsconfig.json`.
```
npx tsc --init 
```

- Cria o arquivo `server.js`, baseado no arquivo `server.ts`.
- Alterando trecho de codigo no arquivo `tsconfig.json`.
- Cria pasta `build`.
```ts
/* Modules */
    "module": "CommonJS",
    "rootDir": "./src",
    "moduleResolution": "node", 
/* Emit */
    "outDir": "./build",
```

- Comandos.

```
npm i ts-node-dev -D
```

```
npm run build
```

- https://www.npmjs.com/package/express
- DT, Types-Express
- https://www.npmjs.com/package/@types/express

```
npm install @types/express -D
```

### Criação do projeto com React.js
## Web (Front-End).

**Vite.js**
- Site: https://vitejs.dev/

```
npm create vite@latest
```
- Project name: web
- Select a framework: React
- Select a variant: TypeScript

**Instalação das depêndencias de desenvolvimento**
- `node_modules` `package-lock.json`.

```
npm install
```

*JSX: JavaScript + XML (HTML)*

**Roda o projeto Vite.js**
```
npm run dev
```

## Component, Props

**Componentes**
```ts
//Exemplo de Component
function Button(){
    return (
        <button>
            Enviar
        </button>
    )
}

function App(){
    return (
        <>
            <h1>Olá Mundo, Sapup3 na Área!</h1>

            <Button /> //Component
            <Button />
        </>
    )
}

export default App
```

**Propriedades**
```ts
//Exemplo de Props
interface ButtonProps{
  title: string;
}

function Button(props: ButtonProps){
  return (
      <button>
          {props.title}
      </button>
  )
}


function App() {  

  return (
    <>
      <h1>Olá Mundo, Sapup3 na Área!</h1>

      <Button title="Send 1"/>
      <Button title="Send 2"/>
      <Button title="Send 3"/>
    </>
  )
}

export default App
```

## Tailwind CSS.

Tailwind CSS
- Site: https://tailwindcss.com/

**Instalando o Tailwind CSS no projeto**
- Install: https://tailwindcss.com/docs/installation/using-postcss

```
npm install -D tailwindcss postcss autoprefixer
```

```
npx tailwindcss init -p
```

- Criação do arquivo `tailwind.config.cjs`e `postcss.config.cjs`.

```ts
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    extend: {
      backgroundImage: {
        galaxy: "url('./public/Fundo.png')",
        'nlw-gradient': 'linear-gradient(89.86deg, #9572FC 27.08%, #43E7AD 33.94%, #E1D55D 40.57%)',
        'game-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)',
      },
    },
  },
  plugins: [],
}

```

- Criar a pasta **styles** dentro de **src**.
- Criar o arquivo `main.css` dentro da pasta **styles**. 
- Colar trecho de codigo no arquivo `main.css`;

```css
//main.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```


**Extenções**
- Visual Studio Code.
    - `PostCSS language Suport`.
    - `Tailwind CSS IntelliSense`.

**Background Image**
- https://tailwindcss.com/docs/background-image

**Gradient Color Stops**
- https://tailwindcss.com/docs/gradient-color-stops


## Phosphor Icons. 

Phosphor é uma família de **ícones** flexível para interfaces, diagramas, apresentações — o que for, na verdade.

- Site: https://phosphoricons.com/
- Github: https://github.com/phosphor-icons/phosphor-home#phosphor-icons

**Instalando o Phosphor Icons**.

```
npm i phosphor-react
```

**Google Fonts**
- Inter: https://fonts.google.com/?query=Inter

```html
<link rel="preconnect" href="https://fonts.googleapis.com"> 
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet">
```













##


### Criação do projeto com React Native
## Mobile (Mobile).

**Expo**
- Site: https://expo.dev/

```
expo init mobile
```
- Blank (TypeScript) Same as blank but with TypeScript configuration

**Roda o projeto React Native**
```
expo start
```

**Expo Create Splash Screen**.
- Site: https://docs.expo.dev/guides/splash-screens/

**Extenções**
- Visual Studio Code.
    - `R Component`.

**Snippet** | **Content**
- rnbc - Create a new React Native Basic Component
- rnso - Create a new React Native Stylesheets Component
- rnsc - Create a new React Native Component With Styled 
- rnscs - Create a new Styled Component File
- rnsctc - Get the path to color theme props
- rnsctf - Get the path to fonts theme props
- nbc - Create Native Basic Component

**Expo Google Fonts**.
- Using a Google Font
- Site: https://docs.expo.dev/guides/using-custom-fonts/

```
expo install expo-font @expo-google-fonts/inter
```
## Bibliotecas.
**React Navigation**
- Site: https://reactnavigation.org/

```
expo install react-native-safe-area-context
```

**Linear Gradient**.
```
expo install expo-linear-gradient
```


































##



##

- By:  **Daniel Oliveira**

  - `Instagram` - https://www.instagram.com/danieloliv3/
  - `Facebook` - https://web.facebook.com/danielsapup3/
  - `Twitter` - https://twitter.com/danielsapup3/
  - `Linkedin` - https://www.linkedin.com/in/danielsapup3/

  ##