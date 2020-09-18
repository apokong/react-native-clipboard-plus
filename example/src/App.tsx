import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ClipboardPlus from 'react-native-clipboard-plus';
import tempData from './tempData';

export default function App() {
  const [result, setResult] = React.useState<string | undefined>();

  React.useEffect(() => {
    const fetch = async () => {
      let pasteData1 = await ClipboardPlus.paste();
      console.log(JSON.stringify(pasteData1));
      setResult(JSON.stringify(pasteData1));

      await ClipboardPlus.clearAll();

      let pasteData2 = await ClipboardPlus.paste();
      console.log(JSON.stringify(pasteData2));
      setResult(
        JSON.stringify(pasteData1) +
          ' -> clearAll -> ' +
          JSON.stringify(pasteData2)
      );

      await ClipboardPlus.copyImage(tempData);

      let pasteData3 = await ClipboardPlus.paste();
      console.log(JSON.stringify(pasteData3));
      // setResult(
      //   JSON.stringify(pasteData1) +
      //     ' -> clearAll -> ' +
      //     JSON.stringify(pasteData2) +
      //     ' -> copyImage -> ' +
      //     JSON.stringify(pasteData3)
      // );
    };
    fetch();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result:</Text>
      <Text>{result}</Text>
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
