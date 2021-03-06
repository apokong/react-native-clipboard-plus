#import <React/RCTBridgeModule.h>
#import <MobileCoreServices/MobileCoreServices.h>

@interface RCT_EXTERN_MODULE(ClipboardPlus, NSObject)

RCT_EXTERN_METHOD(clearAll:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(copyText:(NSString *)text
                withResolver:(RCTPromiseResolveBlock)resolve
                withRejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(copyUrl:(NSString *)url
                withResolver:(RCTPromiseResolveBlock)resolve
                withRejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(copyImage:(NSString *)base64 uri:(NSString *)uri
                withResolver:(RCTPromiseResolveBlock)resolve
                withRejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(paste:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)

@end
