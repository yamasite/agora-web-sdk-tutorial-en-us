---
title: "Integrate the SDK with one line of code"
metaTitle: "Integrate the SDK with one line of code"
metaDescription: "Integrate the SDK with one line of code"
---

In this part, you learn to integrate the Agora RTC Web SDK by using one line of code and check the SDK version and browser compatibility.

## Implementation

You can use the following method to integrate the SDK and check the SDK version and browser compatibility. This page assumes that you are using HTML + JavaScript + CSS.

### Step 1: Get and integrate the SDK

The simplest way is to get the SDK by using a network URL. Taking v4.11.0 as an example, you add the reference to the `<head>` part of an HTML file:

```html
<script src="https://download.agora.io/sdk/release/AgoraRTC_N-4.11.0.js" type="text/javascript"></script>
```

The SDK exports a global `AgoraRTC` object, which you can directly access.

### Step 2: Check the SDK version

After integration, you can print the SDK version in the HTML file.

Make sure your HTML file contains a `<p>` tag with id `version`.

**HTML**

```html
<p>The version of the Agora RTC Web SDK is: </p>
<p id="version"> </p>
```

In the JavaScript file, use the `VERSION` property to get the SDK version and then use `getElementById` to print the SDK version:

**JavaScript**

```javascript
// The AgoraRTC class is the entry point of the Agora RTC Web SDK
let version = AgoraRTC.VERSION;
// Print the SDK version to HTML
document.getElementById("version").innerHTML = version;
```

### Step 3: Check browser compatibility

Make sure your HTML file contains a `<span>` tag with id `compatibility`:

```html
<p>The browser you are using <span id="compatibility"> </span> Agora RTC Web SDK.</p>
```

In the JavaScript file, call `checkSystemRequirements` to get browser compatibility information, and then call `getElementById` to print the SDK version to HTML.

```javascript
let supportText = "";
let isSupported = AgoraRTC.checkSystemRequirements();

switch (isSupported) {
  case true:
    supportText = "supports";
    break;
  case false:
    supportText = "does not support";
    break;
}

// Print browser compatibility data to HTML
document.getElementById("compatibility").innerHTML = supportText;
```

## Programming task

Use the following CodePen editor to edit the HTML, CSS, and JavaScript file and run the project. If successful, the HTML page shows the SDK version and whether the SDK is compatible with the current browser.

The project uses the CDN url of the Agora RTC Web SDK as external JavaScript. Click **Resources** for details.

<iframe height="800" style="width: 100%;" scrolling="no" title="Agora RTC Web SDK Tutorial" src="https://codepen.io/yamasite/embed/preview/bGLwJdq?default-tab=html%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="{true}" allow="microphone;camera">
  See the Pen <a href="https://codepen.io/yamasite/pen/bGLwJdq">
  Agora RTC Web SDK Tutorial</a> by Lutkin Wang (<a href="https://codepen.io/yamasite">@yamasite</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Questions

<Newquiz01 />
