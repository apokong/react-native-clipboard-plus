import { NativeModules } from 'react-native';

type ClipboardPlusPasteboardData = {
  changeCount: number;
  string: string;
  url: string;
  image: string;
};
type ClipboardPlusType = {
  clearAll(): Promise<ClipboardPlusPasteboardData | undefined>;
  copyText(text: string): Promise<ClipboardPlusPasteboardData>;
  copyUrl(url: string): Promise<ClipboardPlusPasteboardData>;
  copyImage(
    base64: string,
    uri: string | undefined
  ): Promise<ClipboardPlusPasteboardData>;
  paste(): Promise<ClipboardPlusPasteboardData>;
};

const { ClipboardPlus } = NativeModules;

export default ClipboardPlus as ClipboardPlusType;
