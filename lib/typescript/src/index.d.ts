declare type ClipboardPlusPasteboardData = {
    string: string;
    image: string;
};
declare type ClipboardPlusType = {
    copyImage(base64: string, url: string): Promise<ClipboardPlusPasteboardData>;
    paste(): Promise<ClipboardPlusPasteboardData>;
};
declare const _default: ClipboardPlusType;
export default _default;
