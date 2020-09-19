# react-native-clipboard-plus

React Native module for copy and paste image with Native Clipboard (currently iOS only)

## Installation

```sh
yarn add react-native-clipboard-plus
npx pod-install
```

## Usage

```js
import ClipboardPlus from 'react-native-clipboard-plus';

// Paste string and/or images from Native Clipboard
const pasteResult = await ClipboardPlus.paste();

// Clear contents from Native Clipboard
await ClipboardPlus.clearAll();

// Copy text into Native Clipboard
const copyResult = await ClipboardPlus.copyText('Text to be copied');

// Copy URL into Native Clipboard
const copyResult = await ClipboardPlus.copyUrl('https://www.google.com/');

// Copy base64 string into Native Clipboard
const copyResult = await ClipboardPlus.copyImage(base64, uri);
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
