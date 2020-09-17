package com.reactnativeclipboardplus

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class ClipboardPlusModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "ClipboardPlus"
    }

    @ReactMethod
    fun copyImage(base64: String, url: String, promise: Promise) {
      promise.resolve({})
    }
    @ReactMethod
    fun paste(promise: Promise) {
      promise.resolve({})
    }
}
