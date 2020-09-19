package com.reactnativeclipboardplus

import android.content.ClipboardManager;
import android.content.ClipData;
import android.content.Context;

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod


class ClipboardPlusModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "ClipboardPlus"
    }

    @ReactMethod
    fun clearAll(promise: Promise) {
      // var clipboard = getSystemService(Context.CLIPBOARD_SERVICE) as ClipboardManager
      // clipboard.clearPrimaryClip()
      // promise.resolve(null)
      promise.reject("clear function doesn't exist in Android")
    }

    @ReactMethod
    fun copyText(text: String, promise: Promise) {
      promise.reject("copyText function doesn't exist in Android")
    }
    @ReactMethod
    fun copyUrl(url: String, promise: Promise) {
      promise.reject("copyUrl function doesn't exist in Android")
    }
    @ReactMethod
    fun copyImage(base64: String, uri: String, promise: Promise) {
      promise.reject("copyImage function doesn't exist in Android")
    }

    @ReactMethod
    fun paste(promise: Promise) {
      // var clipboard = Context.getSystemService(Context.CLIPBOARD_SERVICE) as ClipboardManager
      // var result : HashMap<String, *> = HashMap<String, *> () 
      // val item = clipboard.primaryClip.getItemAt(0)
      // var stringData = item.text
      // if (stringData != null) {
      //   result.put("string" , stringData)
      // }
      // val urlData: Uri? = item.uri
      // if (urlData != null) {
      //   result.put("uri" , urlData)
      // }
      // val intentData: Intent? = item.intent
      // if (intentData != null) {
      //   result.put("uri" , intentData)
      // }

      // promise.resolve(result)
      promise.reject("paste function doesn't exist in Android")
    }
}
