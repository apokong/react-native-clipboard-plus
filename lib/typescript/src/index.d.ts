declare type ClipboardPlusPasteboardData = {
    changeCount: number;
    string: string;
    url: string;
    image: string;
};
declare type ClipboardPlusType = {
    clearAll(): Promise<ClipboardPlusPasteboardData | undefined>;
    copyText(text: string): Promise<ClipboardPlusPasteboardData>;
    copyUrl(url: string): Promise<ClipboardPlusPasteboardData>;
    copyImage(base64: string, uri: string | undefined): Promise<ClipboardPlusPasteboardData>;
    paste(): Promise<ClipboardPlusPasteboardData>;
};
declare const _default: ClipboardPlusType;
export default _default;
