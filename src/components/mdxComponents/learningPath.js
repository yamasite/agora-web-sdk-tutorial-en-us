import * as React from 'react';

import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

const learningPath = () => (
  <div><Timeline lineColor={'#ddd'}>
    <TimelineItem
      key="001"
      dateText="Integrate the SDK"
      dateInnerStyle={{ background: '#9CC9F4', color: '#000' }}
      style={{ color: '#9CC9F4' }}
    >
      <h3><a href="introduction">Integrate the SDK</a></h3>
      <p>Integrate the SDK with one line of code.</p>
    </TimelineItem>
    <TimelineItem
      key="002"
      dateText="Video capture/render"
      dateInnerStyle={{ background: '#84BDF4', color: '#000' }}
      style={{ color: '#84BDF4' }}
    >
      <h3><a href="video-capture-render">Capture and render local video</a></h3>
      <p>Call the SDK to capture video signal with the camera and render locally.</p>
    </TimelineItem>
    <TimelineItem
      key="003"
      dateText="Audio capture/render"
      dateInnerStyle={{ background: '#69B1F6', color: '#000' }}
      style={{ color: '#69B1F6' }}
    >
      <h3><a href="audio-capture-render">Capture and render local audio</a></h3>
      <p>Call the SDK to capture audio signal with the microphone and render locally.</p>
    </TimelineItem>
    <TimelineItem
      key="004"
      dateText="Create transmission"
      dateInnerStyle={{ background: '#3F9DF7', color: '#000' }}
      style={{ color: '#3F9DF7' }}
    >
      <h3><a href="create-connection">Create transmission channel</a></h3>
      <p>Call the SDK to create video/audio transmission channel.</p>
    </TimelineItem>
    <TimelineItem
      key="005"
      dateText="Send/receive media"
      dateInnerStyle={{ background: '#1C8DFA', color: '#000' }}
      style={{ color: '#1C8DFA' }}
    >
      <h3><a href="send-receive-media">Send and receive media streams</a></h3>
      <p>Call the SDK to send locally captured video/audio and receive video/audio from the remote device.</p>
    </TimelineItem>
  </Timeline>
  </div>
);
export default learningPath;