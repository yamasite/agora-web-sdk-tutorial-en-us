import Quiz from 'react-quiz-component';

const quiz = {
    "quizTitle": "Quiz",
    "questions": [
      {
        "question": "The getCameras method, which gets camera devices, is a synchronous method or asynchronous method?",
        "questionType": "text",
        "answers": [
          "Synchronous method",
          "Asynchronous method",
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Correct answer!",
        "messageForIncorrectAnswer": "Wrong answer!",
        "point": "10",
      },

      {
        "question": "Which is correct regarding the MediaDeviceInfo object returned by the getCameras method?",
        "questionType": "text",
        "answers": [
            "Reuses the MediaDeviceInfo method from the WebRTC API",
            "Returns microphone device information",
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Correct answer!",
        "messageForIncorrectAnswer": "Wrong answer!",
        "point": "10",
      },

      {
        "question": "Which is correct regarding the tracks in Agora RTC Web SDK?",
        "questionType": "text",
        "answers": [
            "Reuses the track in WebRTC",
            "Reuses the stream in WebRTC",
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Correct answer!",
        "messageForIncorrectAnswer": "Wrong answer!",
        "point": "10",
      },

      {
        "question": "How to play camera video track in a webpage?",
        "questionType": "text",
        "answers": [
            "Call the member method play without specifying the rendering target",
            "Call the member method play and specify a DOM element as the rendering target。",
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Correct answer!",
        "messageForIncorrectAnswer": "Wrong answer!",
        "point": "10",
      },

    ]
  }

const quiz02 = () => (
    <Quiz quiz={quiz} showInstantFeedback={true} shuffle={false} continueTillCorrect={true}/>
);

export default quiz02;

