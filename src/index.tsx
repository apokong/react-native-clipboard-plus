import { NativeModules } from 'react-native';

type ClipboardPlusPasteboardData = {
  string: string;
  image: string;
};
type ClipboardPlusType = {
  copyImage(base64: string, url: string): Promise<ClipboardPlusPasteboardData>;
  paste(): Promise<ClipboardPlusPasteboardData>;
};

const { ClipboardPlus } = NativeModules;

export default ClipboardPlus as ClipboardPlusType;
