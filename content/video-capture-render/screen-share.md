---
title: "Optional: Capture the Screen"
metaTitle: "Optional: Capture the Screen"
metaDescription: "Optional: Capture the Screen"
---

> This tutorial is optional. If you are not interested in screen capturing, you can move along to the next tutorial.

In this tutorial, you learn how to use the Agora RTC Web SDK to capture the screen.

## Implementation

To capture screen, you must meet the following conditions:

- Capture the screen and get system audio
- Send the captured video and audio to the SDK

For the Agora RTC Web SDK, refer to the following step to capture screen.

Call `createScreenVideoTrack` to create a screen video track.

**HTML**

```html
<h1>Share the screen</h1>
<div>
  <button id="enable_sound">Share with Sound Enabled</button>
  <button id="disable_sound">Share with Sound Disabled</button>
  <button id="reset">Reset the play area</button>
</div>
<div id="play-area"></div>
```

**CSS**

```css
body {
font-family: system-ui;
background: #f06d06;
color: white;
text-align: center;
}

div {
height: 200px;
width: 50%;
}
```

**JavaScript**

```javascript
// Supports Edge, Chrome, Safari, and FireFox
// Shares audio
document.getElementById("enable_sound").onclick = function shareWithSound() {
  AgoraRTC.createScreenVideoTrack(
    {
      // Encoding config
      encoderConfig: "1080p_1",
      // Set video transmission optimization mode. Only Chrome supports this parameter.
      optimizationMode: "detail",
      // Only FireFox supports this parameter
      screenSourceType: "screen" // 'screen', 'application', 'window'
    },
    // Enables audio transmission. For Chrome, this parameter works only when sharing a Chrome tab page.
    "enable"
  )
    .then((trackList) => {
      trackList[0].play("play-area");
      trackList[1].play();
    })
    .catch((e) => {
      console.log("Failed to play screen!", e);
    });
};

// Encoding config
document.getElementById(
  "disable_sound"
).onclick = function shareWithoutSound() {
  AgoraRTC.createScreenVideoTrack(
    {
      // Encoding config
      encoderConfig: "1080p_1",
      // Set video transmission optimization mode. Only Chrome supports this parameter.
      optimizationMode: "detail",
      // Only FireFox supports this parameter
      screenSourceType: "screen" // 'screen', 'application', 'window'
      // Does not enable audio transmission.
    },
    "disable"
  )
    .then((screenVideoTrack) => {
      screenVideoTrack.play("play-area");
    })
    .catch((e) => {
      console.log("Failed to play screen!", e);
    });
};
```

## Programming practices

Use the following CodePen editor to edit the HTML, CSS, and JavaScript file and run the project. If successful, the HTML page renders the captured video and audio.

> For Chrome, the Share with Audio button works only when you are sharing a Chrome tab page. If you click **Share with Sound Enabled** to share content other than a Chrome tab page, an error occurs.

<iframe height="800" style="width: 100%;" scrolling="no" title="Extension: Screen sharing" src="https://codepen.io/yamasite/embed/preview/XWZNWPZ?default-tab=html%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true" allow="microphone; display-capture">
  See the Pen <a href="https://codepen.io/yamasite/pen/XWZNWPZ">
  Extension: Screen sharing</a> by Lutkin Wang (<a href="https://codepen.io/yamasite">@yamasite</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
