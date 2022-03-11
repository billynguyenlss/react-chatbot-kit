import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';

import LearningOptions from "./components/LearningOptions/LearningOptions";
import LinkList from './components/LinkList/LinkList';

const config = { 
  botName: "Lily",
  initialMessages: [
      createChatBotMessage("Xin chào, Lily rất hân hạnh được hỗ trợ anh chị ạ!", {widget: "learningOptions",
    }),
    ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#FAA61F",
      borderRadius: "15px"
    },
    chatButton: {
      backgroundColor: "#FAA61F",
      borderRadius: "15px"
    }
  },
  customComponents: {
    // Replaces the default header
   header: () => <div style={{ backgroundColor: "#FAA61F", padding: "10px", borderRadius: "5px", fontSize: "16px" }}>Sun Life - Hỗ trợ mọi lúc mọi nơi</div>,
   // Replaces the default bot avatar
   //botAvatar: (props) => <MyAvatar {...props} />,
   // Replaces the default bot chat message container
   //botChatMessage: (props) => <MyCustomChatMessage {...props} />,
   // Replaces the default user icon
   //userAvatar: (props) => <MyCustomAvatar {...props} />,
   // Replaces the default user chat message
   //userChatMessage: (props) => <MyCustomUserChatMessage {...props} />
 },
  widgets: [
    {
        widgetName: "learningOptions",
        widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
        widgetName: "javascriptLinks",
        widgetFunc: (props) => <LinkList {...props} />,
        props: {
            options: [
                {
                    text: "Introduction to JS",
                    url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
                    id: 1,
                },
                {
                    text: "Mozilla JS Guide",
                    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
                    id: 2,
                },
                {
                    text: "Frontend Masters",
                    url: "https://frontendmasters.com",
                    id: 3,
                }
            ]
        }
    },
],
}

export default config;