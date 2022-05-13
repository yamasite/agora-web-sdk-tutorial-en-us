---
title: "Send and Receive Media"
metaTitle: "Send and Receive Media"
metaDescription: "Send and Receive Media"
---

Per the previous tutorial, you have learned how to use the Agora RTC Web SDK to create a media transmission channel.

In this part, you learn how to use the SDK to send and receive media streams.

## Implementation

Now Alice and Bob have established a transmission channel. They just need to send media streams to the channel to implement video chat.

Use the Agora RTC Web SDK to perform the following operations:

1. The local user calls `publish` to send media streams.

  > Still remember the media tracks created in the **Capture and Render Local Video** tutorial and the **Capture and Render Local Audio** tutorial? Now you can use the channel created in the **Create Transmission Channel** tutorial to send the tracks!

  ```javascript
  // Publish camera video track
  client
    .publish(cameraVideoTrack)
    .then(() => {
      console.log("Success");
    })
    .catch((e) => {
      console.log("Failure", e);
    });
  // Publish microphone audio track
  client
    .publish(microphoneAudioTrack)
    .then(() => {
      console.log("Success");
    })
    .catch((e) => {
      console.log("Failure", e);
    });
  ```

2. Listen to the media streams sent by remote users with the `"user-published"` event. The local user can subscribe to the media stream from the remote user.

  ```javascript
  // Add listener to media streams sent by remote users 
  client.on("user-published", (remoteUser) => {
    // Render remote video
    client
    .subscribe(remoteUser, "video")
    .then((remoteVideoTrack) => {
      remoteVideoTrack.play("remote-video");
    })
    .catch((e) => {
      console.log("Failed to play video!", e);
    });

    // Render remote audio
    client
    .subscribe(remoteUser, "audio")
    .then((remoteAudioTrack) => {
      remoteAudioTrack.play();
    })
    .catch((e) => {
      console.log("Failed to play audio!", e);
    });
  })
  ```

## Programming tasks

Use the following CodePen editor to edit the HTML, CSS, and JavaScript file and run the project. 

Also, you can open this page in a new tab, edit the value of uid to join the channel as a remote user. You cannot use the same user ID to join a channel.

<iframe height="800" style="width: 100%;" scrolling="no" title="05: Send and receive media tracks" src="https://codepen.io/yamasite/embed/preview/mdXOVby?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="{true}" allow="camera;microphone">
  See the Pen <a href="https://codepen.io/yamasite/pen/mdXOVby">
  05: Send and receive media tracks</a> by Lutkin Wang (<a href="https://codepen.io/yamasite">@yamasite</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Questions

<Newquiz05 />

## What's next?

Congratulations on successfully sending and receiving media streams by using the Agora RTC Web SDK. You have basically got the hang of creating a simple web browser application for real-time media communication.

Next, you can visit [Agora developer documentation](https://docs.agora.io/en/Video/product_video?platform=Web) for more details and advanced topics.

We plan to present more SDK tutorials to cover more functions and scenarios.Stay tuned!
