// packages/mobile/App.tsx
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { capitalizeFirstLetter, CustomButton } from '@my-app/shared';

const showAlert = () =>
  Alert.alert(
    'Alert Title',
    'My Alert Msg',
    [
      {
        text: 'Cancel',
        onPress: () => Alert.alert('Cancel Pressed'),
        style: 'cancel',
      },
    ],
    {
      cancelable: true,
      onDismiss: () =>
        Alert.alert(
          'This alert was dismissed by tapping outside of the alert dialog.',
        ),
    },
  );

export default function App() {
  const message = 'hello from Expo monorepo!';

  return (
    <View style={styles.container}>
      <Text>{capitalizeFirstLetter(message)}</Text>
      <CustomButton 
        title="Click Me (Expo)" 
        onPress={showAlert} 
      />
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
  },
});