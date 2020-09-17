import { NativeModules } from 'react-native';

type ClipboardPlusType = {
  multiply(a: number, b: number): Promise<number>;
};

const { ClipboardPlus } = NativeModules;

export default ClipboardPlus as ClipboardPlusType;
