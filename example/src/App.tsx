import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ClipboardPlus from 'react-native-clipboard-plus';

export default function App() {
  const [result, setResult] = React.useState<string | undefined>();

  React.useEffect(() => {
    setResult(undefined);
    ClipboardPlus.paste().then((data) => {
      console.log(JSON.stringify(data));
      setResult('Received paste data!');
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
