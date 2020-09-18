@objc(ClipboardPlus)
class ClipboardPlus: NSObject {

    @objc(clearAll:withRejecter:)
    func clearAll(resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
        UIPasteboard.general.items = []
        var result : NSMutableDictionary = [:]
        resolve(result)
    }

    @objc(copyImage:url:withResolver:withRejecter:)
    func copyImage(base64:String,url:String,resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
        let pasteboard = UIPasteboard.general
        if let decodedImageData = Data(base64Encoded: base64, options: .ignoreUnknownCharacters) {
            if (url != nil) {
                pasteboard.string = result["string"] = url
            }
            pasteboard.image = UIImage(data: decodedImageData)
            var result : NSMutableDictionary = [:]
            result["image"] = base64
            resolve(result)
        } else {
            reject("DecodeErr", "Decode image data fail", nil)
        }
    }

    @objc(paste:withRejecter:)
    func paste(resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
        let pasteboard = UIPasteboard.general
        var result : NSMutableDictionary = [:]
        if let stringData : String = pasteboard.string {
            result["string"] = stringData
        }        
        // if let urlData : URL = pasteboard.url {
        //     if let urlPath : String = urlData.absoluteString {
        //         result["url"] = urlPath
        //     }
        // }
        if let image : UIImage = pasteboard.image {
            if let imgPngData : Data = image.pngData() {
                if let imgBase64 : String? = imgPngData.base64EncodedString(options: .lineLength64Characters) {
                    result["image"] = imgBase64!
                }
            }
        }
        result["changeCount"] = pasteboard.changeCount
        resolve(result)
    }
}
