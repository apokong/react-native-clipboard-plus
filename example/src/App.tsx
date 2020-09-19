import * as React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import ClipboardPlus from 'react-native-clipboard-plus';
import tempData from './tempData';

const Button = ({ disabled, title, onPress }: any) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        styles.buttonContainer,
        {
          opacity: disabled ? 0.5 : 1,
        },
      ]}
      onPress={onPress}
    >
      <Text style={styles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default function App() {
  const [textinput, setTextinput] = React.useState<string | undefined>(
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
  );

  const [changecount, setChangecount] = React.useState<number | undefined>();
  const [pasteString, setPasteString] = React.useState<string | undefined>();
  const [pasteUrl, setPasteUrl] = React.useState<string | undefined>();
  const [pasteImage, setPasteImage] = React.useState<string | undefined>();

  const pasteData = async () => {
    let { string, url, image, changeCount } = await ClipboardPlus.paste();
    console.log('image!!!', image);
    setChangecount(changeCount);
    setPasteString(string);
    setPasteUrl(url);
    setPasteImage(image);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={{
          flex: 1,
        }}
        contentContainerStyle={styles.contentContainer}
      >
        <View
          style={{
            width: '100%',
            paddingVertical: 20,
            paddingHorizontal: 20,
            alignItems: 'flex-start',
          }}
        >
          <TextInput
            style={{
              width: '100%',
              minHeight: 80,
              backgroundColor: '#EEEEEE',
              borderRadius: 10,
              padding: 10,
              fontSize: 13,
            }}
            placeholder="Text to be copied"
            value={textinput}
            multiline
            onChangeText={(t) => setTextinput(t)}
          />
          <Button
            disabled={!textinput}
            title="Copy text"
            onPress={async () =>
              textinput && (await ClipboardPlus.copyText(textinput))
            }
          />
          <View style={styles.divider} />

          <Text>https://www.google.com/</Text>
          <Button
            title="Copy url"
            onPress={async () =>
              await ClipboardPlus.copyUrl('https://www.google.com/')
            }
          />
          <View style={styles.divider} />

          <Image
            style={{
              width: Dimensions.get('window').width / 2,
              height: Dimensions.get('window').width / 2,
              resizeMode: 'contain',
            }}
            source={{ uri: `data:image/jpeg;base64,${tempData}` }}
          />
          <Button
            title="Copy image"
            onPress={async () =>
              await ClipboardPlus.copyImage(tempData, undefined)
            }
          />
          <View style={styles.divider} />
        </View>

        <View
          style={{
            width: '100%',
            paddingVertical: 20,
            paddingHorizontal: 20,
            alignItems: 'flex-start',
            backgroundColor: '#FFE402',
          }}
        >
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Button title="Paste from Clipboard" onPress={() => pasteData()} />
            <Button
              title="Clear Clipboard"
              onPress={async () => {
                await ClipboardPlus.clearAll();
                pasteData();
              }}
            />
          </View>
          <Text style={styles.bold}>Change Count</Text>
          <Text>{changecount}</Text>
          <Text style={styles.bold}>String</Text>
          <Text>{pasteString}</Text>
          <Text style={styles.bold}>URL</Text>
          <Text>{pasteUrl}</Text>
          <Text style={styles.bold}>Image base64</Text>
          <Text numberOfLines={3}>{pasteImage}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 34,
    borderRadius: 34,
    backgroundColor: '#000',
    paddingHorizontal: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 6,
  },
  buttonTitle: {
    fontSize: 13,
    color: '#FFFF',
  },
  divider: {
    marginVertical: 5,
    width: '100%',
    height: 1,
  },
  bold: { fontWeight: '900' },
});
