import Quiz from 'react-quiz-component';

const quiz = {
    "quizTitle": "Quiz",
    "questions": [
      {
        "question": "How does the Agora RTC Web SDK identify the participant in a video chat?",
        "questionType": "text",
        "answers": [
          "By user name",
          "By channel name and user name",
          "By channel name",
          "By App ID",
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Correct answer!",
        "messageForIncorrectAnswer": "Wrong answer!",
        "point": "10",
      },

      {
        "question": "Where can you configure SDK encoder config?",
        "questionType": "text",
        "answers": [
            "AgoraRTC.createClient",
            "client.join",
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Correct answer!",
        "messageForIncorrectAnswer": "Wrong answer!",
        "point": "10",
      },

      {
        "question": "Which class is inherited by the AgoraRTCClient class? ",
        "questionType": "text",
        "answers": [
            "Blob",
            "EventEmitter",
            "V8",
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Correct answer!",
        "messageForIncorrectAnswer": "Wrong answer!",
        "point": "10",
      },

      {
        "question": "How to connect to the transmission channel of Agora RTC Web SDK?",
        "questionType": "text",
        "answers": [
            "AgoraRTC.createClient",
            "AgoraRTCClient.join",
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Correct answer!",
        "messageForIncorrectAnswer": "Wrong answer!",
        "point": "10",
      },

      {
        "question": "What information do we need to connect to the Agora RTC transmission channel?",
        "questionType": "text",
        "answers": [
            "App ID",
            "Channel name",
            "User ID",
            "All of the above",
        ],
        "correctAnswer": "4",
        "messageForCorrectAnswer": "Correct answer!",
        "messageForIncorrectAnswer": "Wrong answer!",
        "point": "10",
      },

      {
        "question": "How to listen to channel events after connecting to the transmission channel?",
        "questionType": "text",
        "answers": [
            "AgoraRTCClient.on(eventName, listener)",
            "AgoraRTC.on(eventName, listener)",
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Correct answer!",
        "messageForIncorrectAnswer": "Wrong answer!",
        "point": "10",
      },


    ]
  }

const quiz04 = () => (
    <Quiz quiz={quiz} showInstantFeedback={true} shuffle={false} continueTillCorrect={true}/>
);

export default quiz04;

