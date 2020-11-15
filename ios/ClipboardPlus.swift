@objc(ClipboardPlus)
class ClipboardPlus: NSObject {
    @objc static func requiresMainQueueSetup() -> Bool {
        return false
    }

    @objc(clearAll:withRejecter:)
    func clearAll(resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
        let pasteboard = UIPasteboard.general
        pasteboard.items = []
        let result : NSMutableDictionary = [:]
        result["changeCount"] = pasteboard.changeCount
        resolve(result)
    }

    @objc(copyText:withResolver:withRejecter:)
    func copyText(text:String,resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
        let result : NSMutableDictionary = [:]
        let pasteboard = UIPasteboard.general
        pasteboard.string = text
        result["changeCount"] = pasteboard.changeCount
        resolve(result)
    }

    @objc(copyUrl:withResolver:withRejecter:)
    func copyUrl(url:String,resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
        let result : NSMutableDictionary = [:]
        let pasteboard = UIPasteboard.general
        pasteboard.url = URL(string: url)
        result["changeCount"] = pasteboard.changeCount
        resolve(result)
    }

    @objc(copyImage:uri:withResolver:withRejecter:)
    func copyImage(base64:String,uri:String,resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
        let pasteboard = UIPasteboard.general
        if let decodedImageData = Data(base64Encoded: base64, options: .ignoreUnknownCharacters) {
            let image = UIImage(data: decodedImageData)
            pasteboard.image = image
            let pasteboardtext : NSMutableDictionary = [:]
            if uri != nil {
                pasteboardtext["string"] = uri;
            }
            pasteboardtext["image"] = image;
            let pasteboardItems = [[kUTTypeUTF8PlainText as String: uri,kUTTypePNG as String: decodedImageData]]
            pasteboard.items = pasteboardItems
            let result : NSMutableDictionary = [:]
            result["changeCount"] = pasteboard.changeCount
            resolve(result)
        } else {
            reject("DecodeErr", "Decode image data fail", nil)
        }
    }

    @objc(paste:withRejecter:)
    func paste(resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
        let pasteboard = UIPasteboard.general
        let result : NSMutableDictionary = [:]
        if let stringData : String = pasteboard.string {
            result["string"] = stringData
        }        
        if let urlData : URL = pasteboard.url {
            let urlPath : String? = "\(urlData)"
            if urlPath != nil {
                result["url"] = urlPath!
            }
        }
        if let image : UIImage = pasteboard.image {
            if let imgPngData : Data = image.pngData() {
                let imgBase64 : String? = imgPngData.base64EncodedString(options: .lineLength64Characters)
                if imgBase64 != nil {
                    result["image"] = imgBase64!
                }
            }
        }  
        result["changeCount"] = pasteboard.changeCount
        resolve(result)
    }
}
