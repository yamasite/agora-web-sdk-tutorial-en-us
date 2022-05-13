---
title: "Create Transmission Channel"
metaTitle: "Create Transmission Channel"
metaDescription: "Create Transmission Channel"
---

In the previous tutorial, you have learned how to use Agora RTC Web SDK to capture and render local audio.

In this tutorial, you learn how to use the Agora RTC Web SDK to create a media transmission channel.

## Implementation

If Alice wants to have a video chat with Bob, they need to create a transmission channel. This channel needs to meet the following requirements:

- The channel can transmit media in either direction.

    > The transmission channel for Agora RTC Web SDK is [Agora SD-RTN™](https://www.agora.io/en/sd-rtn).

- Alice needs to know the address of Bob in the transmission channel; Bob also needs to know Alice's address in the transmission channel.

    > Agora RTC Web SDK defines user IDs to identify certain people for one-to-one communication.

    > However, communication can also be one-to-many or many-to-many. For example, Alice, Bob, and Charlie are having a video chat. If we only use address to identify people, each participant needs to know the address of all other participants and requires heavy signal transmission. So, the concept of channel is included. A channel contains multiple people. If Alice, Bob, and Charlie join the same channel, they can all broadcast media streams in the channel and all participants can receive the broadcast without passing addresses one-by-one.

In Agora RTC Web SDK, you need to perform the following steps:

1. Call `createClient` to create a client instance.

    You need to configure parameters such as channel mode and video encoding format. The SDK encodes the captured audio and video frames and sends them to SD-RTN™ for transmission.

    ```javascript
    // RTC mode, VP8 video encoding format
    let config = {mode: "rtc", codec: "vp8"};
    // Creates a client instance. The createClient method returns an AgoraRTCClient object.
    let client = AgoraRTC.createClient(config);
    ```

2. Create event listeners for the channel.

   `createClient` returns an `AgoraRTCClient` object, which inherits the [EventEmitter class](https://nodejs.org/api/events.html#class-eventemitter) of node.js. Thus, you can use `emitter.on(eventName, listener)` to add listeners for specified events. Agora RTC Web SDK returns channel states, such as users joining and leaving a channel and network status report, through events. You can use `emitter.off(eventName, listener)` to remove listeners.

    Based on the listener logic of `EventEmitter`:

    ```javascript
    server.on('connection', (stream) => {
        console.log('someone connected!');
    });
    ```

    We can create the following event listeners for the channel.

    ```javascript
    // Listener for remote users joining the current channel
    client.on('user-joined', (AgoraRTCRemoteUser) => {
        console.log('User：' +  AgoraRTCRemoteUser.uid + ' joined the current channel');
    });
    ```

3. Call `join` to join a channel. You need to configure App ID, token, channelId, and uid.

    > App ID is the your credential to use Agora cloud service. You can see that the previous tutorials did not use App ID at all, because all your previous operations were performed locally and were not correlated with transmission. You need to refer to [Get Started with Agora](https://docs.agora.io/en/Agora%20Platform/get_appid_token?platform=All%20Platforms) to register Agora account, create an Agora project (choose **APP ID** as the authentication mechanism) and get the App ID. Only apps with the same app ID can communicate with each other.
 
    > Token is a authentication mechanism used to improve the security of your app and is used with app ID. You can decide whether to enable token authentication. For the simplicity of this tutorial, we recommend that you stick to app ID authentication. If you insist on using tokens, see [Get Started with Agora](https://docs.agora.io/en/Agora%20Platform/get_appid_token?platform=All%20Platforms) to get an RTC temporary token.

    > Refer to the explanations above for channel names and user IDs. If you have not enabled token authentication, you can use any random name for channel ID and user ID. For example, the channel ID can be `"testChannel"` and the user ID can be `123456`. If you enable token authentication, because a token includes channel information (for temporary tokens), you must make sure that the channel ID is the same as the one you use to generate a temporary RTC token.

    ```javascript
    // Agora App ID
    let appId = "";
    // Channel name
    let channelId = "testChannel";
    // Token. Set it to null if you do not enable token authentication
    let token = null;
    // User ID
    let uid = 123456;

    // Join a channel
    client.join(appId, channelId, token, uid)
    .then((uid) => {
        console.log(uid + " joined channel!");
    })
    .catch((e) => {
        console.log("Failed to join channel!", e);
    });
    ```

## Programming tasks

Use the following CodePen editor to edit the HTML, CSS, and JavaScript file and run the project. If successful, the HTML page shows the success message.

Also, you can open this page in a new tab, edit the value of uid to join the channel as a remote user. You cannot use the same user ID to join a channel.

> You need to specify your App ID in the textbox to join the channel. See the steps above to register an Agora account, create a project, and get app ID. Do not save your App ID in a public repo or page.

> This demo assumes that your Agora project does not enable token authentication. If you insist, see [Get Started with Agora](https://docs.agora.io/en/Agora%20Platform/get_appid_token?platform=All%20Platforms) to generate an RTC temporary token and assign the token to the `token` parameter.

<iframe height="800" style="width: 100%;" scrolling="no" title="04: Create a transmission channel" src="https://codepen.io/yamasite/embed/preview/abqBvwq?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="{true}" allow="microphone;camera">
  See the Pen <a href="https://codepen.io/yamasite/pen/abqBvwq">
  04: Create a transmission channel</a> by Lutkin Wang (<a href="https://codepen.io/yamasite">@yamasite</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Questions

<Newquiz04 />