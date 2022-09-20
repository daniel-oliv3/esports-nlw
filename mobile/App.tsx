import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

interface ButtonProps{
  title: String;
}

//Component
function Button(props: ButtonProps){
  return (
    <>
      <TouchableOpacity>
        <Text>
          {props.title}
        </Text>
      </TouchableOpacity>
    </>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text> Olá Mundo, Sapup3 na Área! </Text>

      <Button title="Send 1"/>
      <Button title="Send 2"/>
      <Button title="Send 3"/>
      <Button title="Olá Mundo"/>

      <StatusBar style="auto" />
    </View>
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
