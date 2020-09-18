#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(ClipboardPlus, NSObject)

RCT_EXTERN_METHOD(clearAll:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(copyImage:(NSString *)base64 url:(NSString *)url
                withResolver:(RCTPromiseResolveBlock)resolve
                withRejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(paste:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)

@end
