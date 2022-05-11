import Quiz from 'react-quiz-component';

const quiz = {
    "quizTitle": "Quiz",
    "questions": [
      {
        "question": "How to check the SDK version？",
        "questionType": "text",
        "answers": [
          "AgoraRTC.getSdkVersion",
          "AgoraRTC.checkSystemRequirements",
          "AgoraRTC.VERSION"
        ],
        "correctAnswer": "3",
        "messageForCorrectAnswer": "Correct!",
        "messageForIncorrectAnswer": "Wrong answer!",
        "point": "10",
      },

      {
        "question": "How to check whether the SDK is compatible with the browser?",
        "questionType": "text",
        "answers": [
            "AgoraRTC.getSdkVersion",
            "AgoraRTC.checkSystemRequirements",
            "AgoraRTC.VERSION"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Correct!",
        "messageForIncorrectAnswer": "Wrong answer!",
        "point": "10",
      }
    ]
  }

const quiz01 = () => (
    <Quiz quiz={quiz} showInstantFeedback={true} shuffle={false} continueTillCorrect={true}/>
);

export default quiz01;

