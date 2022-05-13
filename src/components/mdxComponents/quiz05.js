import Quiz from 'react-quiz-component';

const quiz = {
    "quizTitle": "Quiz",
    "questions": [
      {
        "question": "How to send media streams with the SDK?",
        "questionType": "text",
        "answers": [
          "AgoraRTC.publish",
          "AgoraRTCClient.join",
          "AgoraRTCClient.publish"
        ],
        "correctAnswer": "3",
        "messageForCorrectAnswer": "Correct answer!",
        "messageForIncorrectAnswer": "Wrong answer!",
        "point": "10",
      },

      {
        "question": "How to receive streams with the SDK?",
        "questionType": "text",
        "answers": [
            "Call subscribe to receive streams by the \"user-published\" event",
            "Call subscribe to receive streams by the \"user-joined\" event",
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Correct answer!",
        "messageForIncorrectAnswer": "Wrong answer!",
        "point": "10",
      },

      {
        "question": "How to play the receive media stream?",
        "questionType": "text",
        "answers": [
            "Call play to play the video track returned by the subscribe method",
            "Call play to play the video track returned by the join method",
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Correct answer!",
        "messageForIncorrectAnswer": "Wrong answer!",
        "point": "10",
      },
    ]
  }

const quiz05 = () => (
    <Quiz quiz={quiz} showInstantFeedback={true} shuffle={false} continueTillCorrect={true}/>
);

export default quiz05;