---
title: "Optional: Integrate the SDK in a TypeScript Project"
metaTitle: "Optional: Integrate the SDK in a TypeScript Project"
metaDescription: "Optional: Integrate the SDK in a TypeScript Project"
---

> This tutorial is optional. If you are not interested in TypeScript, move along to the next tutorial.

In this part, you learn how to integrate the Agora RTC Web SDK in a TypeScript project and check the SDK version and browser compatibility.

If you are not familiar with TypeScript, we recommend that you refer to the [official documentation](http://www.typescriptlang.org/docs/handbook/basic-types.html).

## Implementation

Use the following methods to integrate and check the SDK version. We assume you use npm to build your project.

### Step 1: Get and integrate the SDK

Taking v4.9.3 as an example, you can globally install the Agora RTC Web SDK:

```shell
npm i agora-rtc-sdk-ng
```

Import the `AgoraRTC` from `"agora-rtc-sdk-ng"` in the `.ts` file to access the SDK:

```typescript
import AgoraRTC from "agora-rtc-sdk-ng"
```

### Step 2: Check the SDK version

Make sure your HTML file contains a `<p>` tag with id `version`.

**HTML**

```html
<p>The version of the Agora RTC Web SDK is: </p>
<p id="version"> </p>
```

In the JavaScript file, use the `VERSION` property to get the SDK version and then use `getElementById` to print the SDK version:

**TypeScript**

```typescript
import AgoraRTC from "agora-rtc-sdk-ng"
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

```typescript
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

Use the following CodePen editor to edit the HTML, CSS, and TypeScript file and run the project. If successful, the HTML page shows the SDK version and whether the SDK is compatible with the current browser.

The project uses the npm package of the Agora RTC Web SDK as an external package and saved in cdn.skypack.dev for CodePen.

<iframe height="400" style="width: 100%;" scrolling="no" title="Extension: Integrate SDK in a TypeScript project" src="https://codepen.io/yamasite/embed/preview/ExQgzby?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="{true}">
  See the Pen <a href="https://codepen.io/yamasite/pen/ExQgzby">
  Extension: Integrate SDK in a TypeScript project</a> by Lutkin Wang (<a href="https://codepen.io/yamasite">@yamasite</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>