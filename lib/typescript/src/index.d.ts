declare type ClipboardPlusPasteboardData = {
    changeCount: number;
    string: string;
    image: string;
};
declare type ClipboardPlusType = {
    clearAll(): Promise<ClipboardPlusPasteboardData | undefined>;
    copyImage(base64: string, url: string): Promise<ClipboardPlusPasteboardData>;
    paste(): Promise<ClipboardPlusPasteboardData>;
};
declare const _default: ClipboardPlusType;
export default _default;
