import Quiz from 'react-quiz-component';

const quiz = {
    "quizTitle": "Quiz",
    "questions": [
      {
        "question": "The getMicrophones method, which gets microphone devices, is a/an:",
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
        "question": "Which is correct regarding the MediaDeviceInfo object returned by getMicrophones?",
        "questionType": "text",
        "answers": [
            "Reuses the MediaDeviceInfo object of WebRTC",
            "Returns camera device information",
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Correct answer!",
        "messageForIncorrectAnswer": "Wrong answer!",
        "point": "10",
      },

      {
        "question": "Which is correct regarding the track in Agora RTC Web RTC?",
        "questionType": "text",
        "answers": [
            "Reuses the track of WebRTC",
            "Reuses the stream of WebRTC",
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Correct answer!",
        "messageForIncorrectAnswer": "Wrong answer!",
        "point": "10",
      },

      {
        "question": "How to play a microphone audio track on a webpage?",
        "questionType": "text",
        "answers": [
            "Call the member method play without specifying a target",
            "Call the member method play and specify a DOM element as the target",
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Correct answer!",
        "messageForIncorrectAnswer": "Wrong answer!",
        "point": "10",
      },

    ]
  }

const quiz03 = () => (
    <Quiz quiz={quiz} showInstantFeedback={true} shuffle={false} continueTillCorrect={true}/>
);

export default quiz03;

