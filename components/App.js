import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

          <View style={styles.container1}>
      <Text style={styles.text1}>navbar</Text>

      <StatusBar style="auto" />
    </View>
    <View style={styles.container2}>
      <Text style={styles.text2}>IMAGE/VIDEO</Text>
      <StatusBar style="auto" />
    </View>
    <View style={styles.container3}>
      <Text style={styles.text3}>SECTION2</Text>
      <StatusBar style="auto" />
    </View>
    <View style={styles.container4}>
      <Text style={styles.text4}>FOOTER</Text>
      <StatusBar style="auto" />
    </View>

      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    flex: .5,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    width: 500,
   
  },
  text1: {
  
    fontSize: 30,
    color: "white"
  },
    container1: {
    flex: .5,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    width: 500,
    fontSize: 90,

  },
  text2: {
  
    fontSize: 40,
    color: "orange"
  },
  container2: {
    flex: 3,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    width: 500,
  },
  text3: {
  
    fontSize: 10,
    color: "white"
  },
  container3: {
    flex: 3,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    width: 500,
  },
  text4: {
  
    fontSize: 20,
    color: "orange"
  },
  container4: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    width: 700,
  },
});
