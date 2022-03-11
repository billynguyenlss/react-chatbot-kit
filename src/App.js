import logo from './logo.svg';
import './App.css';
import 'react-chatbot-kit/build/main.css';
import Chatbot from 'react-chatbot-kit';

import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';
import config from './config';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Chatbot 
          config={config} 
          actionProvider={ActionProvider} 
          messageParser={MessageParser}
          disableScrollToBottom={false}
        />
      </header>
    </div>
  );
}

export default App;
