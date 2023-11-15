  import { StatusBar } from 'expo-status-bar';
  import { Button, StyleSheet, Text, ToastAndroid, View } from 'react-native';

  export default function App() {
    return (
      <View style={styles.container}>
        <Text style = {textColorStyle.titleText}>Hello, how are doing? We are an app for generate random workout for you!</Text>
        <Button
        style = {{fontSize: 20, color: 'green'}}
        title='Generate Workout'
        onPress={() => alert('We are generating your workout now!')}
        >
          Generate Workout
        </Button>
        <StatusBar style="auto" />
      </View>
    );
  }

  const buttonStyle = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 50,
      backgroundColor: 'floralwhite ',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  const textColorStyle = StyleSheet.create({
    baseText: {
      fontFamily: 'Cochin',
    },
    titleText: {
      width: 300,
      flexDirection: 'row',
      textAlignVertical: 'top',
      justifyContent: 'center',
      fontSize: 20,
      color: 'black',
      fontWeight: 'bold',
    },
  });

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'floralwhite ',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
