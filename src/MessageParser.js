class MessageParser {
    constructor(actionProvider, state) {
        this.actionProvider = actionProvider;
        this.state = state;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase()
      
      // function to understand message
      if (lowerCaseMessage.includes("hello")) {
        this.actionProvider.greet()
      }

      if (lowerCaseMessage.includes("javascript")){
          this.actionProvider.handleJavascriptList();
      }
    }
  }
  
  export default MessageParser;