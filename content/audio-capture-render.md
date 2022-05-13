---
title: "Capture and Render Local Audio"
metaTitle: "Capture and Render Local Audio"
metaDescription: "Capture and Render Local Audio"
---

In the previous tutorial, you have learned how to use the Agora RTC Web SDK to capture and render local video.

In this tutorial, you learn how to use the SDK to capture and render local audio.

## Implementation

To capture audio from the microphone for a web page, you need to meet the following conditions:

- A microphone is connected to the PC.
- The browser has access to the microphone.

For the SDK to capture audio from the microphone for a web page, refer to the following steps:

1. Call `getMicrophones` to get a list of available microphones.

    The `getMicrophones` method asynchronously returns an array of `MediaDeviceInfo` objects by Promise. The `MediaDeviceInfo` object reuses the [MediaDeviceInfo object](https://developer.mozilla.org/en-US/docs/Web/API/MediaDeviceInfo) from the WebRTC API. You can use then/catch (ES6) or async/await (ES7) to get the return value.

    **JavaScript**

    ```javascript
    // Gets a list of available microphones
    // If the browser still does not have access to the microphones, a dialog box pops out for you to grant access.
    AgoraRTC.getMicrophones()
    .then((deviceInfoArray) => {
         /* Operations after getting an array of MediaDeviceInfo objects */
    })
    .catch((e) => {
        console.log("Failed to get microphones!", e);
    });
    ```

2. Get microphone device information based on the `MediaDeviceInfo` object.

    In this tutorial, we create a drop-down menu for users to choose the microphone device. We use `label` to represent a device and `deviceId` for microphone access.

    > `label`: device label. Returns a DOMString to represent the device description. Returns `""` if the browser cannot access the device.

    > `deviceId`: device ID. Returns a DOMString to represent the device. A device ID is unique in a web app and stays unchanged as long as the browser cookie is not cleared, even if you start a new browser session. If you clear the browser cookie, the device ID resets. Likewise, if you enable browser anonymous mode, the device ID changes for new browser sessions. We recommend that you get the device ID every time before trying to get a device.

    **HTML**

    ```html
    <h1>Use a microphone to capture and render local audio</h1>
    <form>
    <b> Choose the microphone to use </b>
    <select id = "microphoneList" onchange = "getDeviceId()" >
    <option> ---Select the microphone--- </option>
    </select>
    </form>
    <p>The deviceId of your selected device is:</p>
    <p id="deviceId"></p>
    ```

    **JavaScript**

    ```javascript
    // Uses dict to map device label and device ID
    let dict = {};

    // Gets a list of microphones
    AgoraRTC.getMicrophones()
    .then((deviceInfoArray) => {
        for (let deviceInfo of deviceInfoArray) {
        let option = document.createElement("option");
        document.getElementById("microphoneList").appendChild(option);
        option.innerHTML = deviceInfo.label;
        dict[deviceInfo.label] = deviceInfo.deviceId;
        }
    })
    .catch((e) => {
        console.log("Failed to get microphones!", e);
    });

    // Selects the device label from the drop-down menu to display device ID
    function getDeviceId() {
        let microphoneList = document.getElementById("microphoneList");
        let deviceLabel = microphoneList.options[microphoneList.selectedIndex].text;
        document.getElementById("deviceId").innerHTML = dict[deviceLabel];
    }
    ```

3. Call `createMicrophoneAudioTrack` to create a camera video track and call the member method `play` to render the audio by the default speaker.

    > The track in the SDK is similar to the [track](https://developer.mozilla.org/zh-CN/docs/Web/API/MediaStreamTrack) in WebRTC. A track represents a specific video or audio source. Agora RTC SDK makes abstractions of video and audio tracks from different sources and defines different kinds of tracks, such as camera video track, screen video track, and custom video track.

    > This step is for demonstration purposes. In real-world scenario, your own voice does not have to be rendered locally.

    **HTML**

    ```html
    <h1>Use a microphone to capture and render local audio</h1>
    <form>
    <b> Choose the microphone to use </b>
    <select id="microphoneList" onchange="getDeviceId()">
        <option> ---Choose microphone--- </option>
    </select>
    </form>
    <p>The deviceId of your selected device is:</p>
    <p id="deviceId"></p>
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
    // Global variables
    let dict = {}; // Uses dict to map deviceLabel and deviceId
    let selectedDeviceId = ""; // The device ID of the device selected from the drop-down box 
    let microphoneAudioTrack = null; // Camera video track object

    // Gets a list of local cameras
    AgoraRTC.getMicrophones()
    .then((deviceInfoArray) => {
        for (let deviceInfo of deviceInfoArray) {
        let option = document.createElement("option");
        document.getElementById("microphoneList").appendChild(option);
        option.innerHTML = deviceInfo.label;
        dict[deviceInfo.label] = deviceInfo.deviceId;
        }
    })
    .catch((e) => {
        console.log("Failed to get microphones!", e);
    });

    // Creates camera video track
    AgoraRTC.createMicrophoneAudioTrack()
    .then((microphoneAudioTrack) => {
        // Renders video in the DOM element with the ID "play-area"
        microphoneAudioTrack.play();
    })
    .catch((e) => {
        console.log("Failed to play audio!", e);
    });

    // Selects the device label from the drop-down menu to display device ID
    function getDeviceId() {
    let microphoneList = document.getElementById("microphoneList");
    let deviceLabel = microphoneList.options[microphoneList.selectedIndex].text;
    selectedDeviceId = dict[deviceLabel];
    document.getElementById("deviceId").innerHTML = selectedDeviceId;

    if (microphoneAudioTrack != null) {
        microphoneAudioTrack.setDevice(selectedDeviceId);
    }
    }

    ```

## Programming task

Use the following CodePen editor to edit the HTML, CSS, and JavaScript file and run the project. If successful, the HTML page shows the device ID of your microphone and renders the captured audio locally.

<iframe height="800" style="width: 100%;" scrolling="no" title="03: Capture audio through microphone and render locally" src="https://codepen.io/yamasite/embed/preview/QWQGbbZ?default-tab=html%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="{true}" allow="microphone;camera">
  See the Pen <a href="https://codepen.io/yamasite/pen/QWQGbbZ">
  03: Capture audio through microphone and render locally</a> by Lutkin Wang (<a href="https://codepen.io/yamasite">@yamasite</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Questions

<Newquiz03 />